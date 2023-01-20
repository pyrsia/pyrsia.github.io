(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[128],{71999:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=(a(8209),["components"]),o={title:"Release 0.2.2",authors:"sudhindra",tags:["pyrsia","rust","onboarding","upgrade","0.2.2","release"]},l=void 0,u={permalink:"/blog/2022/12/20/pyrsia-0.2.2-released",source:"@site/blog/2022-12-20-pyrsia-0.2.2-released.md",title:"Release 0.2.2",description:"Announcing a new release",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[{label:"pyrsia",permalink:"/blog/tags/pyrsia"},{label:"rust",permalink:"/blog/tags/rust"},{label:"onboarding",permalink:"/blog/tags/onboarding"},{label:"upgrade",permalink:"/blog/tags/upgrade"},{label:"0.2.2",permalink:"/blog/tags/0-2-2"},{label:"release",permalink:"/blog/tags/release"}],readingTime:1.5,hasTruncateMarker:!1,authors:[{name:"Sudhindra Rao",title:"Pyrsia Maintainer",url:"https://github.com/betarelease",imageURL:"https://github.com/betarelease.png",key:"sudhindra"}],frontMatter:{title:"Release 0.2.2",authors:"sudhindra",tags:["pyrsia","rust","onboarding","upgrade","0.2.2","release"]},prevItem:{title:"Pyrsia Anniversary Recap",permalink:"/blog/2022/12/30/pyrsia-anniversary-recap"},nextItem:{title:"How Pyrsia is Using libp2p to Take Over the World!",permalink:"/blog/2022/12/20/using-libp2p-to-take-over-the-world-2022-ipfs-camp"}},p={authorsImageUrls:[void 0]},d=[{value:"Announcing a new release",id:"announcing-a-new-release",level:2}],c={toc:d};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"announcing-a-new-release"},"Announcing a new release"),(0,i.kt)("p",null,"We are happy to announce the release of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/releases/tag/v0.2.2"},"version 0.2.2")," today!"),(0,i.kt)("p",null,"As we continue to build Pyrsia we are now settling in on a regular release schedule. This is to allow us to release consistently and in small increments."),(0,i.kt)("p",null,"Starting this release we are listing the important features we hope to cover in the upcoming release. They are listed as part of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/milestone/8"},"the milestone definition"),"."),(0,i.kt)("p",null,"This release added a few important upgrades:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade libp2p to 0.50.0"),(0,i.kt)("li",{parentName:"ul"},"Upgrade clap for Pyrsia CLI"),(0,i.kt)("li",{parentName:"ul"},"Upgrade and pin rust version to 1.64"),(0,i.kt)("li",{parentName:"ul"},"Ability to query a requested build's status"),(0,i.kt)("li",{parentName:"ul"},"Improvements in error messages"),(0,i.kt)("li",{parentName:"ul"},"Documentation fixes and improvements"),(0,i.kt)("li",{parentName:"ul"},"Onboarding resources for new developers hoping to learn about Pyrsia and Rust")),(0,i.kt)("p",null,"A big thing we learnt during this release is the ability to pin our builds to a definitive version of Rust. This simplifies our build and github processes significantly because we will be able to\nfind the application rust version for every release. ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," will have that release defined and will be the one place to look for it for any automation."),(0,i.kt)("p",null,"While processing the release and testing it we also found an inadvertent dependency being pulled in - openssl. This dependency broke deployments on linux. We were able to discover a fix to use rusttls instead. We discovered this while running github actions that relied on ",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu-latest")," instead of the specific LTS version of ",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu")," we expected. We have now pinned the version of ubuntu that Pyrsia builds with."),(0,i.kt)("p",null,"Overall this will fix some of the issues that were reported to us and also make developer/contributor experience better."),(0,i.kt)("p",null,"Please ",(0,i.kt)("a",{parentName:"p",href:"https://pyrsia.io/docs/tutorials/quick-installation/"},"download our installers"),", try out Pyrsia with Docker and ",(0,i.kt)("a",{parentName:"p",href:"https://pyrsia.io/docs/community/get_involved/"},"let us know")," if you are looking for something Pyrsia does not support yet."))}g.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);