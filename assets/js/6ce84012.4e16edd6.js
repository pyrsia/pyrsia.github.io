"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5885],{89964:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=(a(8209),["components"]),o={title:"Create macOS Installer for Rust Binary App",authors:[{name:"Manas Das",title:"Pyrsia Contributor",image_url:"https://github.com/dasmanas.png"}],tags:["rust","macos","installer","homebrew","brew"]},l="Create macOS Installer for Rust Binary App",p={permalink:"/blog/2022/12/02/create-macOS-brew-installer-for-rust-binary",source:"@site/blog/2022-12-02-create-macOS-brew-installer-for-rust-binary.md",title:"Create macOS Installer for Rust Binary App",description:"Recently the Rust programming language has enjoyed the success and thrilled the many developers specially working on",date:"2022-12-02T00:00:00.000Z",formattedDate:"December 2, 2022",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"macos",permalink:"/blog/tags/macos"},{label:"installer",permalink:"/blog/tags/installer"},{label:"homebrew",permalink:"/blog/tags/homebrew"},{label:"brew",permalink:"/blog/tags/brew"}],readingTime:7.015,hasTruncateMarker:!1,authors:[{name:"Manas Das",title:"Pyrsia Contributor",image_url:"https://github.com/dasmanas.png",imageURL:"https://github.com/dasmanas.png"}],frontMatter:{title:"Create macOS Installer for Rust Binary App",authors:[{name:"Manas Das",title:"Pyrsia Contributor",image_url:"https://github.com/dasmanas.png",imageURL:"https://github.com/dasmanas.png"}],tags:["rust","macos","installer","homebrew","brew"]},prevItem:{title:"Release 0.2.2",permalink:"/blog/2022/12/20/pyrsia-0.2.2-released"},nextItem:{title:"Release 0.2.1",permalink:"/blog/2022/11/30/pyrsia-0.2.1-released"}},u={authorsImageUrls:[void 0]},c=[{value:"Build a small binary app in Rust &amp; Create an Installer",id:"build-a-small-binary-app-in-rust--create-an-installer",level:2},{value:"Sample code for the rust binary",id:"sample-code-for-the-rust-binary",level:3},{value:"Build",id:"build",level:3},{value:"Upload Archive in Cloud Storage",id:"upload-archive-in-cloud-storage",level:3},{value:"Homebrew to Create the macOS Installer",id:"homebrew-to-create-the-macos-installer",level:3},{value:"How to install your software as service",id:"how-to-install-your-software-as-service",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Recently the Rust programming language has enjoyed the success and thrilled the many developers specially working on\nSystem Level Software and building decentralized applications. When releasing your software, it is usually desirable to\nprovide an easy to use installer for end users, ideally reducing the configuration burden on users and providing\nindividual developers with control of how the application should function at the end users environment."),(0,s.kt)("p",null,"There are advantages of having installers for your binaries and a few are mentioned here. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"User doesn't need to provide any configuration, environment variables or base directories for the binary to run on users\nmachine. Rather software manufacturer packages those defaults with the installer."),(0,s.kt)("li",{parentName:"ul"},"User can be alerted in the event of a new version release of the software."),(0,s.kt)("li",{parentName:"ul"},"Developer can have more control on managing context of the app, providing backward compatibility, cleaning up storage\nused by the app.")),(0,s.kt)("h2",{id:"build-a-small-binary-app-in-rust--create-an-installer"},"Build a small binary app in Rust & Create an Installer"),(0,s.kt)("p",null,"In this sections we will build a small rust binary and an installer for macOS using ",(0,s.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"."),(0,s.kt)("h3",{id:"sample-code-for-the-rust-binary"},"Sample code for the rust binary"),(0,s.kt)("p",null,"In this example we will exercise a basic rust binary application to demonstrate how to build an installer. The rust program\nwhich listens to a TCP Socket and write the text message on to listener's standard output (i.e. stdout) stream. The\nprogram also has an option to set the port from an environment variable. Final goal is to run the software as a\nbackground process and log the text to Listener's output stream whenever any other application sends message to the\nsocket."),(0,s.kt)("p",null,"Let's create a rust project named ",(0,s.kt)("inlineCode",{parentName:"p"},"rust_app")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo new rust_app --bin"),". It will create binary project structure\nas below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sample_rust_app\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main.rs\n")),(0,s.kt)("p",null,"Content of Cargo.toml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "rust_app"\nversion = "0.1.0"\nedition = "2021"\n\n# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html\n\n[dependencies]\n\n')),(0,s.kt)("p",null,"A very simple ",(0,s.kt)("inlineCode",{parentName:"p"},"main.rs")," which listens on a port and writes the content into the STDOUT stream."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'use std::env;\nuse std::io;\nuse std::io::{BufRead, Error};\nuse std::net::{TcpListener, TcpStream};\n\nfn main() -> std::io::Result<()> {\n  let port = env::var("LISTEN_PORT").unwrap_or(String::from("8080"));\n  let listener = TcpListener::bind(format!("127.0.0.1:{}", port))?;\n  // accept connections and process them serially\n  for stream in listener.incoming() {\n    handle_client(stream?)?;\n  }\n  Ok(())\n}\n\nfn handle_client(mut stream: TcpStream) -> Result<(), Error> {\n  let mut reader = io::BufReader::new(&mut stream);\n  let received: Vec<u8> = reader.fill_buf()?.to_vec();\n  reader.consume(received.len());\n  String::from_utf8(received)\n          .map(|msg| println!("{}", msg))\n          .map_err(|_| {\n            io::Error::new(\n              io::ErrorKind::InvalidData,\n              "Couldn\'t parse received string as utf8",\n            )\n          })\n}\n')),(0,s.kt)("h3",{id:"build"},"Build"),(0,s.kt)("p",null,"Build the binary project using ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo build --all-targets --workspace --release"),". On successful build completion, binary\nwill be placed under ",(0,s.kt)("inlineCode",{parentName:"p"},"target/release/")," directory. Let's try the binary with a sample input."),(0,s.kt)("p",null,"Run the binary while setting ",(0,s.kt)("inlineCode",{parentName:"p"},"LISTEN_PORT")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"9090")," to accept messages on localhost 9090 TCP port."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ export LISTEN_PORT=9090\n$ ./target/release/rust_app\n")),(0,s.kt)("p",null,"We are going to use netcat client to send message to TCP socket like below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo sample_text | nc localhost 9090\n")),(0,s.kt)("p",null,"Now check the rust_app program terminal. It will show the same text i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"sample_text")," which we sent through netcat\nclient."),(0,s.kt)("h3",{id:"upload-archive-in-cloud-storage"},"Upload Archive in Cloud Storage"),(0,s.kt)("p",null,"Now we will concentrate how to build an installer for macOS. We choose Homebrew package manager. Homebrew requires a URL\nto download your binary. There are a few choices to host your executable, like any cloud provider with file storage\nservice or may be GitHub Releases. For the current use case, I am using GitHub Releases because it is free and easy to\nuse."),(0,s.kt)("p",null,"From the rust source code example, the binary is archived (using ",(0,s.kt)("inlineCode",{parentName:"p"},"tar -C target/release -czf rust_app.tar.gz rust_app"),")\nand uploaded into a GitHub release and is available under\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dasmanas/homebrew-rust-app/releases/download/v0.0.1/rust_app.tar.gz"},"https://github.com/dasmanas/homebrew-rust-app/releases/download/v0.0.1/rust_app.tar.gz")," link. We will require this link\nin the installation instruction."),(0,s.kt)("h3",{id:"homebrew-to-create-the-macos-installer"},"Homebrew to Create the macOS Installer"),(0,s.kt)("p",null,"Homebrew offers a way to install formula from third party repositories (i.e. Taps) like GitHub repositories instead of\nhaving it as part of core homebrew formula ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-core"},"homebrew-core"),". We will create\none such GitHub project to host our formula. GitHub project name is ",(0,s.kt)("inlineCode",{parentName:"p"},"homebrew-rust-app")," while following the naming\nconvention ",(0,s.kt)("inlineCode",{parentName:"p"},"homebrew-<project_name>")," to have better convenience for the user while tapping the repository."),(0,s.kt)("p",null,"We will create the homebrew project in following structure which will hold the Ruby formula file under Formula directory\nlike shown here."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"homebrew-rust-app\n\u251c\u2500\u2500 Formula\n\u2502   \u2514\u2500\u2500 listener.rb\n\u2514\u2500\u2500 README.md\n")),(0,s.kt)("p",null,"The Ruby file contains the installation instruction of your binary. Here is a sample ruby file for the formula. Here we\nwill try to achieve a few things for our example."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A macOS installer for the binary."),(0,s.kt)("li",{parentName:"ul"},"User of the software doesn't need manage any configuration. Defaults (config, env vars etc.) will be manage as part of\nthe installation."),(0,s.kt)("li",{parentName:"ul"},"Install the software under a managed directory by Homebrew. This gives more control to the software manufacturer to\nsupport backward compatibility or cleaning up memory in at times specially during software version update."),(0,s.kt)("li",{parentName:"ul"},"An installer which can be run as background service."),(0,s.kt)("li",{parentName:"ul"},"Sample test case for the installer which can be performed even before starting the installer as background service\nwill provide a better determine if there is any potential issue.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class Listener < Formula\n  desc "A small description of your formula"\n  # A home page URL for your software\n  homepage "https://github.com/dasmanas/homebrew-rust-app/releases"\n  # URL from where the installer archive is available\n  url "https://github.com/dasmanas/homebrew-rust-app/releases/download/v0.0.1/rust_app.tar.gz"\n  # Sha256 can be calculated using "shasum -a 256 <archive_name.tar.gz>"\n  sha256 "c19c678e755d98506c372dd631640702ef2b7da225ffaee20453deb0c2b4a213"\n  license "Apache-2.0"\n  version "0.0.1"\n\n  def install\n    ENV.deparallelize\n    # Installing the app\n    bin.install "rust_app"\n  end\n\n  def post_install\n    # Instruction to create a directory which may be used to manage file resources for the app. rust_app directory\n    # will be created under /usr/local/var directory.\n    (var/"rust_app").mkpath\n  end\n\n  # Section to add different instruction for the user\n  def caveats\n    s = <<~EOS\n      We\'ve installed your rust_app.\n      To test rust_app installation:\n        brew test listener\n      To run rust_app Node as a background service:\n        brew services start listener \n      To check the service status:\n        brew services list\n      To stop rust_app Node background service:\n        brew services stop listener\n    EOS\n    s\n  end\n\n  service do\n    def envvarhash\n      return {PATH: std_service_path_env, LISTEN_PORT: "9090"}\n    end\n    run [opt_bin/"rust_app"]\n    keep_alive true\n    process_type :background\n    environment_variables envvarhash\n    log_path var/"rust_app/logs/stdout/rust_app.log"\n    error_log_path var/"rust_app/logs/stdout/rust_app.log"\n    working_dir var/"rust_app"\n  end\n\n  test do\n    (testpath/"rust_app").mkpath\n    (testpath/"tmp").mkpath\n    puts testpath\n    child_pid = fork do\n      puts "Child process initiated to run rust_app"\n      puts "Child pid: #{Process.pid}, pgid: #{Process.getpgrp}"\n      #setsid() creates a new session if the calling process is not a process group leader.\n      Process.setsid\n      puts "Child new pgid: #{Process.getpgrp}"\n      puts "Initiating rust_app..."\n      ENV.prepend "LISTEN_PORT", "9090"\n      system "#{bin}/rust_app"\n    end\n    puts "Waiting for rust_app TCP socket listener to be up..."\n    sleep 10\n    begin\n      system "echo sample_text | nc localhost 9090"\n      assert_match "rust_app",\n                   shell_output("lsof -nP -i4TCP:9090 | grep LISTEN")\n    rescue\n      puts "test1"\n      assert_raises(CustomError) do\n        raise CustomError, \'This is really bad\'\n      end\n    ensure\n      pgid = Process.getpgid(child_pid)\n      puts "Sending HUP to group #{pgid}..."\n      Process.kill(\'HUP\', -pgid)\n      Process.detach(pgid)\n      puts "Parent process exiting..."\n    end\n  end\nend\n')),(0,s.kt)("p",null,"In the ruby script, the section ",(0,s.kt)("inlineCode",{parentName:"p"},"service do ... end")," takes care of registering the software as background service. The\nblock of ruby script creates the required plist file under ",(0,s.kt)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/")," for the Launch Agents. At the same\ntime it eliminates the need of handcrafted plist file. For more information you can always refer to Homebrew's\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.brew.sh/Formula-Cookbook#service-files"},"Service files")," official doc."),(0,s.kt)("p",null,"We also added a ",(0,s.kt)("inlineCode",{parentName:"p"},"test do ... end")," section to the ruby script to demonstrate the test capability. User can run a test on\nthe installer even before starting the same as a service. "),(0,s.kt)("h3",{id:"how-to-install-your-software-as-service"},"How to install your software as service"),(0,s.kt)("p",null,"Now it is ready to release the installer. To use the installer in macOS, here are some important tips."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Tap the third party repository for the brew formula. E.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"brew tap dasmanas/rust-app"),"."),(0,s.kt)("li",{parentName:"ul"},"Install the formula from the tap. E.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"brew tap listener")),(0,s.kt)("li",{parentName:"ul"},"Test the installed binary. E.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"brew test listener")),(0,s.kt)("li",{parentName:"ul"},"Install the binary as service. E.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"brew services start listener"),". Once service has started as background process,\nthe status of the service can be verified using ",(0,s.kt)("inlineCode",{parentName:"li"},"brew services list"),"."),(0,s.kt)("li",{parentName:"ul"},"Background service can be stopped at any time using brew's services utility. E.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"brew services stop listener"))),(0,s.kt)("p",null,"In Pyrsia we built similar kind of installer for macOS. If you are a macOS user, you may also like to take a\nlook at the code base from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/homebrew-pyrsia"},"homebrew-pyrsia")," or try out\n",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorials/quick-installation"},"Quick Installation")," guide to install Pyrsia. For any improvement suggestion or to\ncontribute open issue or pull request accordingly under ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pyrsia"},"Pyrsia")," project."))}m.isMDXComponent=!0}}]);