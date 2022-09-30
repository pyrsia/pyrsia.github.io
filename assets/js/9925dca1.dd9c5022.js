"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[7724],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/get_involved/local_dev_setup.md"},s="Getting Started",p={unversionedId:"get_involved/local_dev_setup",id:"get_involved/local_dev_setup",title:"Getting Started",description:"For now Pyrsia only supports Docker artifacts.",source:"@site/docs/get_involved/local_dev_setup.md",sourceDirName:"get_involved",slug:"/get_involved/local_dev_setup",permalink:"/docs/get_involved/local_dev_setup",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/get_involved/local_dev_setup.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/get_involved/local_dev_setup.md"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Governance",permalink:"/docs/get_involved/governance"},next:{title:"Pyrsia RFCs",permalink:"/docs/get_involved/rfc/"}},u={},c=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Building with Rust",id:"building-with-rust",level:3},{value:"Integrating and Building with Docker",id:"integrating-and-building-with-docker",level:3},{value:"Installing System Dependencies",id:"installing-system-dependencies",level:3},{value:"Obtain the Source Code",id:"obtain-the-source-code",level:2},{value:"Configure Docker Daemon for Pyrsia Network",id:"configure-docker-daemon-for-pyrsia-network",level:2},{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Simulating a network",id:"simulating-a-network",level:2},{value:"Testing a Node directly",id:"testing-a-node-directly",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"For now Pyrsia only supports Docker artifacts."),(0,o.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,o.kt)("h3",{id:"building-with-rust"},"Building with Rust"),(0,o.kt)("p",null,"Setup rust on your local machine as described in ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"Rust's getting started guide"),".\nYou may also follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/"},"How to Debug Rust with Visual Studio Code"),"\nif you are looking to make code changes."),(0,o.kt)("h3",{id:"integrating-and-building-with-docker"},"Integrating and Building with Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"macOS and Windows: Compose is included in Docker Desktop"),(0,o.kt)("li",{parentName:"ul"},"Linux: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker/compose#linux"},"Downloaded Compose"))))),(0,o.kt)("h3",{id:"installing-system-dependencies"},"Installing System Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Clang and OpenSSL",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"macOS: use ",(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"homebrew")," to install OpenSSL",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install openssl@1.1\n"))),(0,o.kt)("li",{parentName:"ul"},"Linux (ubuntu): use ",(0,o.kt)("inlineCode",{parentName:"li"},"apt")," to install Clang and OpenSSL",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"apt install clang libssl-dev\n")))))),(0,o.kt)("h2",{id:"obtain-the-source-code"},"Obtain the Source Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone this repo ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/pyrsia/pyrsia.git\n")),(0,o.kt)("h2",{id:"configure-docker-daemon-for-pyrsia-network"},"Configure Docker Daemon for Pyrsia Network"),(0,o.kt)("p",null,"Follow these steps to run a Pyrsia node and use it as the registry for all Docker Hub content."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd pyrsia/pyrsia_node")),(0,o.kt)("li",{parentName:"ol"},"You need to start the Pyrsia Node. To do so, you have 2 options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rust: ",(0,o.kt)("inlineCode",{parentName:"li"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run")),(0,o.kt)("li",{parentName:"ul"},"Docker Compose: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up --build"))))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": Do not to stop this process, a running node is required for the\nfollowing steps:"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"configure Docker")," to use Pyrsia, which is running at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:7888"),",\nopen your Docker daemon settings and add this entry in the root JSON object:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On Linux platforms"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'  "registry-mirrors": ["http://localhost:7888"]\n')),(0,o.kt)("p",{parentName:"li"},"By default you can find the Docker daemon settings here ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On other platforms"),":"),(0,o.kt)("p",{parentName:"li"},"You can find the Docker daemon settings in Docker Desktop -> Preferences -> Docker Engine."),(0,o.kt)("p",{parentName:"li"},"If you're running Pyrsia inside Docker, the ",(0,o.kt)("inlineCode",{parentName:"p"},"registry-mirrors")," settings can be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:7888")," as well. However if you're not running inside Docker, you cannot use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," because localhost will point to the Docker Desktop enviroment. Instead you have to use the hostname of your host machine. If you don't know/have that, you can add this to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," (on Mac) or ",(0,o.kt)("inlineCode",{parentName:"p"},"c:\\windows\\system32\\drivers\\etc\\hosts")," (on Windows):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"127.0.0.1       my-pyrsia-host\n")),(0,o.kt)("p",{parentName:"li"},"And then use that name in the Docker configuration file like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"registry-mirrors": ["http://my-pyrsia-host:7888"]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"using another terminal, use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," to pull an image from Pyrsia:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker pull ubuntu\n")),(0,o.kt)("p",{parentName:"li"},"(or pull any other Docker image of your choice)"),(0,o.kt)("p",{parentName:"li"}," Optionally, you can inspect the Pyrsia node logs to check where the image came from. This can be either:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"locally (if it was cached by Pyrsia before)"),(0,o.kt)("li",{parentName:"ul"},"from the Pyrsia network"),(0,o.kt)("li",{parentName:"ul"},"or from Docker Hub (if it wasn't previously available in the Pyrsia network)")))),(0,o.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the CLI tool"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ../pyrsia_cli\ncargo build\ncd ../target/debug\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Configure the CLI tool for your node using interactive subcommand "config" '),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," ./pyrsia config --add\n")),(0,o.kt)("p",{parentName:"li"},"OR place the config file in these OS specific locations:"),(0,o.kt)("p",{parentName:"li"},"Mac:  $HOME/Library/Preferences/rs.pyrsia-cli/pyrsia-cli.toml\nLinux: $HOME/.config/rs.pyrsia-cli/pyrsia-cli.toml or $XDG_CONFIG_HOME/rs.pyrsia-cli/pyrsia-cli.toml\nWindows: %APPDATA%","\\","Roaming","\\","pyrsia-cli","\\","config","\\","pyrsia-cli.toml"))),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ping the Pyrsia node and list the status"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./pyrsia ping\nConnection Successfull !! {}\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./pyrsia -s\nConnected Peers Count:       1\nArtifacts Count:             3 {"manifests": 1, "blobs": 2}\nTotal Disk Space Allocated:  5.84 GB\nDisk Space Used:             0.0002%\n')))),(0,o.kt)("p",null,"If you see a status message similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error: error sending request for url (http://localhost:7888/v2): error trying to connect: tcp connect error: Connection refused (os error 111)\n")),(0,o.kt)("p",null,"then your node is likely not running. Go back to step 3 to make sure the Pyrsia Node can be started."),(0,o.kt)("h2",{id:"simulating-a-network"},"Simulating a network"),(0,o.kt)("p",null,"Multiple Pyrsia Nodes can be started on the same computer by changing the ports they use as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 1:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 7888\n\n# RUST_LOG=debug DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 7888 # Use this environment variable if you would like to see debug logs\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 8181\n\n# RUST_LOG=debug DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 8181 # Use this environment variable if you would like to see debug logs\n")))),(0,o.kt)("p",null,"Re-running the status command, there should be an connect peer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./pyrsia -s\nConnected Peers Count:       1\nArtifacts Count:             3 {"manifests": 1, "blobs": 2}\nTotal Disk Space Allocated:  5.84 GB\nDisk Space Used:             0.0002%\n')),(0,o.kt)("p",null,"In a real life deployment these nodes will be spread over the network and will all run on their own 7888 port."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Word of caution: Running the peers for a few hours does generate network traffic and hence can drain your computer power. Ensure you are plugged into power if you are running multiple peers for a long time`")),(0,o.kt)("h2",{id:"testing-a-node-directly"},"Testing a Node directly"),(0,o.kt)("p",null,"To test the pyrsia_node status you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),"  and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location --request GET 'http://localhost:7888/status'\n")))}m.isMDXComponent=!0}}]);