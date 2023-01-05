(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5279],{65066:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),s=(a(8209),["components"]),o={title:"How Pyrsia is Using libp2p to Take Over the World!",authors:"efrisch",tags:["rust","libp2p","ipfs","ipfs-camp","pyrsia"]},p=void 0,l={permalink:"/blog/2022/12/20/using-libp2p-to-take-over-the-world-2022-ipfs-camp",source:"@site/blog/2022-12-20-using-libp2p-to-take-over-the-world-2022-ipfs-camp.md",title:"How Pyrsia is Using libp2p to Take Over the World!",description:"IPFS Camp and Libp2p Day",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"libp2p",permalink:"/blog/tags/libp-2-p"},{label:"ipfs",permalink:"/blog/tags/ipfs"},{label:"ipfs-camp",permalink:"/blog/tags/ipfs-camp"},{label:"pyrsia",permalink:"/blog/tags/pyrsia"}],readingTime:3.435,hasTruncateMarker:!1,authors:[{name:"Elliott Frisch",title:"Pyrsia Contributor",imageURL:"https://github.com/efrisch.png",key:"efrisch"}],frontMatter:{title:"How Pyrsia is Using libp2p to Take Over the World!",authors:"efrisch",tags:["rust","libp2p","ipfs","ipfs-camp","pyrsia"]},prevItem:{title:"Release 0.2.2",permalink:"/blog/2022/12/20/pyrsia-0.2.2-released"},nextItem:{title:"Create macOS Installer for Rust Binary App",permalink:"/blog/2022/12/02/create-macOS-brew-installer-for-rust-binary"}},h={authorsImageUrls:[void 0]},u=[{value:"IPFS Camp and Libp2p Day",id:"ipfs-camp-and-libp2p-day",level:2},{value:"Day 1",id:"day-1",level:2},{value:"Iroh",id:"iroh",level:3},{value:"js-ipfs",id:"js-ipfs",level:3},{value:"IPVM",id:"ipvm",level:3},{value:"Day 2",id:"day-2",level:2},{value:"Day 3",id:"day-3",level:2}],d={toc:u};function c(e){var t=e.components,o=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipfs-camp-and-libp2p-day"},"IPFS Camp and Libp2p Day"),(0,r.kt)("p",null,"Heading to ",(0,r.kt)("a",{parentName:"p",href:"https://2022.ipfs.camp/"},"IPFS Camp 2022")," (the 2022 theme is discovering how to use IPFS to build a better web) on Thursday October 27, my flight scheduled for 2:53 pm, racing through Atlanta I realized I forgot my coat half-way to the airport. No time to retrieve it, I found myself aboard United flight 1829 to Newark, NJ arriving at EWR about 2 and a half hours later (without a coat). I was waiting for my connecting flight to Lisbon when they announced a gate change. Walked with the others down to the new gate. In the air at 2035 we arrived at about 0820 Friday morning and made our way to Portuguese customs."),(0,r.kt)("p",null,"It is ",(0,r.kt)("em",{parentName:"p"},"already")," time, I find a taxi outside the airport. Lucky the taxi drivers' English is far superior to my Portuguese, it cost a mere 10 Euros for the ride to the Convento do Beato and Day 1 of IPFS Camp!"),(0,r.kt)("p",null,"After a full night of travel I was excited to get into the conference and get technical - however jet lagged."),(0,r.kt)("h2",{id:"day-1"},"Day 1"),(0,r.kt)("p",null,"Day 1 is a bit of a blur, as the IPFS Camp speakers regaled us with the latest happenings in IPFS. ",(0,r.kt)("a",{parentName:"p",href:"https://js.ipfs.tech/"},"JS-IPFS"),", ",(0,r.kt)("a",{parentName:"p",href:"https://fission.codes/blog/ipfs-thing-breaking-down-ipvm/"},"IPVM"),", ",(0,r.kt)("a",{parentName:"p",href:"https://iroh.computer/"},"Iroh")," (Rust implementation of IPFS) and Filecoin and NFTs; oh my! I attend the Keynotes, and then learn about plans to \u201cdecentralize all of the things!\u201d ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/HRYREdsLt5k"},"Alternative IPFS implementations"),", then the IPFS project expo where I was able to experiment with Fission\u2019s IPVM."),(0,r.kt)("h3",{id:"iroh"},"Iroh"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/qPBR2K2X6cs"},"Iroh story")," is compelling, because they have a complete IPFS implementation in Rust."),(0,r.kt)("h3",{id:"js-ipfs"},"js-ipfs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/pXOBE9tfevQ"},"js-ipfs")," is interesting, because they\u2019re capable of running in both node and the browser. Might try it in Rhino as well. But these days Rust is the language I use for my primary day to day development at work."),(0,r.kt)("h3",{id:"ipvm"},"IPVM"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/rzJWk1nlYvs"},"IPVM story"),' is also compelling, because they intend to host WASM VMs as potentially a new kind of "serverless" infrastructure. The ability to use distributed data as executable code in a decentralized cloud is fascinating technically.'),(0,r.kt)("p",null,"Feeling exhausted, and having been awake since Thursday, I took an Uber back to the hotel, checked-in, showered and slept. I note the shower is significantly raised and breakfast is served at 7 am."),(0,r.kt)("h2",{id:"day-2"},"Day 2"),(0,r.kt)("p",null," I breakfast and hop in an Uber and back to the Convento do Beato, where I attended talks on Web 3; especially memorable were ",(0,r.kt)("a",{parentName:"p",href:"https://ipld.io/"},"IPLD"),", ",(0,r.kt)("a",{parentName:"p",href:"https://guide.fission.codes/developers/webnative/file-system-wnfs"},"WNFS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/myelnet/rs-graphsync"},"Graphsync"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/J_Q6hF_lPiM"},"IPLD is a data modeling language"),". Used to model graph based data structures. Primary use case is for blockchain with-in filecoin.\nWNFS is a file system built on top of IPFS. Offers pinning services. This sounds conceptually like what we're building.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/myelnet/rs-graphsync"},"Graphsync")," is used by Filecoin for syncing the blockchain. Possibly a good fit for syncing blockchains. Requires IPLD.\nThe measurement and performance unconference includes many interesting projects, especially ",(0,r.kt)("a",{parentName:"p",href:"https://docs.testground.ai/"},"Testground"),"."),(0,r.kt)("h2",{id:"day-3"},"Day 3"),(0,r.kt)("p",null,"It's libp2p day so I sit at the presenter's table and prepare for ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/aIxmQKWUjNY"},"my talk"),". Internet is spotty (it is a former convent) so I setup my phone as a Hotspot (my fellow presenters are especially grateful) and download the Docker image I intend to use for my talk (it works so much faster when you precache your data, but we really should use something heavier than Alpine); the audience appears to appreciate the demo working at all (as the Internet was not working in the convent at the time) and the demo impresses."),(0,r.kt)("p",null,"Answering questions, and interacting with others' at libp2p day yields several insights into behaviors we are seeing in our p2p network. For example, we should be implementing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/libp2p/latest/libp2p/ping/index.html"},"PING")," as that provides a heartbeat mechanism and would allow our peers to timeout far more efficiently (currently can take 12 minutes)."),(0,r.kt)("p",null,"Once again it is late, Uber to the hotel, eating and sleeping. "),(0,r.kt)("p",null,"Sadly, now IPFS camp is over, but I am glad that I was able to be here and have these conversations and make great connections!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IPFS Camp 2022 Group Photo",src:a(30848).Z,title:"IPFS Camp 2022 Group Photo",width:"2048",height:"1366"})),(0,r.kt)("p",null,"Please checkout ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/aIxmQKWUjNY"},"my talk")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1rn0NKAoTpxyA2iTPE_8fkEqKI3ke8xu9gnhcLyrm7Dk"},"slides")," to learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://pyrsia.io/"},"Pyrsia"),"."))}c.isMDXComponent=!0},11748:function(e,t,a){var i={"./locale":89234,"./locale.js":89234};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=11748},30848:function(e,t,a){"use strict";t.Z=a.p+"assets/images/2022-ipfs-camp-group-a888a39bb44ab641d9f86ddbe85172b4.png"}}]);