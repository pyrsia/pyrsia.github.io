"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[4411],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12993:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/build_from_source.md"},c="How to setup a Pyrsia node to build from source",l={unversionedId:"tutorials/build_from_source",id:"tutorials/build_from_source",title:"How to setup a Pyrsia node to build from source",description:"Warning: The build-from-source demo is still work-in-progress.",source:"@site/docs/tutorials/build_from_source.md",sourceDirName:"tutorials",slug:"/tutorials/build_from_source",permalink:"/docs/tutorials/build_from_source",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/build_from_source.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/build_from_source.md"},sidebar:"tutorialSidebar",previous:{title:"Quick Installation",permalink:"/docs/tutorials/quick-installation"},next:{title:"Demo on two Ubuntu instances",permalink:"/docs/tutorials/demo"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile Pyrsia",id:"compile-pyrsia",level:2},{value:"Run the Pyrsia node",id:"run-the-pyrsia-node",level:2},{value:"Create a mapping between the artifact and its source repository",id:"create-a-mapping-between-the-artifact-and-its-source-repository",level:2},{value:"Run build pipeline prototype",id:"run-build-pipeline-prototype",level:2},{value:"Trigger a build from source for a given artifact",id:"trigger-a-build-from-source-for-a-given-artifact",level:2},{value:"Wait for the build to finish in the build pipeline",id:"wait-for-the-build-to-finish-in-the-build-pipeline",level:2},{value:"Try to reach consensus with the other authorized nodes",id:"try-to-reach-consensus-with-the-other-authorized-nodes",level:2},{value:"Create a transparency log about the artifact publication",id:"create-a-transparency-log-about-the-artifact-publication",level:2},{value:"Publish the artifact on the p2p network",id:"publish-the-artifact-on-the-p2p-network",level:2},{value:"Use Pyrsia in a Maven project",id:"use-pyrsia-in-a-maven-project",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-setup-a-pyrsia-node-to-build-from-source"},"How to setup a Pyrsia node to build from source"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," The build-from-source demo is still work-in-progress.")),(0,r.kt)("p",null,"This tutorial describes how to setup a Pyrsia node that can build artifacts from\nsource with the goal to publish them in the Pyrsia network."),(0,r.kt)("p",null,"Ultimately, the following scenario will be used, but for now some steps\n(indicated below) are skipped for the purpose of this build-from-source demo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup at least 3 authorized nodes (Skipped in this demo, only one Pyrsia node\nis used)"),(0,r.kt)("li",{parentName:"ul"},"Make sure a mapping between an artifact and its source exists in the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia-mappings"},"Pyrsia Mappings Repo")," (for Maven artifacts\nonly)"),(0,r.kt)("li",{parentName:"ul"},"Set up a build pipeline per Pyrsia node and configure the nodes to use them"),(0,r.kt)("li",{parentName:"ul"},"Trigger a build from source for a given artifact"),(0,r.kt)("li",{parentName:"ul"},"Wait for the build to finish in the build pipeline"),(0,r.kt)("li",{parentName:"ul"},"Try to reach consensus with the other authorized nodes, which have to run the\nsame build and verify they produce the same build result. (Skipped in this demo)"),(0,r.kt)("li",{parentName:"ul"},"Create a transparency log about the artifact publication"),(0,r.kt)("li",{parentName:"ul"},"Publish the artifact on the p2p network")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/pyrsia-architecture-and-use-cases"},"architecture and use-cases"),"\ndocument for more information."),(0,r.kt)("p",null,"Because this demo scenario results in a published Maven artifact in the Pyrsia\nnetwork, we can run a final step to show the build from source worked:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Pyrsia in a Maven project")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The following steps rely on JDK11 and maven being correctly installed.\nPlease find and install the appropriate ",(0,r.kt)("a",{parentName:"p",href:"https://www.openlogic.com/openjdk-downloads"},"JDK11")," and ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/install.html"},"mvn")," before proceeding."),(0,r.kt)("h2",{id:"compile-pyrsia"},"Compile Pyrsia"),(0,r.kt)("p",null,"Download a fresh copy of the codebase by cloning the repo or updating to the\nHEAD of ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/pyrsia/pyrsia.git\n")),(0,r.kt)("p",null,"Let's call this folder ",(0,r.kt)("inlineCode",{parentName:"p"},"PYRSIA_HOME"),". We will refer to this\nname in the following steps."),(0,r.kt)("p",null,"Build binaries by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ncargo build --workspace\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/get_involved/local_dev_setup"},"Getting Started"),"\ndocument for more information."),(0,r.kt)("h2",{id:"run-the-pyrsia-node"},"Run the Pyrsia node"),(0,r.kt)("p",null,"Now we will set the following env vars and start a pyrsia node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RUST_LOG: to make sure we can see all the debug logs"),(0,r.kt)("li",{parentName:"ul"},"DEV_MODE: to make sure all non-existing directories are created on-the-fly"),(0,r.kt)("li",{parentName:"ul"},"PYRSIA_ARTIFACT_PATH: pointing to a directory to store artifacts. optionally\nremove this directory prior to starting Pyrsia if you want to start from an\nempty state.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"RUST_LOG=pyrsia=debug DEV_MODE=on PYRSIA_ARTIFACT_PATH=/tmp/pyrsia \\\ncargo run --package pyrsia_node -- --pipeline-service-endpoint http://localhost:8080\n")),(0,r.kt)("p",null,"As you can see, we specified the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pipeline-service-endpoint")," argument to point\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),", which is where we will run our build pipeline prototype\n(see below). In a production setup, the build pipeline needs to run on its\nown isolated infrastructure."),(0,r.kt)("h2",{id:"create-a-mapping-between-the-artifact-and-its-source-repository"},"Create a mapping between the artifact and its source repository"),(0,r.kt)("p",null,"In this demo, we will build a Maven artifact from source. Since there's no direct\nconnection between the Maven artifact defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId:artifactId:version")," and\nits source repository, Pyrsia keeps a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia-mappings"},"public mapping repository"),". For every known\nartifact, this repository has a mapping file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "package_type": "Maven2",\n  "package_specific_id": "groupId:artifactId:version",\n  "source_repository": {\n    "Git": {\n      "url": "https://github.com/organization/artifact",\n      "tag": "rel/artifact-version-tag"\n    }\n  },\n  "build_spec_url": ""\n}\n')),(0,r.kt)("p",null,"In case you want to build a different artifact from source than already available\nin the mapping, feel free to create a pull request to add it to the mapping repository."),(0,r.kt)("p",null,"In this demo we will build ",(0,r.kt)("inlineCode",{parentName:"p"},"commons-codec:commons-codec:1.15")," for which the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia-mappings/blob/main/Maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.mapping"},"mapping"),"\nis already available."),(0,r.kt)("h2",{id:"run-build-pipeline-prototype"},"Run build pipeline prototype"),(0,r.kt)("p",null,"In this demo, we use a build pipeline prototype. Eventually, Pyrsia will use\nindustry-standard build pipeline solutions. Integration with such solutions is\ncurrently being investigated."),(0,r.kt)("p",null,"The most important features of the build pipeline are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it runs completely separate from the Pyrsia node"),(0,r.kt)("li",{parentName:"ul"},"it exposes an interface so Pyrsia can start a build"),(0,r.kt)("li",{parentName:"ul"},"it exposes an interface so Pyrsia can download the build output")),(0,r.kt)("p",null,"The current build pipeline prototype only supports Maven builds. It takes\nthe artifact mapping as input (see above), starts a Maven build and provides the\nbuild output as a download."),(0,r.kt)("p",null,"Download or clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tiainen/pyrsia_build_pipeline_prototype"},"prototype repo"),"\nand run as follows:"),(0,r.kt)("p",null,"Ensure that JAVA_HOME is setup correctly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home\n")),(0,r.kt)("p",null,"and maven is available on the PATH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=path to your maven download location/apache-maven-3.8.6/bin:$PATH\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd pyrsia_build_pipeline_prototype\nRUST_LOG=debug cargo run\n")),(0,r.kt)("p",null,"By default, this prototype listens on http port 8080. If you run it on a different\nhost or port, make sure to specify its location when starting the Pyrsia node\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"--pipeline-service-endpoint")," (see above)."),(0,r.kt)("p",null,"Because we will be using this prototype for building Maven artifacts, make sure\nyou have installed a JDK11 and configured JAVA_HOME before running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run"),"."),(0,r.kt)("p",null,"You will see the following output indicating that the build pipeline is ready for use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"   Finished dev [unoptimized + debuginfo] target(s) in 1m 07s\n     Running `target/debug/pyrsia_build`\n INFO  actix_server::builder > Starting 8 workers\n INFO  actix_server::server  > Tokio runtime found; starting in existing Tokio runtime\n")),(0,r.kt)("h2",{id:"trigger-a-build-from-source-for-a-given-artifact"},"Trigger a build from source for a given artifact"),(0,r.kt)("p",null,"In this demo we trigger a build for ",(0,r.kt)("inlineCode",{parentName:"p"},"commons-codec:commons-codec:1.15"),".\nThe mapping repository already contains the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia-mappings/blob/main/Maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.mapping"},"source repository mapping"),"."),(0,r.kt)("p",null,"We will use the Pyrsia CLI to trigger a build from source. In a new terminal, while\nthe Pyrsia node and build pipeline prototype are running, check if your Pyrsia CLI\nconfig is correct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME/target/debug\n./pyrsia config --show\nhost = 'localhost'\nport = '7888'\ndisk_allocated = '5.84 GB'\n")),(0,r.kt)("p",null,"If you're not using the default port for your Pyrsia node, make sure to configure\nthe CLI using ",(0,r.kt)("inlineCode",{parentName:"p"},"./pyrsia config --add"),"."),(0,r.kt)("p",null,"Then trigger the build from source, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./pyrsia build maven --gav commons-codec:commons-codec:1.15\n")),(0,r.kt)("p",null,"The build trigger should return immediately providing a build ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Build request successfully handled. Build with ID 23c994a6-65b7-4041-beca-397d8f491f64 has been started.\n")),(0,r.kt)("h2",{id:"wait-for-the-build-to-finish-in-the-build-pipeline"},"Wait for the build to finish in the build pipeline"),(0,r.kt)("p",null,"In the Pyrsia node logs, you will see that a build has been started and the Pyrsia\nnode is now waiting for its result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Executing build info request...!\nCurrent Build Info: BuildInfo { id: "23c994a6-65b7-4041-beca-397d8f491f64", status: Running }\n')),(0,r.kt)("p",null,"In the build pipeline prototype you should see that build starting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Requesting build of Maven2 for commons-codec:commons-codec:1.15\n...\n#######################################################\n#\n# Starting Maven2 build for:\n#   commons-codec:commons-codec:1.15\n#\n#######################################################\nCloning into 'repo'...\n...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  19.787 s\n[INFO] Finished at: 2022-07-15T15:59:42+02:00\n[INFO] ------------------------------------------------------------------------\n...\n")),(0,r.kt)("p",null,"Once the build has finished, the status request from the Pyrsia node will contain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Current Build Info: BuildInfo { id: "23c994a6-65b7-4041-beca-397d8f491f64",\n  status: Success { artifact_urls:\n     ["/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.pom.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-test-sources.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-tests.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-sources.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-tests.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-tests.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-test-sources.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-sources.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.pom.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-test-sources.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-sources.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.pom"]\n  } }\n')),(0,r.kt)("p",null,"And Pyrsia will download all build result files from the pipeline service."),(0,r.kt)("h2",{id:"try-to-reach-consensus-with-the-other-authorized-nodes"},"Try to reach consensus with the other authorized nodes"),(0,r.kt)("p",null,"In a regular scenario, the Pyrsia node will now try to reach consensus with the\nother authorized nodes, but this step is skipped in this demo."),(0,r.kt)("h2",{id:"create-a-transparency-log-about-the-artifact-publication"},"Create a transparency log about the artifact publication"),(0,r.kt)("p",null,"When consensus has been reached, a transparency log is created for each build artifact."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'INFO  pyrsia::artifact_service::service > Adding artifact to transparency log: AddArtifactRequest { package_type: Maven2, package_specific_id: "commons-codec:commons-codec:1.15", package_specific_artifact_id: "commons-codec/commons-codec/1.15/commons-codec-1.15.jar", artifact_hash: "7da8e6b90125463c26c950a97fd14143c2f39cd5d488748b265d83e8b124fa7c" }\nDEBUG pyrsia::transparency_log::log     > Transparency log inserted into database with id: 2f30167e-e40f-4831-9197-11fc0b5450e3\nINFO  pyrsia::artifact_service::service > Transparency Log for build with ID 0a6f2128-7410-4098-bd39-59dc05230464 successfully added. Adding artifact locally: TransparencyLog { id: "2f30167e-e40f-4831-9197-11fc0b5450e3", package_type: Maven2, package_specific_id: "commons-codec:commons-codec:1.15", package_specific_artifact_id: "commons-codec/commons-codec/1.15/commons-codec-1.15.jar", artifact_hash: "7da8e6b90125463c26c950a97fd14143c2f39cd5d488748b265d83e8b124fa7c", artifact_id: "6eb90399-24cd-4aef-a78f-ef95d64b53fa", source_id: "77ea0ea3-2eb7-4aac-9fdb-f43664ce62a4", timestamp: 1658132836, operation: AddArtifact, node_id: "5a04ba4d-9c8f-445a-bcb7-5c91a610d03c", node_public_key: "9c6ab508-1b86-47bb-87e9-6b99c18e4a73" }\n')),(0,r.kt)("p",null,"Example for ",(0,r.kt)("inlineCode",{parentName:"p"},"commons-codec-1.15.jar"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"c52d7954-d9d9-40e2-a795-31aed2fc8a61",\n  "package_type":"Maven2",\n  "package_specific_id":"commons-codec:commons-codec:1.15",\n  "package_specific_artifact_id":"commons-codec/commons-codec/1.15/commons-codec-1.15.jar",\n  "artifact_hash":"3a1cabaab612b463e30fe44ae8794595311bbb8981bdcbb887736d35fcfd4d6f",\n  "artifact_id":"e5b3ee84-4a83-491c-8cf6-3b9c60a0f87e",\n  "source_id":"65e204f6-ff8b-42e2-898d-56c3723d6dc0",\n  "timestamp":1657893583,\n  "operation":"AddArtifact"\n}\n')),(0,r.kt)("h2",{id:"publish-the-artifact-on-the-p2p-network"},"Publish the artifact on the p2p network"),(0,r.kt)("p",null,"As a final step in the build from source scenario, the artifacts are stored locally\nand provided on the p2p network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},' INFO  pyrsia::artifact_service::service > put_artifact with id: da341557-9150-4208-9474-f5884f799338\n INFO  pyrsia::artifact_service::storage > An artifact is being pushed to the artifact manager da341557-9150-4208-9474-f5884f799338\n DEBUG pyrsia::network::client           > p2p::Client::provide "da341557-9150-4208-9474-f5884f799338"\n')),(0,r.kt)("h2",{id:"use-pyrsia-in-a-maven-project"},"Use Pyrsia in a Maven project"),(0,r.kt)("p",null,"Now that we have a published Maven artifact in the Pyrsia network, we can try to\nuse it in a Maven project."),(0,r.kt)("p",null,"Create a Java project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir pyrsia-maven-sample\ncd pyrsia-maven-sample\nmkdir -p src/main/java/org/pyrsia/sample\n")),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/org/pyrsia/sample/Main.java"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package org.pyrsia.sample;\n\nimport java.util.Arrays;\nimport org.apache.commons.codec.binary.Hex;\n\npublic class Main {\n\n    public static void main(String[] args) {\n        byte[] data = { 1, 2, 3, 4, 5, 6, 7, 8 };\n        String hexEncodedData = Hex.encodeHexString(data);\n\n        System.out.println("Byte array " + Arrays.toString(data) + " encoded as a hex string: " + hexEncodedData);\n    }\n}\n')),(0,r.kt)("p",null,"The code in this sample uses ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.commons.codec.binary.Hex")," from the commons-codec\nlibrary, so let's add this as dependency in our Maven build:"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n              http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.pyrsia.sample</groupId>\n    <artifactId>maven</artifactId>\n    <packaging>jar</packaging>\n    <version>1.0.0-SNAPSHOT</version>\n    <name>Pyrsia Sample for Maven</name>\n\n    <repositories>\n        <repository>\n            <id>pyrsia</id>\n            <url>http://localhost:7888/maven2</url>\n        </repository>\n    </repositories>\n\n    <dependencies>\n        <dependency>\n            <groupId>commons-codec</groupId>\n            <artifactId>commons-codec</artifactId>\n            <version>1.15</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.10.1</version>\n                <configuration>\n                    <release>11</release>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,r.kt)("p",null,"As you can see, we have set the repository to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7888/maven2"),", which\nwill trigger the Maven build to request dependencies from this URL, which is our\nPyrsia node, acting as a Maven repository."),(0,r.kt)("p",null,"To make sure your local maven cache doesn't already contain this dependency, remove\nit first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.m2/repository/commons-codec/commons-codec/1.15\n")),(0,r.kt)("p",null,"And then run the maven build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mvn clean package\n")),(0,r.kt)("p",null,"It should show output like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[INFO] Scanning for projects...\n[INFO]\n[INFO] ----------------------< org.pyrsia.sample:maven >-----------------------\n[INFO] Building Pyrsia Sample for Maven 1.0.0-SNAPSHOT\n[INFO] --------------------------------[ jar ]---------------------------------\nDownloading from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.pom\nDownloaded from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.pom (15 kB at 343 kB/s)\nDownloading from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar\nDownloaded from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar (354 kB at 9.3 MB/s)\n...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  0.925 s\n[INFO] Finished at: 2022-07-15T16:33:39+02:00\n[INFO] ------------------------------------------------------------------------\n")),(0,r.kt)("p",null,"The dependency was downloaded from Pyrsia, which you can verify in the Pyrsia node\nlogs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},' DEBUG pyrsia::java::maven2::routes                    > route full path: /maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar\n DEBUG pyrsia::java::maven2::handlers::maven_artifacts > Requesting maven artifact: /maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar\n DEBUG pyrsia::java::maven2::handlers::maven_artifacts > Requesting artifact for id commons-codec/commons-codec/1.15/commons-codec-1.15.jar\n INFO  pyrsia::artifact_service::storage               > An artifact is being pulled from the artifact manager a90e6792-4f2e-4ccc-8479-d935431e28ec\n DEBUG pyrsia::artifact_service::storage               > Pulling artifact from /private/tmp/pyrsia/a90e6792-4f2e-4ccc-8479-d935431e28ec.file\n INFO  pyrsia_registry                                 > 127.0.0.1:55273 "GET /maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar HTTP/1.1" 200 "-" "Apache-Maven/3.8.5 (Java 1.8.0_332; Mac OS X 12.4)" 23.00275ms\n')))}m.isMDXComponent=!0}}]);