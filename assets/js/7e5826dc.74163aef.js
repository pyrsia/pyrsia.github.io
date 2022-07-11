"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[8848],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Quick Installation",c={unversionedId:"technology/quick-installation",id:"technology/quick-installation",title:"Quick Installation",description:"Pyrsia can easily be setup on a local Ubuntu (or Debian based) machine by using our apt installer package.",source:"@site/docs/technology/quick-installation.mdx",sourceDirName:"technology",slug:"/technology/quick-installation",permalink:"/docs/technology/quick-installation",editUrl:"https://github.com/pyrsia/pyrsia.github.io/edit/main/docs/technology/quick-installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation Overview",permalink:"/docs/"},next:{title:"Welcome to the Developer's Hub",permalink:"/docs/developer/"}},u={},p=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Using the Web Script",id:"using-the-web-script",level:2},{value:"From the Command Line",id:"from-the-command-line",level:2},{value:"Verify everything is running smoothly",id:"verify-everything-is-running-smoothly",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-installation"},"Quick Installation"),(0,o.kt)("p",null,"Pyrsia can easily be setup on a local Ubuntu (or Debian based) machine by using our ",(0,o.kt)("inlineCode",{parentName:"p"},"apt")," installer package."),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Limited platform support")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently our team is working very hard on core features. There may be missing support for you Operating System (OS)."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu Focal (x86_64)")),(0,o.kt)("h2",{id:"using-the-web-script"},"Using the Web Script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://pyrsia.io/install.sh | sh\n")),(0,o.kt)("h2",{id:"from-the-command-line"},"From the Command Line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Update system and install base tooling\nsudo apt-get update\nsudo apt-get install -y wget gnupg\n\n# Add the Pyrsia keys to verify packages\nwget -qO - https://pyrsia.io/public.key | sudo apt-key add -\necho "deb https://pyrsia.io/repo focal main" | sudo tee -a /etc/apt/sources.list > /dev/null\nsudo apt-get update\n\n# Install\nsudo apt-get install -y pyrsia\n')),(0,o.kt)("h2",{id:"verify-everything-is-running-smoothly"},"Verify everything is running smoothly"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pyrsia --version\npyrsia 0.1.0\n$ pyrsia ping\nConnection Successfull !! {}\n")),(0,o.kt)("p",null,"If you see the follow, then your installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pyrsia ping\nError: error sending request for url (http://localhost:7888/v2): error trying to connect: tcp connect error: Connection refused (os error 111)\n")))}m.isMDXComponent=!0}}]);