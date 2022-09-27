"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3757],{23908:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(87462),i=o(63366),a=(o(67294),o(3905)),r=(o(8209),["components"]),l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/doc_workflow.md"},s="Documentation Contribution Workflow",u={unversionedId:"community/get_involved/doc_workflow",id:"community/get_involved/doc_workflow",title:"Documentation Contribution Workflow",description:"To contribute to the documentation (including blogs), you can follow the following guidelines for making documentation contributions.",source:"@site/docs/community/get_involved/doc_workflow.md",sourceDirName:"community/get_involved",slug:"/community/get_involved/doc_workflow",permalink:"/docs/community/get_involved/doc_workflow",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/doc_workflow.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/doc_workflow.md"},sidebar:"tutorialSidebar",previous:{title:"Contributing code to Pyrsia",permalink:"/docs/community/get_involved/contributing"},next:{title:"Good Pull Requests",permalink:"/docs/community/get_involved/good_pr"}},d={},p=[{value:"Structure Guidelines",id:"structure-guidelines",level:2},{value:"<code>docs</code>",id:"docs",level:3},{value:"<code>blog</code>",id:"blog",level:3},{value:"Previewing Changes",id:"previewing-changes",level:2}],c={toc:p};function h(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-contribution-workflow"},"Documentation Contribution Workflow"),(0,a.kt)("p",null,"To contribute to the documentation (including blogs), you can follow the following guidelines for making documentation contributions."),(0,a.kt)("p",null,"All documents relevant to the project are written in the Markdown format. You can see the documentation\nfor the GitHub Flavor ",(0,a.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"here")," or you can use this\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"},"quick guide"),"."),(0,a.kt)("p",null,"All the documentation is visible on GitHub and ",(0,a.kt)("a",{parentName:"p",href:"https://pyrsia.io"},"https://pyrsia.io")," website, so it's important to keep in mind\nthere are some limitations and extra features that might be available. You might want to refer to the\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features#standard-features"},"website's standard features")," if you are unsure."),(0,a.kt)("h2",{id:"structure-guidelines"},"Structure Guidelines"),(0,a.kt)("p",null,"All the documentation for Pyrsia should live in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia"},"pyrsia/pyrsia")," repository\nin the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/blob/main/docs"},(0,a.kt)("inlineCode",{parentName:"a"},"docs"))," folder. Blogs belong in the same repository but should be\nplaced in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/blob/main/blog"},(0,a.kt)("inlineCode",{parentName:"a"},"blog"))," folder."),(0,a.kt)("h3",{id:"docs"},(0,a.kt)("inlineCode",{parentName:"h3"},"docs")),(0,a.kt)("p",null,"All sub-folders should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"readme.md")," with a good title, as a level one header, and the\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#sidebar_position"},"front matter for position"),"\nthe folder on the website. Make sure to pay attention to the other folder numbers."),(0,a.kt)("p",null,"All documents should have a ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," file extension. If you need more customization you can use ",(0,a.kt)("inlineCode",{parentName:"p"},".mdx"),", see\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"here")," for more information. All files need a level one heading to provide the\npage with a good title."),(0,a.kt)("h3",{id:"blog"},(0,a.kt)("inlineCode",{parentName:"h3"},"blog")),(0,a.kt)("p",null,"All blogs should be placed in the root of the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," folder. Each one should be named ",(0,a.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd-<slug>.md"),", where slug should be a unique\nname for the blog (e.g. a short hand of the title); this is described ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"here"),"."),(0,a.kt)("p",null,"Some front matter is required at the top of the Markdown:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"title"),(0,a.kt)("li",{parentName:"ul"},"authors: ","[","name, title, image_url]"),(0,a.kt)("li",{parentName:"ul"},"tags")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/pull/720"},"#720")," for an example."),(0,a.kt)("p",null,"In addition the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#draft"},(0,a.kt)("inlineCode",{parentName:"a"},"draft")," front matter")," may be added\nso the blog can be reviewed by the community before being made public on the website."),(0,a.kt)("p",null,"Blogs should not have use a level one heading, after the fron matter the opening paragraph or abstract should be next.\nSection heading should begin with a level two heading."),(0,a.kt)("p",null,"All media assests should be external links since they will not be copied to the website when deployed from this repository."),(0,a.kt)("h2",{id:"previewing-changes"},"Previewing Changes"),(0,a.kt)("p",null,"Currently it is only possible to preview your changes locally, you should be following the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/community/get_involved/contributing"},"contributing guidelines")," and have forked the repository.\nTo preview the changes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fork the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io"},"website's repository")," and clone your fork."),(0,a.kt)("li",{parentName:"ol"},"Modify ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io/blob/main/package.json#L6"},"this line"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"pyrsia/pyrsia")," to your fork, (e.g ",(0,a.kt)("inlineCode",{parentName:"li"},"octocat/pyrsia"),")"),(0,a.kt)("li",{parentName:"ul"},"Optionally, you can change the branch by replacing ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"your-branch-name")),(0,a.kt)("li",{parentName:"ul"},"You can ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io/pull/66/commits/c317f9dab8f6bcde5f8588ca75858db72241930d"},"check this example")))),(0,a.kt)("li",{parentName:"ol"},"Follow instructions described ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io#website"},"here"),' for "local development"')),(0,a.kt)("p",null,"If you make changes to your fork of the ",(0,a.kt)("inlineCode",{parentName:"p"},"pyrsia/pyrsia")," repository, you can restart the local server to update the documentation.\nYou can make changes locally and the local serve will automatically update; do not forget to change them to your fork afterwards."))}h.isMDXComponent=!0}}]);