"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[7647],{69004:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),s=(t(8209),["components"]),i={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/setup_on_macosx.md"},l="How to run 2 Pyrsia nodes natively on 1 MacOS machine",d={unversionedId:"tutorials/setup_on_macosx",id:"tutorials/setup_on_macosx",title:"How to run 2 Pyrsia nodes natively on 1 MacOS machine",description:"Download the release version of Pyrsia from Release v0.1.0",source:"@site/docs/tutorials/setup_on_macosx.md",sourceDirName:"tutorials",slug:"/tutorials/setup_on_macosx",permalink:"/docs/tutorials/setup_on_macosx",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/setup_on_macosx.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/setup_on_macosx.md"},sidebar:"tutorialSidebar",previous:{title:"How to start and debug Pyrsia Node using IDE",permalink:"/docs/tutorials/setting_up_ide"},next:{title:"Developer's Hub",permalink:"/docs/developers/"}},p={},u=[{value:"Create 2 separate nodes &quot;installations&quot;",id:"create-2-separate-nodes-installations",level:2},{value:"Start Node A",id:"start-node-a",level:3},{value:"Start Node B",id:"start-node-b",level:3},{value:"Good news",id:"good-news",level:3},{value:"Pyrsia CLI options",id:"pyrsia-cli-options",level:3},{value:"Using the Pyrsia CLI",id:"using-the-pyrsia-cli",level:2},{value:"Get Node status",id:"get-node-status",level:3},{value:"List all known peers",id:"list-all-known-peers",level:3},{value:"Using Pyrsia with Docker",id:"using-pyrsia-with-docker",level:2},{value:"Configure Docker desktop to use node A as registry mirror",id:"configure-docker-desktop-to-use-node-a-as-registry-mirror",level:2},{value:"Pull <code>alpine</code> docker image",id:"pull-alpine-docker-image",level:2}],c={toc:u};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-run-2-pyrsia-nodes-natively-on-1-macos-machine"},"How to run 2 Pyrsia nodes natively on 1 MacOS machine"),(0,r.kt)("p",null,"Download the release version of Pyrsia from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/releases/tag/v0.1.0"},"Release v0.1.0"),"\nUntar/Unzip the downloaded source code in a local folder."),(0,r.kt)("p",null,"Let's call this folder ",(0,r.kt)("inlineCode",{parentName:"p"},"PYRSIA_HOME"),". We will refer to this name in the following steps."),(0,r.kt)("p",null,"Build binaries for ",(0,r.kt)("inlineCode",{parentName:"p"},"pyrsia_node")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ncargo build --workspace\n")),(0,r.kt)("h2",{id:"create-2-separate-nodes-installations"},'Create 2 separate nodes "installations"'),(0,r.kt)("p",null,"This will create two copies of the same binary so that you can configure them\nas independent nodes. In ",(0,r.kt)("inlineCode",{parentName:"p"},"PYRSIA_HOME"),","),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Node A"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir nodeA\n\ncp target/debug/pyrsia_node nodeA\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Node B"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir nodeB\n\ncp target/debug/pyrsia_node nodeB\n")))),(0,r.kt)("h3",{id:"start-node-a"},"Start Node A"),(0,r.kt)("p",null,"In a new terminal start node A, http listen on 7888 and p2p listen on 44001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'cd $PYRSIA_HOME\ncd nodeA\nDEV_MODE=on RUST_LOG="pyrsia=debug,info"  ./pyrsia_node -H 0.0.0.0 -p 7888 -L /ip4/0.0.0.0/tcp/44001\n')),(0,r.kt)("p",null,"If everything goes well, you will see a line similar to the following in the\nlogs on the terminal (The IP address could be different than in the sample below):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# INFO  pyrsia::network::p2p > Local node is listening on "/ip4/192.168.0.110/tcp/44001/p2p/12D3KooWLKMbBzp4k1mcM2rYXs8VQgoCSNLxGUwnB1itouxYcnx3"\n')),(0,r.kt)("p",null,"If you do not find this line right away try with ",(0,r.kt)("inlineCode",{parentName:"p"},"grep 44001")),(0,r.kt)("h3",{id:"start-node-b"},"Start Node B"),(0,r.kt)("p",null,"In a new terminal start node B, http listen on 7889, p2p listen on 44002 and\nconnect to peer node A on port 44001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'cd $PYRSIA_HOME\ncd nodeB\nDEV_MODE=on RUST_LOG="pyrsia=debug,info"  ./pyrsia_node -H 0.0.0.0 -p 7889 -L /ip4/0.0.0.0/tcp/44002 --peer /ip4/127.0.0.1/tcp/44001\n')),(0,r.kt)("p",null,"If everything goes well, you will see a line similar to the following in the logs on the terminal. (The IP address could be different than in the sample below)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# DEBUG libp2p_swarm          > Connection established: PeerId("12D3KooWKzta9MMwnhA87ZKRy9PhN44X8N7twmgRhsgx1c1ZG3ex") Dialer { address: "/ip4/127.0.0.1/tcp/44001", role_override: Dialer }; Total (peer): 1. Total non-banned (peer): 1\n# and in nodeA output something like:\n# DEBUG libp2p_swarm            > Connection established: PeerId("12D3KooWGPwQfKN3Qvt8LosFAUxEtUUPM2BLRUqQHhFefBbJRXzY") Listener { local_addr: "/ip4/127.0.0.1/tcp/44001", send_back_addr: "/ip4/127.0.0.1/tcp/62373" }; Total (peer): 1. Total non-banned (peer): 1\n')),(0,r.kt)("p",null,"Notice that node A and node B have now connected as peers and are able to\ncommunicate with each other. Verify that the PeerId you see here is the same\nas that for node A."),(0,r.kt)("h3",{id:"good-news"},"Good news"),(0,r.kt)("p",null,"If you saw the above lines in your logs and did not see any failure/error\nmessages your Pyrsia node network has now been setup. Also that means we did\nnot break anything. \ud83d\ude1c"),(0,r.kt)("p",null,"You should now be able to interact with the Pyrsia Node."),(0,r.kt)("h3",{id:"pyrsia-cli-options"},"Pyrsia CLI options"),(0,r.kt)("p",null,"Pyrsia CLI is the ",(0,r.kt)("inlineCode",{parentName:"p"},"pyrsia")," executable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$PYRSIA_HOME/target/debug")," folder.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," option can show you all the ways you can interact with the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME/target/debug\n\n./pyrsia --help\npyrsia_cli 0.1.1 (ed7e87160df35676815fec073be8082a8f8e9789)\nDecentralized Package Network\n\nUSAGE:\n    pyrsia [SUBCOMMAND]\n\nOPTIONS:\n    -h, --help       Print help information\n    -V, --version    Print version information\n\nSUBCOMMANDS:\n    config -c    Pyrsia config commands\n    list -l      Shows list of connected Peers\n    ping         Pings configured pyrsia node\n    status -s    Shows node information\n    help         Print this message or the help of the given subcommand(s)\n")),(0,r.kt)("h2",{id:"using-the-pyrsia-cli"},"Using the Pyrsia CLI"),(0,r.kt)("p",null,"We will now look at the configuration and also configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"pyrsia_cli")," to\nconnect with Node B."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ncd target/debug\n./pyrsia config --show\nhost = 'localhost'\nport = '7888'\ndisk_allocated = '10 GB'\n")),(0,r.kt)("p",null,"Your Pyrsia CLI is now connected to the Pyrsia node running on port 7888.\nIf you would like to connect the CLI to Node B change the configuration using\nthe following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./pyrsia config --add\nEnter host:\nlocalhost\nEnter port:\n7889\nEnter disk space to be allocated to Pyrsia (Please enter with units ex: 10 GB):\n")),(0,r.kt)("p",null,"If everything worked well, you will see the following success message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Node configuration Saved !!\n")),(0,r.kt)("p",null,"Now you are ready to use the Pyrsia CLI."),(0,r.kt)("p",null,"Let us run through a few examples of how you can use the Pyrsia CLI"),(0,r.kt)("h3",{id:"get-node-status"},"Get Node status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./pyrsia status\nConnected Peers Count:       1\nArtifacts Count:             3 {"manifests": 1, "blobs": 2}\nTotal Disk Space Allocated:  5.84 GB\nDisk Space Used:             0.0002%\n')),(0,r.kt)("h3",{id:"list-all-known-peers"},"List all known peers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'./pyrsia list\nConnected Peers:\n["12D3KooWH1tJB9NMuzHcEd6TU9yG4mv2Lo4J2gaXaBLpyNCrqRR9"]\n')),(0,r.kt)("p",null,"Now that you have setup both the Pyrsia Node and Pyrsia CLI you are ready to\nstart using Pyrsia."),(0,r.kt)("h2",{id:"using-pyrsia-with-docker"},"Using Pyrsia with Docker"),(0,r.kt)("p",null,"Once you have setup the Pyrsia nodes and the CLI you are ready to start using\nPyrsia with Docker."),(0,r.kt)("h2",{id:"configure-docker-desktop-to-use-node-a-as-registry-mirror"},"Configure Docker desktop to use node A as registry mirror"),(0,r.kt)("p",null,"In your Docker desktop installation -> Settings -> Docker Engine where Docker\nallows you to set registry-mirrors. Setup node A as a registry mirror by\nadding/editing the following in the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonc"},' "registry-mirrors": [\n   "http://192.168.0.110:7888" // (IP address of host machine: port number for node A)\n ]\n')),(0,r.kt)("p",null,"On Mac OS X using localhost does not work(because the request is made from the\nDocker Desktop VM), so you will need to specify the IP address of host machine\nOn Ubuntu (linuxy env) we were able to automate this and use localhost."),(0,r.kt)("p",null,"You will need to restart Docker Desktop. Once restarted you should be able to\npull Docker images through Pyrsia:"),(0,r.kt)("h2",{id:"pull-alpine-docker-image"},"Pull ",(0,r.kt)("inlineCode",{parentName:"h2"},"alpine")," docker image"),(0,r.kt)("p",null,"First make sure Alpine is not in local Docker cache, then pull Alpine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker rmi alpine # remove alpine from local docker cache\ndocker pull alpine\n")),(0,r.kt)("p",null,"When you pull an image of Alpine from Docker Hub, Pyrsia node A should act as\na pull-through cache and show a line similar to the following in its log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# DEBUG pyrsia::docker::v2::handlers::blobs> Step 3: "sha256:3d243047344378e9b7136d552d48feb7ea8b6fe14ce0990e0cc011d5e369626a" successfully stored locally from docker.io\n')),(0,r.kt)("p",null,"You can try the same with node B acting as the registry mirror."),(0,r.kt)("p",null,"Change the docker registry mirror to node B"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonc"},' "registry-mirrors": [\n   "http://192.168.0.110:7889" // (IP address of host machine: port number of node B)\n ]\n')),(0,r.kt)("p",null,"Remove alpine and perform a docker pull again"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker rmi alpine # remove alpine from local docker cache\ndocker pull alpine\n")),(0,r.kt)("p",null,"Now node B is acting as the pull-through cache and should show a line similar\nto the following in its log, indicating ",(0,r.kt)("inlineCode",{parentName:"p"},"alpine")," was retrieved from the\nPyrsia network (in this case node A)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# DEBUG pyrsia::docker::v2::handlers::blobs> Step 2: "sha256:3d243047344378e9b7136d552d48feb7ea8b6fe14ce0990e0cc011d5e369626a" successfully stored locally from Pyrsia network.\n')),(0,r.kt)("p",null,"Success!!!"),(0,r.kt)("p",null,"You have just built yourself a working Pyrsia network. Enjoy using it and\nshowcasing it to your teams and please share any feedback!"),(0,r.kt)("p",null,"Next you can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://pyrsia.io/docs/tutorials/demo/"},"demo instructions")," and setup a real Pyrsia network and use it with your CI system."))}h.isMDXComponent=!0}}]);