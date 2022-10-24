"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[651],{26567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=(n(8209),["components"]),l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/setting_up_ide.md",sidebar_position:6},s="How to start and debug Pyrsia Node using IDE",u={unversionedId:"developers/setting_up_ide",id:"developers/setting_up_ide",title:"How to start and debug Pyrsia Node using IDE",description:"This tutorial describes how to start and debug Pyrsia using Microsoft Visual Code and IntelliJ IDEA.",source:"@site/docs/developers/setting_up_ide.md",sourceDirName:"developers",slug:"/developers/setting_up_ide",permalink:"/docs/developers/setting_up_ide",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/setting_up_ide.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/setting_up_ide.md",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pyrsia AutoNAT Implementation (IETF STUN)",permalink:"/docs/developers/pyrsia-autonat"},next:{title:"Demo on two Ubuntu instances",permalink:"/docs/developers/demo"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"IntelliJ IDEA Configuration",id:"intellij-idea-configuration",level:2},{value:"Microsoft Visual Code Configuration",id:"microsoft-visual-code-configuration",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-start-and-debug-pyrsia-node-using-ide"},"How to start and debug Pyrsia Node using IDE"),(0,o.kt)("p",null,"This tutorial describes how to start and debug Pyrsia using Microsoft Visual Code and IntelliJ IDEA."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before continuing please make sure that you have cloned and compiled the Pyrsia sources. For more information please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/community/get_involved/local_dev_setup"},"Developer Environment Setup"),". In this tutorial ",(0,o.kt)("inlineCode",{parentName:"p"},"PYRSIA_HOME")," refers to the Pyrsia repository folder."),(0,o.kt)("h2",{id:"intellij-idea-configuration"},"IntelliJ IDEA Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the IDE and install ",(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rust/"},"Rust plugin"),". If you use IDEA Ultimate make sure ",(0,o.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/12775-native-debugging-support"},"Native Debugging Support plugin")," is installed."),(0,o.kt)("li",{parentName:"ul"},"From the main menu select ",(0,o.kt)("inlineCode",{parentName:"li"},"File > Open"),". Alternatively select ",(0,o.kt)("inlineCode",{parentName:"li"},"Open")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Welcome to IntelliJ IDEA")," wizard and select the ",(0,o.kt)("inlineCode",{parentName:"li"},"PYRSIA_HOME")," folder."),(0,o.kt)("li",{parentName:"ul"},"When prompted to ",(0,o.kt)("inlineCode",{parentName:"li"},"Trust and Open Project 'pyrsia'?")," select ",(0,o.kt)("inlineCode",{parentName:"li"},"Trust Project"),"."),(0,o.kt)("li",{parentName:"ul"},"From the project configuration combo box select ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit Configuration"),"; then in the Configuration window, select ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Add New Run Configuration"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Cargo")," from the list of supported configurations."),(0,o.kt)("li",{parentName:"ul"},"Rename the configuration to ",(0,o.kt)("inlineCode",{parentName:"li"},"Run Node"),"."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Command")," field past the following:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"run --package pyrsia_node -- --pipeline-service-endpoint http://localhost:8080 --port 7888 --listen /ip4/0.0.0.0/tcp/44002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the following vars to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Environment Variables"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DEV_MODE=on;\nPYRSIA_ARTIFACT_PATH=/tmp/pyrsia/node;\nRUST_LOG=pyrsia=debug,info;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Point ",(0,o.kt)("inlineCode",{parentName:"li"},"Working Directory")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PYRSIA_HOME")," folder."),(0,o.kt)("li",{parentName:"ul"},"Confirm and save the configuration by pressing the ",(0,o.kt)("inlineCode",{parentName:"li"},"OK")," button. In the event of ",(0,o.kt)("inlineCode",{parentName:"li"},"Error: No Rust toolchain specified")," go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings/Preferences"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"Languages & Frameworks > Rust"),", then select ",(0,o.kt)("inlineCode",{parentName:"li"},"Downloads via Rustup"),"."),(0,o.kt)("li",{parentName:"ul"},"Start the Pyrsia node by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Run Node")," from the configurations list and pressing the ",(0,o.kt)("inlineCode",{parentName:"li"},"Run")," button next to it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IDEA Ultimate only"),". Start the debugging by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Run Node")," from the configurations list and pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"Debug")," button. The debugging related features (e.g. breakpoints) are only available when ",(0,o.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/12775-native-debugging-support"},"Native Debugging Support plugin")," is installed.")),(0,o.kt)("h2",{id:"microsoft-visual-code-configuration"},"Microsoft Visual Code Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the IDE and install ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer"},"rust-analyzer extension"),", ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb"},"CodeLLDB extension")," or ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},"C/C++ extension")),(0,o.kt)("li",{parentName:"ul"},"From the main menu select ",(0,o.kt)("inlineCode",{parentName:"li"},"File > Open Folder"),"."),(0,o.kt)("li",{parentName:"ul"},"When asked ",(0,o.kt)("inlineCode",{parentName:"li"},"Do you trust the authors of the files in this folder?")," select ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes, I trust the authors..."),"."),(0,o.kt)("li",{parentName:"ul"},"From the main menu select ",(0,o.kt)("inlineCode",{parentName:"li"},"Run > Add Configuration.."),", then from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Select Debugger")," combo box select ",(0,o.kt)("inlineCode",{parentName:"li"},"LLDB"),"."),(0,o.kt)("li",{parentName:"ul"},"When asked, ",(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml was detected in this workspace..."),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"No"),"."),(0,o.kt)("li",{parentName:"ul"},"In the newly created ",(0,o.kt)("inlineCode",{parentName:"li"},"launch.json")," file, replace the generated configuration with the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "lldb",\n            "request": "launch",\n            "name": "Debug executable \'pyrsia_node\'",\n            "program": "${workspaceRoot}/target/debug/pyrsia_node",\n            "args": [\n                "-H", "0.0.0.0",\n                "-p", "7888",\n                "-L", "/ip4/0.0.0.0/tcp/44002"\n            ],\n            "env": {\n                "DEV_MODE": "on",\n                "RUST_LOG": "pyrsia=debug,info"\n            },\n            "cwd": "${workspaceRoot}"\n        }\n    ]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Save the changes and start/debug the Pyrsia node by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Run > Start Debugging")," from the main menu.")))}c.isMDXComponent=!0}}]);