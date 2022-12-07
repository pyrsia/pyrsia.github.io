---
title: Create macOS Installer for Rust Binary App
authors:
- name: Manas Das
  title: Pyrsia Contributor
  image_url: https://github.com/dasmanas.png
tags: [rust, macos, installer, homebrew, brew]
---

# Create macOS Installer for Rust Binary App

Recently the Rust programming language has enjoyed the success and thrilled the many developers specially working on 
System Level Software and building decentralized applications. When releasing your software, it is usually desirable to 
provide an easy to use installer for end users, ideally reducing the configuration burden on users and providing
individual developers with control of how the application should function at the end users environment.

There are advantages of having installers for your binaries and a few are mentioned here. 

- User doesn't need to provide any configuration, environment variables or base directories for the binary to run on users
machine. Rather software manufacturer packages those defaults with the installer.
- User can be alerted in the event of a new version release of the software.
- Developer can have more control on managing context of the app, providing backward compatibility, cleaning up storage 
used by the app.



## Build a small binary app in Rust & Create an Installer

In this sections we will build a small rust binary and an installer for macOS using [Homebrew](https://brew.sh/).

### Sample code for the rust binary

In this example we will exercise a basic rust binary application to demonstrate how to build installer. The rust program
which listens to a TCP Socket and write the text message on to listener's standard output (i.e. stdout) stream. The 
program also has an option to set the port from an environment variable. Final goal is to run the software as a 
background process and log the text to Listener's output stream whenever any other application sends message to the
socket.

Let's create a rust project named `rust_app` using `cargo new rust_app --bin`. It will create binary project structure
as below.

```shell
sample_rust_app
├── Cargo.lock
├── Cargo.toml
└── src
    └── main.rs
```

Content of Cargo.toml

```toml
[package]
name = "rust_app"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]

```

A very simple `main.rs` which listens on a port and writes the content into the STDOUT stream.

```rust
use std::env;
use std::io;
use std::io::{BufRead, Error};
use std::net::{TcpListener, TcpStream};

fn main() -> std::io::Result<()> {
  let port = env::var("LISTEN_PORT").unwrap_or(String::from("8080"));
  let listener = TcpListener::bind(format!("127.0.0.1:{}", port))?;
  // accept connections and process them serially
  for stream in listener.incoming() {
    handle_client(stream?)?;
  }
  Ok(())
}

fn handle_client(mut stream: TcpStream) -> Result<(), Error> {
  let mut reader = io::BufReader::new(&mut stream);
  let received: Vec<u8> = reader.fill_buf()?.to_vec();
  reader.consume(received.len());
  String::from_utf8(received)
          .map(|msg| println!("{}", msg))
          .map_err(|_| {
            io::Error::new(
              io::ErrorKind::InvalidData,
              "Couldn't parse received string as utf8",
            )
          })
}
```

### Build

Build the binary project using `cargo build --all-targets --workspace --release`. On successful build completion, binary
will be placed under `target/release/` directory. Let's try the binary with a sample input.

Run the binary while setting `LISTEN_PORT` to `9090` to accept messages on localhost 9090 TCP port.

```shell
$ export LISTEN_PORT=9090
$ ./target/release/rust_app
```

We are going to use netcat client to send message to TCP socket like below.

```shell
$ echo sample_text | nc localhost 9090
```

Now check the rust_app program terminal. It will show the same text i.e. `sample_text` whatever we send through netcat
client.

### Upload Archive in Cloud Storage

Now we will concentrate how to build an installer for macOS. We choose Homebrew package manager. Homebrew requires a URL
to download your binary. There are a few choices to host your executable, like any cloud provider with file storage
service or may be GitHub Releases. For the current use case, I am using GitHub Releases because it is free and easy to
use.

From the rust source code example, the binary is archived (using `tar -C target/release -czf rust_app.tar.gz rust_app`)
and uploaded into a GitHub release and is available under 
https://github.com/dasmanas/homebrew-rust-app/releases/download/v0.0.1/rust_app.tar.gz link. We will require this link 
in the installation instruction.

### Homebrew to Create the macOS Installer

Homebrew offers a way to install formula from third party repositories (i.e. Taps) like GitHub repositories instead of 
having it as part of core homebrew formula [homebrew-core](https://github.com/Homebrew/homebrew-core). We will create 
one such GitHub project to host our formula. GitHub project name is `homebrew-rust-app` while following the naming 
convention `homebrew-<project_name>` to have better convenience for the user while tapping the repository.

We will create the homebrew project in following structure which will hold the Ruby formula file under Formula directory
like shown here.

```
homebrew-rust-app
├── Formula
│   └── listener.rb
└── README.md
```

The Ruby file contains the installation instruction of your binary. Here is a sample ruby file for the formula. Here we
will try to achieve a few things for our example.
- A macOS installer for the binary.
- User of the software doesn't need manage any configuration. Defaults (config, env vars etc.) will be manage as part of
the installation.
- Install the software under a managed directory by Homebrew. This gives more control to the software manufacturer to
support backward compatibility or cleaning up memory in at times specially during software version update.
- An installer which can be run as background service.
- Sample test case for the installer which can be performed even before starting the installer as background service
will provide a better determine if there is any potential issue.

```ruby
class Listener < Formula
  desc "A small description of your formula"
  # A home page URL for your software
  homepage "https://github.com/dasmanas/homebrew-rust-app/releases"
  # URL from where the installer archive is available
  url "https://github.com/dasmanas/homebrew-rust-app/releases/download/v0.0.1/rust_app.tar.gz"
  # Sha256 can be calculated using "shasum -a 256 <archive_name.tar.gz>"
  sha256 "c19c678e755d98506c372dd631640702ef2b7da225ffaee20453deb0c2b4a213"
  license "Apache-2.0"
  version "0.0.1"

  def install
    ENV.deparallelize
    # Installing the app
    bin.install "rust_app"
  end

  def post_install
    # Instruction to create a directory which may be used to manage file resources for the app. rust_app directory
    # will be created under /usr/local/var directory.
    (var/"rust_app").mkpath
  end

  # Section to add different instruction for the user
  def caveats
    s = <<~EOS
      We've installed your rust_app.
      To test rust_app installation:
        brew test listener
      To run rust_app Node as a background service:
        brew services start listener 
      To check the service status:
        brew services list
      To stop rust_app Node background service:
        brew services stop listener
    EOS
    s
  end

  service do
    def envvarhash
      return {PATH: std_service_path_env, LISTEN_PORT: "9090"}
    end
    run [opt_bin/"rust_app"]
    keep_alive true
    process_type :background
    environment_variables envvarhash
    log_path var/"rust_app/logs/stdout/rust_app.log"
    error_log_path var/"rust_app/logs/stdout/rust_app.log"
    working_dir var/"rust_app"
  end

  test do
    (testpath/"rust_app").mkpath
    (testpath/"tmp").mkpath
    puts testpath
    child_pid = fork do
      puts "Child process initiated to run rust_app"
      puts "Child pid: #{Process.pid}, pgid: #{Process.getpgrp}"
      #setsid() creates a new session if the calling process is not a process group leader.
      Process.setsid
      puts "Child new pgid: #{Process.getpgrp}"
      puts "Initiating rust_app..."
      ENV.prepend "LISTEN_PORT", "9090"
      system "#{bin}/rust_app"
    end
    puts "Waiting for rust_app TCP socket listener to be up..."
    sleep 10
    begin
      system "echo sample_text | nc localhost 9090"
      assert_match "rust_app",
                   shell_output("lsof -nP -i4TCP:9090 | grep LISTEN")
    rescue
      puts "test1"
      assert_raises(CustomError) do
        raise CustomError, 'This is really bad'
      end
    ensure
      pgid = Process.getpgid(child_pid)
      puts "Sending HUP to group #{pgid}..."
      Process.kill('HUP', -pgid)
      Process.detach(pgid)
      puts "Parent process exiting..."
    end
  end
end
```

In the ruby script, the section `service do ... end` takes care of registering the software as background service. The 
block of ruby script creates the required plist file under `~/Library/LaunchAgents/` for the Launch Agents. At the same 
time it eliminates the need of handcrafted plist file.

We also added a `test do ... end` section to the ruby script to demonstrate the test capability. User can run a test on
the installer even before starting the same as a service. 

### How to install your software as service

Now it is ready to release the installer. To use the installer in macOS, here are some important tips.

- Tap the third party repository for the brew formula. E.g. `brew tap dasmanas/rust-app`.
- Install the formula from the tap. E.g. `brew tap listener`
- Test the installed binary. E.g. `brew test listener`
- Install the binary as service. E.g. `brew services start listener`. Once service has started as background process, 
the status of the service can be verified using `brew services list`.
- Background service can be stopped at any time using brew's services utility. E.g. `brew services stop listener`