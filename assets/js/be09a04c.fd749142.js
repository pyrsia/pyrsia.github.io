"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[6161],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(67294);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=c,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||o;return n?t.createElement(f,i(i({ref:a},p),{},{components:n})):t.createElement(f,i({ref:a},p))}));function u(e,a){var n=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:c,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33010:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return l}});var t=n(87462),c=n(63366),o=(n(67294),n(3905)),i=["components"],r={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/build_from_source_maven.md"},s="How to setup a Pyrsia node to build Maven libraries from source",d={unversionedId:"tutorials/build_from_source_maven",id:"tutorials/build_from_source_maven",title:"How to setup a Pyrsia node to build Maven libraries from source",description:"Warning: The build-from-source demo is still work-in-progress.",source:"@site/docs/tutorials/build_from_source_maven.md",sourceDirName:"tutorials",slug:"/tutorials/build_from_source_maven",permalink:"/docs/tutorials/build_from_source_maven",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/build_from_source_maven.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/build_from_source_maven.md"},sidebar:"tutorialSidebar",previous:{title:"How to setup a Pyrsia node to build Docker images from source",permalink:"/docs/tutorials/build_from_source_docker"},next:{title:"Demo on two Ubuntu instances",permalink:"/docs/tutorials/demo"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile Pyrsia",id:"compile-pyrsia",level:2},{value:"Run the Pyrsia node",id:"run-the-pyrsia-node",level:2},{value:"Create a mapping between the artifact and its source repository",id:"create-a-mapping-between-the-artifact-and-its-source-repository",level:2},{value:"Run build pipeline prototype",id:"run-build-pipeline-prototype",level:2},{value:"Trigger a build from source for a given artifact",id:"trigger-a-build-from-source-for-a-given-artifact",level:2},{value:"Wait for the build to finish in the build pipeline",id:"wait-for-the-build-to-finish-in-the-build-pipeline",level:2},{value:"Try to reach consensus with the other authorized nodes",id:"try-to-reach-consensus-with-the-other-authorized-nodes",level:2},{value:"Create a transparency log about the artifact publication",id:"create-a-transparency-log-about-the-artifact-publication",level:2},{value:"Publish the artifact on the p2p network",id:"publish-the-artifact-on-the-p2p-network",level:2},{value:"Use Pyrsia in a Maven project",id:"use-pyrsia-in-a-maven-project",level:2},{value:"Inspect the transparency logs",id:"inspect-the-transparency-logs",level:2}],m={toc:l};function u(e){var a=e.components,n=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-setup-a-pyrsia-node-to-build-maven-libraries-from-source"},"How to setup a Pyrsia node to build Maven libraries from source"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning:")," The build-from-source demo is still work-in-progress.")),(0,o.kt)("p",null,"This tutorial describes how to setup a Pyrsia node that can build Maven artifacts\nfrom source with the goal to publish them in the Pyrsia network."),(0,o.kt)("p",null,"Ultimately, the following scenario will be used, but for now some steps\n(indicated below) are skipped for the purpose of this build-from-source demo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup at least 3 authorized nodes (Skipped in this demo, only one Pyrsia node\nis used)"),(0,o.kt)("li",{parentName:"ul"},"Make sure a mapping between an artifact and its source exists in the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia-mappings"},"Pyrsia Mappings Repo")," (for Maven artifacts\nonly)"),(0,o.kt)("li",{parentName:"ul"},"Set up a build pipeline per Pyrsia node and configure the nodes to use them"),(0,o.kt)("li",{parentName:"ul"},"Trigger a build from source for a given artifact"),(0,o.kt)("li",{parentName:"ul"},"Wait for the build to finish in the build pipeline"),(0,o.kt)("li",{parentName:"ul"},"Try to reach consensus with the other authorized nodes, which have to run the\nsame build and verify they produce the same build result. (Skipped in this demo)"),(0,o.kt)("li",{parentName:"ul"},"Create a transparency log about the artifact publication"),(0,o.kt)("li",{parentName:"ul"},"Publish the artifact on the p2p network")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/developers/pyrsia-architecture-and-use-cases"},"architecture and use-cases"),"\ndocument for more information."),(0,o.kt)("p",null,"Because this demo scenario results in a published Maven artifact in the Pyrsia\nnetwork, we can run a final step to show the build from source worked:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Pyrsia in a Maven project")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The following steps rely on JDK11 and maven being correctly installed.\nPlease find and install the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://www.openlogic.com/openjdk-downloads"},"JDK11")," and ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/install.html"},"mvn")," before proceeding."),(0,o.kt)("h2",{id:"compile-pyrsia"},"Compile Pyrsia"),(0,o.kt)("p",null,"Download a fresh copy of the codebase by cloning the repo or updating to the\nHEAD of ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/pyrsia/pyrsia.git\n")),(0,o.kt)("p",null,"Let's call this folder ",(0,o.kt)("inlineCode",{parentName:"p"},"PYRSIA_HOME"),". We will refer to this\nname in the following steps."),(0,o.kt)("p",null,"Build binaries by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ncargo build --workspace\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/community/get_involved/local_dev_setup"},"Development Environment"),"\ndocument for more information."),(0,o.kt)("h2",{id:"run-the-pyrsia-node"},"Run the Pyrsia node"),(0,o.kt)("p",null,"Now we will set the following env vars and start a pyrsia node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RUST_LOG: to make sure we can see all the debug logs"),(0,o.kt)("li",{parentName:"ul"},"DEV_MODE: to make sure all non-existing directories are created on-the-fly"),(0,o.kt)("li",{parentName:"ul"},"PYRSIA_ARTIFACT_PATH: pointing to a directory to store artifacts. optionally\nremove this directory prior to starting Pyrsia if you want to start from an\nempty state.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"RUST_LOG=pyrsia=debug DEV_MODE=on PYRSIA_ARTIFACT_PATH=/tmp/pyrsia \\\ncargo run --package pyrsia_node -- --pipeline-service-endpoint http://localhost:8080 --listen-only true\n")),(0,o.kt)("p",null,"As you can see, we specified the ",(0,o.kt)("inlineCode",{parentName:"p"},"--pipeline-service-endpoint")," argument to point\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),", which is where we will run our build pipeline prototype\n(see below). In a production setup, the build pipeline needs to run on its\nown isolated infrastructure."),(0,o.kt)("h2",{id:"create-a-mapping-between-the-artifact-and-its-source-repository"},"Create a mapping between the artifact and its source repository"),(0,o.kt)("p",null,"In this demo, we will build a Maven artifact from source. Since there's no direct\nconnection between the Maven artifact defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId:artifactId:version")," and\nits source repository, Pyrsia keeps a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia-mappings"},"public mapping repository"),". For every known\nartifact, this repository has a mapping file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "package_type": "Maven2",\n  "package_specific_id": "groupId:artifactId:version",\n  "source_repository": {\n    "Git": {\n      "url": "https://github.com/organization/artifact",\n      "tag": "rel/artifact-version-tag"\n    }\n  },\n  "build_spec_url": ""\n}\n')),(0,o.kt)("p",null,"In case you want to build an artifact from source for which a mapping is not yet\navailable, feel free to create a pull request to add it to the mapping repository."),(0,o.kt)("p",null,"In this demo we will build ",(0,o.kt)("inlineCode",{parentName:"p"},"commons-codec:commons-codec:1.15")," for which the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia-mappings/blob/main/Maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.mapping"},"mapping"),"\nis already available."),(0,o.kt)("h2",{id:"run-build-pipeline-prototype"},"Run build pipeline prototype"),(0,o.kt)("p",null,"In this demo, we use a build pipeline prototype. Eventually, Pyrsia will use\nindustry-standard build pipeline solutions. Integration with such solutions is\ncurrently being investigated."),(0,o.kt)("p",null,"The most important features of the build pipeline are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"it runs completely separate from the Pyrsia node"),(0,o.kt)("li",{parentName:"ul"},"it exposes an interface so Pyrsia can start a build"),(0,o.kt)("li",{parentName:"ul"},"it exposes an interface so Pyrsia can download the build output")),(0,o.kt)("p",null,"The current build pipeline prototype only supports Maven builds. It takes\nthe artifact mapping as input (see above), starts a Maven build and provides the\nbuild output as a download."),(0,o.kt)("p",null,"Ensure that JAVA_HOME is setup correctly"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home\n")),(0,o.kt)("p",null,"and maven is available on the PATH"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=path to your maven download location/apache-maven-3.8.6/bin:$PATH\n")),(0,o.kt)("p",null,"Download or clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tiainen/pyrsia_build_pipeline_prototype"},"prototype repo"),"\nand run as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd pyrsia_build_pipeline_prototype\nRUST_LOG=debug cargo run\n")),(0,o.kt)("p",null,"By default, this prototype listens on http port 8080. If you run it on a different\nhost or port, make sure to specify its location when starting the Pyrsia node\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"--pipeline-service-endpoint")," (see above)."),(0,o.kt)("p",null,"Because we will be using this prototype for building Maven artifacts, make sure\nyou have installed a JDK11 and configured JAVA_HOME before running ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo run"),"."),(0,o.kt)("p",null,"You will see the following output indicating that the build pipeline is ready for use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"   Finished dev [unoptimized + debuginfo] target(s) in 1m 07s\n     Running `target/debug/pyrsia_build`\n INFO  actix_server::builder > Starting 8 workers\n INFO  actix_server::server  > Tokio runtime found; starting in existing Tokio runtime\n")),(0,o.kt)("h2",{id:"trigger-a-build-from-source-for-a-given-artifact"},"Trigger a build from source for a given artifact"),(0,o.kt)("p",null,"In this demo we trigger a build for ",(0,o.kt)("inlineCode",{parentName:"p"},"commons-codec:commons-codec:1.15"),".\nThe mapping repository already contains the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia-mappings/blob/main/Maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.mapping"},"source repository mapping"),"."),(0,o.kt)("p",null,"We will use the Pyrsia CLI to trigger a build from source. In a new terminal, while\nthe Pyrsia node and build pipeline prototype are running, check if your Pyrsia CLI\nconfig is correct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME/target/debug\n./pyrsia config --show\nhost = 'localhost'\nport = '7888'\ndisk_allocated = '5.84 GB'\n")),(0,o.kt)("p",null,"If you're not using the default port for your Pyrsia node, make sure to configure\nthe CLI using ",(0,o.kt)("inlineCode",{parentName:"p"},"./pyrsia config --add"),"."),(0,o.kt)("p",null,"Then trigger the build from source, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./pyrsia build maven --gav commons-codec:commons-codec:1.15\n")),(0,o.kt)("p",null,"The build trigger should return immediately providing a build ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Build request successfully handled. Build with ID 23c994a6-65b7-4041-beca-397d8f491f64 has been started.\n")),(0,o.kt)("h2",{id:"wait-for-the-build-to-finish-in-the-build-pipeline"},"Wait for the build to finish in the build pipeline"),(0,o.kt)("p",null,"In the Pyrsia node logs, you will see that a build has been started and the Pyrsia\nnode is now waiting for its result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Executing build info request...!\nCurrent Build Info: BuildInfo { id: "23c994a6-65b7-4041-beca-397d8f491f64", status: Running }\n')),(0,o.kt)("p",null,"In the build pipeline prototype you should see that build starting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Requesting build of Maven2 for commons-codec:commons-codec:1.15\n...\n#######################################################\n#\n# Starting Maven2 build for:\n#   commons-codec:commons-codec:1.15\n#\n#######################################################\nCloning into 'repo'...\n...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  19.787 s\n[INFO] Finished at: 2022-07-15T15:59:42+02:00\n[INFO] ------------------------------------------------------------------------\n...\n")),(0,o.kt)("p",null,"Once the build has finished, the status request from the Pyrsia node will contain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Current Build Info: BuildInfo { id: "23c994a6-65b7-4041-beca-397d8f491f64",\n  status: Success { artifact_urls:\n     ["/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.pom.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-test-sources.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-tests.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-sources.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-tests.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-tests.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-test-sources.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-sources.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.jar.sha1",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.pom.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-test-sources.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15-sources.jar",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.jar.md5",\n      "/build/23c994a6-65b7-4041-beca-397d8f491f64/artifacts/commons-codec-1.15.pom"]\n  } }\n')),(0,o.kt)("p",null,"And Pyrsia will download all build result files from the pipeline service."),(0,o.kt)("h2",{id:"try-to-reach-consensus-with-the-other-authorized-nodes"},"Try to reach consensus with the other authorized nodes"),(0,o.kt)("p",null,"In a regular scenario, the Pyrsia node will now try to reach consensus with the\nother authorized nodes, but this step is skipped in this demo."),(0,o.kt)("h2",{id:"create-a-transparency-log-about-the-artifact-publication"},"Create a transparency log about the artifact publication"),(0,o.kt)("p",null,"When consensus has been reached, a transparency log is created for each built artifact."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'INFO  pyrsia::artifact_service::service > Adding artifact to transparency log: AddArtifactRequest { package_type: Maven2, package_specific_id: "commons-codec:commons-codec:1.15", package_specific_artifact_id: "commons-codec/commons-codec/1.15/commons-codec-1.15.jar", artifact_hash: "7da8e6b90125463c26c950a97fd14143c2f39cd5d488748b265d83e8b124fa7c" }\nDEBUG pyrsia::transparency_log::log     > Transparency log inserted into database with id: 2f30167e-e40f-4831-9197-11fc0b5450e3\nINFO  pyrsia::artifact_service::service > Transparency Log for build with ID 0a6f2128-7410-4098-bd39-59dc05230464 successfully added. Adding artifact locally: TransparencyLog { id: "2f30167e-e40f-4831-9197-11fc0b5450e3", package_type: Maven2, package_specific_id: "commons-codec:commons-codec:1.15", package_specific_artifact_id: "commons-codec/commons-codec/1.15/commons-codec-1.15.jar", artifact_hash: "7da8e6b90125463c26c950a97fd14143c2f39cd5d488748b265d83e8b124fa7c", artifact_id: "6eb90399-24cd-4aef-a78f-ef95d64b53fa", source_id: "77ea0ea3-2eb7-4aac-9fdb-f43664ce62a4", timestamp: 1658132836, operation: AddArtifact, node_id: "5a04ba4d-9c8f-445a-bcb7-5c91a610d03c", node_public_key: "9c6ab508-1b86-47bb-87e9-6b99c18e4a73" }\n')),(0,o.kt)("p",null,"Example for ",(0,o.kt)("inlineCode",{parentName:"p"},"commons-codec-1.15.jar"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"c52d7954-d9d9-40e2-a795-31aed2fc8a61",\n  "package_type":"Maven2",\n  "package_specific_id":"commons-codec:commons-codec:1.15",\n  "package_specific_artifact_id":"commons-codec/commons-codec/1.15/commons-codec-1.15.jar",\n  "artifact_hash":"3a1cabaab612b463e30fe44ae8794595311bbb8981bdcbb887736d35fcfd4d6f",\n  "artifact_id":"e5b3ee84-4a83-491c-8cf6-3b9c60a0f87e",\n  "source_id":"65e204f6-ff8b-42e2-898d-56c3723d6dc0",\n  "timestamp":1657893583,\n  "operation":"AddArtifact"\n}\n')),(0,o.kt)("h2",{id:"publish-the-artifact-on-the-p2p-network"},"Publish the artifact on the p2p network"),(0,o.kt)("p",null,"As a final step in the build from source scenario, the artifacts are stored locally\nand provided on the p2p network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},' INFO  pyrsia::artifact_service::service > put_artifact with id: da341557-9150-4208-9474-f5884f799338\n INFO  pyrsia::artifact_service::storage > An artifact is being pushed to the artifact manager da341557-9150-4208-9474-f5884f799338\n DEBUG pyrsia::network::client           > p2p::Client::provide "da341557-9150-4208-9474-f5884f799338"\n')),(0,o.kt)("p",null,"Now we are ready to use the published artifacts in our build workflow as shown in\nthe sample section below."),(0,o.kt)("h2",{id:"use-pyrsia-in-a-maven-project"},"Use Pyrsia in a Maven project"),(0,o.kt)("p",null,"Now that we have a published Maven artifact in the Pyrsia network, we can try to\nuse it in a Maven project."),(0,o.kt)("p",null,"Create a Java project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir pyrsia-maven-sample\ncd pyrsia-maven-sample\nmkdir -p src/main/java/org/pyrsia/sample\n")),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/org/pyrsia/sample/Main.java"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package org.pyrsia.sample;\n\nimport java.util.Arrays;\nimport org.apache.commons.codec.binary.Hex;\n\npublic class Main {\n\n    public static void main(String[] args) {\n        byte[] data = { 1, 2, 3, 4, 5, 6, 7, 8 };\n        String hexEncodedData = Hex.encodeHexString(data);\n\n        System.out.println("Byte array " + Arrays.toString(data) + " encoded as a hex string: " + hexEncodedData);\n    }\n}\n')),(0,o.kt)("p",null,"The code in this sample uses ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.commons.codec.binary.Hex")," from the commons-codec\nlibrary, so let's add this as dependency in our Maven build:"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n              http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.pyrsia.sample</groupId>\n    <artifactId>maven</artifactId>\n    <packaging>jar</packaging>\n    <version>1.0.0-SNAPSHOT</version>\n    <name>Pyrsia Sample for Maven</name>\n\n    <repositories>\n        <repository>\n            <id>pyrsia</id>\n            <url>http://localhost:7888/maven2</url>\n        </repository>\n    </repositories>\n\n    <dependencies>\n        <dependency>\n            <groupId>commons-codec</groupId>\n            <artifactId>commons-codec</artifactId>\n            <version>1.15</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.10.1</version>\n                <configuration>\n                    <release>11</release>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,o.kt)("p",null,"As you can see, we have set the repository to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:7888/maven2"),", which\nwill trigger the Maven build to request dependencies from this URL, which is our\nPyrsia node, acting as a Maven repository."),(0,o.kt)("p",null,"To make sure your local maven cache doesn't already contain this dependency, remove\nit first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.m2/repository/commons-codec/commons-codec/1.15\n")),(0,o.kt)("p",null,"And then run the maven build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mvn clean package\n")),(0,o.kt)("p",null,"It should show output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[INFO] Scanning for projects...\n[INFO]\n[INFO] ----------------------< org.pyrsia.sample:maven >-----------------------\n[INFO] Building Pyrsia Sample for Maven 1.0.0-SNAPSHOT\n[INFO] --------------------------------[ jar ]---------------------------------\nDownloading from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.pom\nDownloaded from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.pom (15 kB at 343 kB/s)\nDownloading from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar\nDownloaded from pyrsia: http://localhost:7888/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar (354 kB at 9.3 MB/s)\n...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  0.925 s\n[INFO] Finished at: 2022-07-15T16:33:39+02:00\n[INFO] ------------------------------------------------------------------------\n")),(0,o.kt)("p",null,"The dependency was downloaded from Pyrsia, which you can verify in the Pyrsia node\nlogs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},' DEBUG pyrsia::java::maven2::routes                    > route full path: /maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar\n DEBUG pyrsia::java::maven2::handlers::maven_artifacts > Requesting maven artifact: /maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar\n DEBUG pyrsia::java::maven2::handlers::maven_artifacts > Requesting artifact for id commons-codec/commons-codec/1.15/commons-codec-1.15.jar\n INFO  pyrsia::artifact_service::storage               > An artifact is being pulled from the artifact manager a90e6792-4f2e-4ccc-8479-d935431e28ec\n DEBUG pyrsia::artifact_service::storage               > Pulling artifact from /private/tmp/pyrsia/a90e6792-4f2e-4ccc-8479-d935431e28ec.file\n INFO  pyrsia_registry                                 > 127.0.0.1:55273 "GET /maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar HTTP/1.1" 200 "-" "Apache-Maven/3.8.5 (Java 1.8.0_332; Mac OS X 12.4)" 23.00275ms\n')),(0,o.kt)("h2",{id:"inspect-the-transparency-logs"},"Inspect the transparency logs"),(0,o.kt)("p",null,"The transparency logs that were created as part of the build from source process,\ncan be inspected using the Pyrsia CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/pyrsia inspect-log maven --gav commons-codec:commons-codec:1.15\n")),(0,o.kt)("p",null,"This results in the transparency logs for all the Pyrsia artifacts that make up\nthe Maven library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'[\n  {\n    "id": "d1e2ee25-5b8e-41a2-b36b-caa735969b94",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15.pom.sha1",\n    "artifact_hash": "5dc11ea7cfa14ac8e84250b21166b098f1ce57ba3316ba5cae589269b37ce54a",\n    "source_hash": "",\n    "artifact_id": "7ce014b5-9e0e-4d57-8783-a53e0f6ca5b7",\n    "source_id": "07d57167-6d4e-4dd6-9d94-9604ea4d3981",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "daee9753-19eb-4494-bb23-3bf3122b24bf",\n    "node_public_key": "ac611d95-01dd-43ff-96a1-257150531559"\n  },\n  {\n    "id": "cda4e2fb-84ca-4598-a41e-b95b5d0dc78b",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-test-sources.jar",\n    "artifact_hash": "997a5e8ed8c37e0c3dcdf20e76db11279c055a20c3875731390c7b8008912c4f",\n    "source_hash": "",\n    "artifact_id": "980bce73-6abd-4a27-905d-7158e078fbc6",\n    "source_id": "599d833b-c9e4-4020-8cd6-2ad5c63b5e8c",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "ed2c2530-d57e-48e4-9dbe-544fe8afe54c",\n    "node_public_key": "600ef060-8625-4591-a6c7-424dfe523b6c"\n  },\n  {\n    "id": "41d861a0-b239-414f-94af-09afd4e91914",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-tests.jar",\n    "artifact_hash": "dbf6348c24ff9031fed4d03f69562d6f72f22fd8df60c446addcd6be292479c2",\n    "source_hash": "",\n    "artifact_id": "5be26d34-6700-4c70-862e-b6c2152070a6",\n    "source_id": "6f15dec9-6e59-48c6-837d-381f5245deea",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "f157a26a-850c-440e-919e-f6f86964a79c",\n    "node_public_key": "1547d1f7-8bc0-49e7-a0fd-87a23ce20b77"\n  },\n  {\n    "id": "1d43164c-eff9-41fd-9b9b-0e9c31bc7df3",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-sources.jar.sha1",\n    "artifact_hash": "944a6c7643cc0ef821d38afdb576c3a3ea2d2308c053eb8e0bcbbc624766e345",\n    "source_hash": "",\n    "artifact_id": "937e2ef2-c124-4bfc-8229-0d573cb75cd5",\n    "source_id": "b01def26-5fe1-4510-825f-a8fa6993e144",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "2520612b-d0b2-45f3-8dd3-c259283527b0",\n    "node_public_key": "c60c2352-9ab5-4d1c-ac34-0e2d755e6caf"\n  },\n  {\n    "id": "3ce2490f-0264-44a7-824b-9bdf9379be59",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-tests.jar.md5",\n    "artifact_hash": "6875ce35f7aa1dffbbd390393c30056b06139a5d822a66ee2fe431366c542a7d",\n    "source_hash": "",\n    "artifact_id": "22de3073-5afb-49ed-a7cc-ec0c4fa1e86f",\n    "source_id": "da789ef4-c9c3-4799-9b8b-7a05d3412fcd",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "1aed4d9e-4cae-4b5b-a4c6-01c6c4796ab7",\n    "node_public_key": "1338c2c8-6d25-46ed-b7b1-a8a61244d9ad"\n  },\n  {\n    "id": "a7718180-1a5c-4894-8e90-4f16f4f6feb7",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-tests.jar.sha1",\n    "artifact_hash": "00540debf6f0091544b5daacea87fe4d6475f4abea566f19d1e7c0d062ca1016",\n    "source_hash": "",\n    "artifact_id": "9df96d6d-c5dd-40f8-bd5d-56531a47a737",\n    "source_id": "1cde52f6-48ba-4b25-bb81-0620bf59630c",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "18409184-cb89-46d3-8119-5642fd4d0aea",\n    "node_public_key": "f06359c3-42de-4bb3-a7fa-59ed50099ee9"\n  },\n  {\n    "id": "c20167f6-2d96-4214-b6a8-7942c034167b",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-test-sources.jar.sha1",\n    "artifact_hash": "a9be7ceaf4962f4c897239972a1dac711ca7570c2cf47a8b09b7b343950caf41",\n    "source_hash": "",\n    "artifact_id": "b632f752-707c-4a10-b113-02de9ea495ac",\n    "source_id": "ce9b2f47-a579-44a6-8bd8-d80850085e84",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "a3690d7d-f450-41ab-b959-2d8de3bd74d8",\n    "node_public_key": "05f364f4-9081-4fda-b37b-1043d435afbc"\n  },\n  {\n    "id": "e447df77-f809-43dc-b40a-4fce58c3f6a4",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-sources.jar.md5",\n    "artifact_hash": "53290bdbc449ae0e0230ab9f4d1d49043a3b67d0c40f49f1b6323188da2f0200",\n    "source_hash": "",\n    "artifact_id": "0af768c4-ea2d-4556-b9b4-b2ac81ab732c",\n    "source_id": "b1104a19-357a-4ca8-aba5-c6d3a3944886",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "424a20ae-d1a2-45d1-977e-87463108d616",\n    "node_public_key": "5312da51-99d5-496e-9bd5-b955bece15f8"\n  },\n  {\n    "id": "0ff4df3e-c908-479f-850b-9bdcea2cc367",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15.jar.sha1",\n    "artifact_hash": "49258e0f1920c7303d0e31b31cf9d6157ca2beb1166c0c0576c0f0a5ab0c03d1",\n    "source_hash": "",\n    "artifact_id": "0ffa5544-2fe3-415b-9bd6-73bc98bc39b5",\n    "source_id": "241c8aa1-acee-40be-be70-ba38d17d3d00",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "3e4b17f3-5b4a-4def-8598-8bd67c827092",\n    "node_public_key": "f03deb88-c45f-4382-8662-96603a6caec6"\n  },\n  {\n    "id": "2fee254e-db03-4e74-99ca-2d83d3302ec9",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15.pom.md5",\n    "artifact_hash": "ff89aba3ea6e2655feba41fdff2d8388b09f421ca6ca0ff5c49dbc24e53ae86a",\n    "source_hash": "",\n    "artifact_id": "1b674cc8-4bb1-47d7-adfb-9fe167afe270",\n    "source_id": "2bddcb16-8c2e-46a1-b3c9-afd04bb2bb13",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "5b9555ea-1ba8-4813-ab37-4f525c7a3640",\n    "node_public_key": "800d458b-f12b-4936-ad1a-1bfec7ca16e6"\n  },\n  {\n    "id": "e7f10718-040c-4850-badf-e0a07afda381",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-test-sources.jar.md5",\n    "artifact_hash": "e74339769bffce344ee5a4645a64466ad4ffe2002cf774285e3f20fdb110b503",\n    "source_hash": "",\n    "artifact_id": "dfe7e07d-bd42-4b26-b8df-2449d76a25a5",\n    "source_id": "de40f6ef-32ed-4016-adaf-7cba2036ade9",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "21b15080-a6cf-4e3b-bcbd-d80a7509d8d2",\n    "node_public_key": "15d97cc8-50ca-4651-bda0-f0133065d816"\n  },\n  {\n    "id": "26756f3f-c719-422d-b3f6-b1d88f8b6f97",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15.jar",\n    "artifact_hash": "45307d7466bcb1f0cd52dd5df3c313f2c189586695b5d199d1a0a549f92bc50d",\n    "source_hash": "",\n    "artifact_id": "0c41a4bc-09b3-4e32-8c6b-dec54ba13d89",\n    "source_id": "ff2f3717-d1c0-4a68-96f9-9dba20245aa3",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "46f0e541-1524-4973-b6d5-7499fb8fb3a8",\n    "node_public_key": "17b7ee56-931c-4cd1-abc4-5b24d85c972a"\n  },\n  {\n    "id": "1b548a2c-d6a4-45ab-95ff-7855bee9049b",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15-sources.jar",\n    "artifact_hash": "930b528fc1cc6ad19b719c8f79fbf494814b3572f4df9f2555186ce2527a3116",\n    "source_hash": "",\n    "artifact_id": "04978768-8883-491e-9110-59a2b9710f34",\n    "source_id": "6fc1e9c8-af1d-49ab-b870-247af461fc2a",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "ee39ca4d-b757-4329-8cc1-6e10319cb6a3",\n    "node_public_key": "4d9d5ea0-9c82-4905-8423-2d7109993e19"\n  },\n  {\n    "id": "e916ae11-cecf-422a-8123-a8d852ce2a90",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15.jar.md5",\n    "artifact_hash": "9e433debcc9932e38e6187e17a112f78f2fddc47419d27c4926776505528dfee",\n    "source_hash": "",\n    "artifact_id": "af797f13-9668-48c8-ab92-366c3b915167",\n    "source_id": "d24a1dc1-4c39-4453-85fd-fd4872e8a857",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "9492e952-be4e-4051-be3d-2e3041075f97",\n    "node_public_key": "bb225d61-9fc9-4433-a9ad-adab50404e56"\n  },\n  {\n    "id": "70ff4e9e-a1fe-4d64-8c24-af0c8dc0a305",\n    "package_type": "Maven2",\n    "package_specific_id": "commons-codec:commons-codec:1.15",\n    "num_artifacts": 15,\n    "package_specific_artifact_id": "commons-codec/commons-codec/1.15/commons-codec-1.15.pom",\n    "artifact_hash": "c86ee198a35a3715487860f419cbf642e7e4d9e8714777947dbe6a4e3a20ab58",\n    "source_hash": "",\n    "artifact_id": "c96317aa-b20c-4f67-aedf-c4be4fa912ff",\n    "source_id": "0e316ffb-68c7-4e84-9352-95604582ba11",\n    "timestamp": 1660908540,\n    "operation": "AddArtifact",\n    "node_id": "c08e0a25-1f79-4c0e-9f4d-f9dbc4d2e736",\n    "node_public_key": "9563043e-7e2b-4e3c-b64b-cbed3e9da32d"\n  }\n]\n')))}u.isMDXComponent=!0}}]);