(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[9442],{43765:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var s=a(87462),i=(a(67294),a(3905));a(8209);const n={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/community/get_involved/submit_pr.md"},l="Submit a PR",o={unversionedId:"community/get_involved/submit_pr",id:"community/get_involved/submit_pr",title:"Submit a PR",description:"If you haven't already, read about what we consider as Good PRs.",source:"@site/docs/community/get_involved/submit_pr.md",sourceDirName:"community/get_involved",slug:"/community/get_involved/submit_pr",permalink:"/docs/community/get_involved/submit_pr",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/community/get_involved/submit_pr.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/community/get_involved/submit_pr.md"},sidebar:"tutorialSidebar",previous:{title:"New to Pyrsia",permalink:"/docs/community/get_involved/onboarding"},next:{title:"Code of Conduct",permalink:"/docs/community/code-of-conduct"}},r={},u=[{value:"Builds and Tests Pass",id:"builds-and-tests-pass",level:2},{value:"A release build",id:"a-release-build",level:3},{value:"Format and Linting",id:"format-and-linting",level:2},{value:"Install Linters",id:"install-linters",level:3},{value:"Security Audit",id:"security-audit",level:2},{value:"Install Audit",id:"install-audit",level:3},{value:"End-to-End testing",id:"end-to-end-testing",level:2},{value:"How-to Update",id:"how-to-update",level:2}],d={toc:u};function p(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,s.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"submit-a-pr"},"Submit a PR"),(0,i.kt)("p",null,"If you haven't already, read about what we consider as ",(0,i.kt)("a",{parentName:"p",href:"/docs/community/get_involved/good_pr"},"Good PRs"),"."),(0,i.kt)("p",null,'When developing new features for Pyrsia, we aim for the best quality code possible. Here\'s the steps with some "How To"s on getting there.'),(0,i.kt)("p",null,'We also have "pre commit" scripts (located in the root of the repository) which will run on of these steps.\nThis is a easy way to prepare your changes ahead of opening a pull request.'),(0,i.kt)("h2",{id:"builds-and-tests-pass"},"Builds and Tests Pass"),(0,i.kt)("p",null,"The base line is making sure all the code compiles and every test passes."),(0,i.kt)("p",null,"\u2757 This is enforced by our Action jobs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --all-targets\ncargo test --workspace\n")),(0,i.kt)("h3",{id:"a-release-build"},"A release build"),(0,i.kt)("p",null,"Pyrsia provides a release build that is installed through system package managers. This should be built and run as part of the integration tests."),(0,i.kt)("p",null,"\u2139\ufe0f For major changes, this is recommended."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --all-targets --release\n")),(0,i.kt)("h2",{id:"format-and-linting"},"Format and Linting"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("em",{parentName:"p"},"Make sure to follow the install instructions ",(0,i.kt)("a",{parentName:"em",href:"#install-linters"},"here")," on your first time"))),(0,i.kt)("p",null,"We have dedicated ourselves to the community and following the standard practices such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-dev-tools/fmt-rfcs"},"https://github.com/rust-dev-tools/fmt-rfcs"),"."),(0,i.kt)("p",null,"\u2757 We are strict about letting warnings into our code base. This is partially enforced by our Action jobs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo fmt\ncargo clippy\n")),(0,i.kt)("h3",{id:"install-linters"},"Install Linters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rustfmt: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/rustfmt#quick-start"},"https://github.com/rust-lang/rustfmt#quick-start")),(0,i.kt)("li",{parentName:"ul"},"Clippy: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/rust-clippy#step-2-install-clippy"},"https://github.com/rust-lang/rust-clippy#step-2-install-clippy"))),(0,i.kt)("h2",{id:"security-audit"},"Security Audit"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("em",{parentName:"p"},"Make sure to follow the install instructions ",(0,i.kt)("a",{parentName:"em",href:"#install-audit"},"here")," on your first time"))),(0,i.kt)("p",null,"It goes without saying, this is hugely important to use. Make sure to run this if there are any changes to the dependencies or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.lock")," file."),(0,i.kt)("p",null,"\u2757 This is enforced by our Action jobs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo audit\n")),(0,i.kt)("h3",{id:"install-audit"},"Install Audit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RustSec's Audit: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rustsec/rustsec/tree/main/cargo-audit#installation"},"https://github.com/rustsec/rustsec/tree/main/cargo-audit#installation"))),(0,i.kt)("h2",{id:"end-to-end-testing"},"End-to-End testing"),(0,i.kt)("p",null,"It's strongly encouraged to run a full test to make sure interaction with external tools are not broken.\nYou can follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/community/get_involved/local_dev_setup"},"Local Development Setup")," guide to perform this."),(0,i.kt)("h2",{id:"how-to-update"},"How-to Update"),(0,i.kt)("p",null,"We currently target the most current stable version of the rust toolchain. Periodically execute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")))}p.isMDXComponent=!0},11748:(t,e,a)=>{var s={"./locale":89234,"./locale.js":89234};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id=11748}}]);