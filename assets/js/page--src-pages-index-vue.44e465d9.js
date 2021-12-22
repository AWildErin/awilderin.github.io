(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Junv:function(e,t,a){"use strict";var o=a("I+eb"),n=a("6LWA"),r=[].reverse,s=[1,2];o({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),r.call(this)}})},aK7f:function(e,t,a){},gEGz:function(e,t,a){"use strict";a("aK7f")},iyQ6:function(e,t,a){"use strict";a.r(t);a("Junv"),a("2B1R"),a("oVuX");var o={name:"Introduction",computed:{generalInfo:function(){return this.$static.generalInfo.fields.data},getSocials:function(){return this.$static.allSocials.edges.map((function(e){return e.node.fields.data}))},getLanguages:function(){return this.$static.generalInfo.fields.data.languages.join(", ")},getEngines:function(){return this.$static.generalInfo.fields.data.engines.join(", ")},getScm:function(){return this.$static.generalInfo.fields.data.scm.join(", ")}}},n=a("KHd+"),r=a("Kw5r"),s=r.a.config.optionMergeStrategies.computed,i={generalInfo:{fields:{data:{intro:"Hi I'm Erin, a programmer and designer from the United Kingdom. I've been programming since around the middle of 2018, starting with Lua and eventually learning more languages as I did random projects either by myself or with friends.",languages:["C#","A bit of C++","HTML/CSS","Lua","Python","UE4 Blueprint"],engines:["Unity","Source 1/2","Unreal Engine 3/4"],scm:["Subversion","Git"]}}},allSocials:{edges:[{node:{fields:{data:{icon:"bi-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/ian-sharp-b66a9921a/"}}}},{node:{fields:{data:{icon:"bi-house-fill",name:"Steam Profile",url:"https://steamcommunity.com/id/AWildErin/"}}}},{node:{fields:{data:{icon:"bi-discord",name:"Erin#3059",url:"https://discordapp.com/users/275347039938674688"}}}},{node:{fields:{data:{icon:"bi-github",name:"Github Profile",url:"https://github.com/awilderin"}}}}]}},l=function(e){var t=e.options;t.__staticData?t.__staticData.data=i:(t.__staticData=r.a.observable({data:i}),t.computed=s({$static:function(){return t.__staticData.data}},t.computed))},d=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"border-end border-3 border-primary col-3 pt-2 text-white"},[a("img",{staticClass:"mx-auto d-block rounded-circle border-success",staticStyle:{width:"256px"},attrs:{src:"current-pfp.png"}}),a("h1",{staticClass:"text-center"},[e._v("AWildErin's Portfolio")]),e._v("\n  "+e._s(e.generalInfo.intro)+"\n\n  "),a("h3",[e._v("A bit about me:")]),a("h5",[e._v("Languages")]),a("p",[e._v(e._s(e.getLanguages))]),a("h5",[e._v("Engines")]),a("p",[e._v(e._s(e.getEngines))]),a("h5",[e._v("Source Control")]),a("p",[e._v(e._s(e.getScm))]),e._l(e.getSocials,(function(t){return a("div",{key:t.name,staticClass:"btn-group mt-2 mb-2"},[a("a",{staticClass:"btn btn-primary me-2",attrs:{href:t.url,target:"_blank"}},[t.icon?a("i",{class:t.icon}):e._e(),e._v(" "+e._s(t.name))])])})),e._m(0)],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-2 text-muted"},[this._v("This site was made with "),t("a",{attrs:{href:"https://gridsome.org/",target:"_blank"}},[this._v("Gridsome")]),this._v(" and "),t("a",{attrs:{href:"https://getbootstrap.com",target:"_blank"}},[this._v("Bootstrap")])])}],!1,null,null,null);"function"==typeof l&&l(d);var c=d.exports,u={name:"ProjectCard",props:{project:Object},computed:{getLanguages:function(){return this.project.languages.join(", ")},getSoftware:function(){return this.project.software.join(", ")}},methods:{getImage:function(e){return console.log(e),this.project.media[e].url}},data:function(){return{name:0}}},m={metaInfo:{title:"Portfolio"},components:{Introduction:c,ProjectCard:Object(n.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.project.name))]),e.project.engine?a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v("Engine: "+e._s(e.project.engine))]):e._e(),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(e.project.description))]),e.project.languages.length>1?a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v("Languages: "+e._s(e.getLanguages))]):e._e(),e.project.languages.length<=1?a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v("Language: "+e._s(e.project.languages[0]))]):e._e(),e.project.software.length>0?a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v("Software: "+e._s(e.getSoftware))]):e._e(),e._l(e.project.links,(function(t,o){return a("div",{key:o,staticClass:"btn-group mt-2 mb-2"},[a("a",{staticClass:"btn btn-primary me-2",attrs:{href:t.url,target:"_blank"}},[t.icon?a("i",{class:t.icon}):e._e(),e._v(" "+e._s(t.name))])])})),e._l(e.project.paragraphs,(function(t,o){return a("p",{key:o,staticClass:"card-text"},[e._v("\n      "+e._s(t.text)+"\n    ")])})),e.project.media.length>0?a("ul",{staticClass:"list-group list-group-horizontal-lg d-flex flex-wrap center"},e._l(e.project.media,(function(e,t){return a("li",{key:t,staticClass:"list-group-item bg-dark"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"img-thumbnail bg-dark border-dark",staticStyle:{height:"100px"},attrs:{src:e.url}})])])})),0):e._e()],2)])}),[],!1,null,null,null).exports},computed:{getProjects:function(){return this.$static.allProjects.edges.map((function(e){return e.node.fields.data})).reverse()}}},h=(a("gEGz"),r.a.config.optionMergeStrategies.computed),p={allProjects:{edges:[{node:{fields:{data:{name:"SCP: Data Redacted",engine:"Unreal Engine 4",languages:["C++","Blueprint"],software:[],description:"",paragraphs:[{text:"SCP: Data Redacted was a project by me and a few other people based around the SCP Foundation and roleplaying as various roles inside of it. The project was massively over-scoped and never came to fruition, but me and others learned quite a bit of the development process while creating the parts of the game we managed to make."},{text:"The idea was based around players roleplaying aspects of the Foundation, such as scientists, security and much more. We have a lot of indepth plans for SCP:DR but lacked the team for most of them."},{text:"For SCP:DR I had a few roles such as Project Manager, Programmer and Lead Designer, where I designed various parts of the game such as roleplay systems (Terminals, servers etc) aswell as other things like the player jobs. Unfortunately, most of the designed systems never got the chance to be implemented."},{text:"You can find a download link to the last build of SCP:DR. In order to load this, you must have Unreal Engine 4.22. There may be issues but I will not be offering support with it."},{text:"Please keep in mind that the screenshots are based from an in-development build. The final product would have had better UI design."}],links:[{icon:"bi-arrow-down",name:"Project Download",url:"https://mega.nz/file/w14nmQ7I#zRNQQPmWe1rTkXhWDsBJjyRJnFs9uEdVGWP0p6x5lWY"}],media:[{name:"Main Menu",url:"projects/scpdr/scpdr-mainmenu.png"},{name:"Custom Console",url:"projects/scpdr/scpdr-customconsole.png"},{name:"Chat system with commmands",url:"projects/scpdr/scpdr-chatcommands.png"},{name:"Character Menu",url:"projects/scpdr/scpdr-charmenu1.png"},{name:"Character Menu",url:"projects/scpdr/scpdr-charmenu2.png"},{name:"Character Menu",url:"projects/scpdr/scpdr-charmenu3.png"}]}}}},{node:{fields:{data:{name:"Zombie Game",engine:"Unity, Source 2: s&box",languages:["C#"],software:[],description:"",paragraphs:[{text:"Zombie Game is my idea for a zombie game based on games like DayZ and Project Zomboid. The game was more designed with VR in mind but I am designing ways to make the gameplay available for both as s&box's VR implementation is a bit barebones at the moment."},{text:"The project originally started on Unity but eventually moved to s&box when I got access due to my familiarity with Source over Unity."},{text:""},{text:""},{text:""},{text:""},{text:""}],links:[{icon:"bi-google",name:"Draft Design Document",url:"https://docs.google.com/document/d/1BdimTrPW_N3Pn9YrdXXX2JXwgp-nU1_RqXpvadwnjZs/edit?usp=sharing"},{icon:"bi-github",name:"Github Repository",url:"https://github.com/AWildErin/zombie"}],media:[]}}}},{node:{fields:{data:{name:"Lancer Networks",engine:"Source 1: Garry's Mod",languages:["Lua"],software:[],description:"",paragraphs:[{text:"Lancer Networks was a Half-Life 2 Roleplaying community where I helped out as a developer for around half a year. While I was a developer there I was tasked with creating various plugins for Helix and Clockwork."},{text:"Main Menu: My first task with Lancer Networks was to work on a main menu for their server. The intial design and layout for the main menu was contructed for me, what I was asked to do was to populate the main menu with news from their website, using the WordPress API."},{text:"Cinematic Bars: For their events, they required a cinematic bar command that when ran would slide in 2 bars and display text in the middle."},{text:"Song player: I was asked to take the song player from ServerGuard and port it over to Clockwork. We ran into some issues when porting it but we eventually got it working. The song player works by allowing administrators to run songs using /play in the chat, this would then pop up a UI panel on the top of the screen showing the title and a progress bar synced with the video time."},{text:"Snowballs: My last task with them while the server was on Clockwork was to design a system for their winter event where players could pick up snowballs off the ground, this required me to allow players to pickup snowballs and throw them. This task was a bit complicated due to Garry's Mod's API, but I eventually got it completed."},{text:"Spawn Menu: I was asked to port over a clockwork plugin which added an item spawnlist on the standard spawn menu. This required me to rework how some stuff worked with the plugin."},{text:"My last task with Lancer was to make containers drop their inventory upon destruction, whether this be with the remover tool or being destroyed by a player."}],links:[],media:[{name:"Main menu when the WordPress API could not be found",url:"projects/ln/mainmenu-offline.png"},{name:"Snowball Item",url:"projects/ln/snowball-item.png"},{name:"Spotlight",url:"projects/ln/spotlight.png"},{name:"Spotlight",url:"projects/ln/spotlight2.png"},{name:"Spotlight",url:"projects/ln/spotlight3.png"},{name:"Song Player",url:"projects/ln/songplayer.png"}]}}}},{node:{fields:{data:{name:"Various Helix Gamemodes",engine:"Source 1: Garry's Mod",languages:["Lua"],software:[],description:"",paragraphs:[{text:"While playing around with Helix, I came up with some roleplay ideas which never fully got made."},{text:"ZombieRP: This was a helix version of my zombie game idea, which never fully got completed because I could never fully acomplish what I wanted with the idea."},{text:"SciFiRP: A mix between the concepts of Star Citizen and Halo, the original idea was to have player owned businesses and a fueled economy along with a bunch of jobs players could play as, military, police, etc. Unfortunately, this idea would never have taken off due to Garry's Mod's lack of actual serious roleplay needed to complete the idea and, as such, was stopped early in development."}],links:[{icon:"bi-google",name:"Sci-Fi RP Lore Document",url:"https://docs.google.com/document/d/1YxLJnn21ZrbRWmZcnMgdW1jLcT8tf6cV7QSSA6nKZ3w/edit?usp=sharing"}],media:[]}}}},{node:{fields:{data:{name:"UDK Level Viewer",engine:"",languages:["C#"],software:["OpenTK"],description:"The content inside the screenshots (the models and such) are not mine and are owned by their respected owners.",paragraphs:[{text:"In September 2021 I decided to create a level viewer for UDK/UE3 based games. Through this project I gained a better understanding of OpenGL, rendering and how Unreal Engine 3 works."},{text:"So far, the project has an exporter for UE3 levels to T3D supporting everything from lights to brushes. The level viewer can load UE3 models and materials fine, at the moment this has not been pushed to the main branch."}],links:[{icon:"bi-github",name:"Github Repository",url:"https://github.com/AWildErin/udklevelviewer"}],media:[{name:"Gears of War Judgement old town in the Gears of War 3 Editor",url:"projects/udklevelviewer/gowj_oldtown_1.png"},{name:"Gears of War Judgement old town in the Gears of War 3 Editor",url:"projects/udklevelviewer/gowj_oldtown_2.png"},{name:"Outlast labs in the UE3 Editor",url:"projects/udklevelviewer/outlast_lab_1.png"},{name:"Outlast labs in the UE3 Editor",url:"projects/udklevelviewer/outlast_lab_2.png"},{name:"Outlast labs in the UE3 Editor",url:"projects/udklevelviewer/outlast_lab_3.png"},{name:"Outlast labs in the UE3 Editor",url:"projects/udklevelviewer/outlast_lab_4.png"}]}}}},{node:{fields:{data:{name:"Source Editor",engine:"Source 1",languages:["C++","C#","CSS"],software:["Qt","Mono"],description:"",paragraphs:[{text:"Source Editor was my attempt at a UE4 styled editor for Source 1, based loosely on the Source 2 tools aswell. I decided on Qt for the framework as it allowed CSS styling, something I am decently familar with. The project never got completed, but it also features a basic C# loading system using Mono. This system could print to the console aswell as do other Source method if they were implemented, I used SWIG to generate the bindings and Mono to load them into Source. While the project wasn't completed, it taught me a bit about how Qt works and gave me some more ideas about other tools in the future."},{text:"How the editor was planned to have worked was to allow users to create their own tools using our codebase, as it was open source this was pretty easy to do. The project got halted early on due to some roadblocks I hit and, due to Source's lack of documentation for what I was using, I was unable to finish the project."}],links:[{icon:"bi-github",name:"Github Repository",url:"https://github.com/AWildErin/SourceEditor-sdk"}],media:[]}}}},{node:{fields:{data:{name:"Crowlite Software",engine:"UE4, Unity, Source 2: s&box",languages:["C#","CSS","HTML"],software:[],description:"",paragraphs:[{text:"Crowlite Software is a group I am currently leading of around 12 developers. These developers range from designers, to modellers, to programmers. Crowlite was our first venture into a Half Life 2 Roleplay styled game, which we eventually moved to working on some other various ideas on s&box, the Source 2 game by Facepunch Studios."},{text:"Sector 17: Sector 17 is our longest running project, originally started on UE4 we eventually moved to Unity and further Source 2. While haven't gotten much down in terms of programming, we have worked on quite a bit of design work for Sector 17, working on a lore, story and gameplay elements to bring Half-Life 2 Roleplay into a modern environment with a lot more opportunities to do stuff."},{text:"RPCore: RPCore is our base for roleplay games/gamemodes on s&box. Based on the Helix gamemode borrowing other features from different gamemodes such as CombineControl, Clockwork and our own ideas. RPCore, whenever it's finished, is planned to be open source, but at the moment it's been put aside for some of our other projects."},{text:"Sand Station 13: This is our recreation of Space Station 13 in s&box with gameplay ideas from Barotrauma, including various things such as a campaign, missions and more. At the moment, this project is still in the design phase as most of our team are busy as of right now."},{text:"Web: For our website, we plan to use ASP.NET as it keeps it inline with the language we use on our other projects. We plan to have a backend system where we can view project issues, commits, aswell as blog posts for the various projects. In the future, we can possibly allow connection with our game servers allowing servers to be configured by the web."},{text:""}],links:[{icon:"bi-github",name:"Github Organisation",url:"https://github.com/Crowlite-Software"}],media:[]}}}},{node:{fields:{data:{name:"Source 2 Automation Tool",engine:"",languages:["C#","JSON"],software:[],description:"",paragraphs:[{text:"S2AT is a tool based on the same concept as Chaos Automation Tool, where we can run 'modules' made in C# and configured via a JSON script."},{text:"The tool will take the config as a command line argument in the future, at the moment it's hardcoded for debug purposes, and it will read it loading the modules and running them as needed."}],links:[{icon:"bi-github",name:"Github Repository",url:"https://github.com/AWildErin/source2-automation-tool"}],media:[]}}}},{node:{fields:{data:{name:"Portal 2: Community Edition",engine:"Source 1",languages:["C++","XML","CSS","JavaScript"],software:["Qt","Panorama"],description:"",paragraphs:[{text:"Since Mid December 2021 I've been on Portal 2 Community Edition's team as UI Developer working with Qt and Panorama"},{text:"I originally started out contributing towards the open-source Qt Hammer dialogs in November to help the team get more work done on the port of Hammer's UI from MFC to Qt and I eventually applied for the team in December to help out on various other UI aspects of the game aswell as other Qt based stuff."},{text:"Some of the work I did in the Hammer Qt Dialogs can be found in the images below aswell as the Qt Hammer Dialogs link."}],links:[{icon:"bi-house",name:"Home Page",url:"https://portal2communityedition.com/"},{icon:"bi-github",name:"GitHub Organisation",url:"https://github.com/ChaosInitiative"},{icon:"bi-github",name:"Qt Hammer Dialogs",url:"https://github.com/ChaosInitiative/hammer-qt-dialogs"},{icon:"bi-discord",name:"Discord",url:"https://discord.gg/NcHSmgb"}],media:[{name:"Edit Visgroups Dialog",url:"projects/p2ce/editvisgroups.png"},{name:"Entity Help Dialog",url:"projects/p2ce/entityhelp.png"},{name:"Face Edit Sheet Dialog",url:"projects/p2ce/faceedit-1.png"},{name:"Face Edit Sheet Dialog",url:"projects/p2ce/faceedit-2.png"},{name:"Move To Visgroups Dialog",url:"projects/p2ce/movetovisgroups-1.png"},{name:"Move To Visgroups Dialog",url:"projects/p2ce/movetovisgroups-2.png"},{name:"Replace Dialog",url:"projects/p2ce/replace.png"},{name:"Smoothing Groups Dialog",url:"projects/p2ce/smoothinggroups.png"},{name:"Sound Browser Dialog",url:"projects/p2ce/soundbrowser.png"},{name:"Transformation Dialog",url:"projects/p2ce/transfromation.png"}]}}}},{node:{fields:{data:{name:"Gears of War: s&box",engine:"Source 2: s&box",languages:["C#","CSS","Python"],software:[],description:"Not affiliated with The Coalition or the original Gears of War series",paragraphs:[{text:"This is a project lead by me and another avid Gears of War fan, planning on creating a modular re-creation of Gears of War in s&box. We are aiming for the gameplay to be atleast 1:1 with the orignal game, while allowing for a large range of customisablity such as custom gamemodes, weapons, NPCs and more."},{text:"One thing we ran into was we needed a way to convert lots of models and animations from psk/psa to fbx, I wrote some blender scripts in python to aid in this conversion."},{text:"Currently the project is on hold due to life reasons, but when we get the time we make pushes to the code. Currently I am working on a pawn system where we can allow the AI to take over the same pawns as the player, this allows us to reuse the player pawns rather than creating full custom pawns for the AI."}],links:[],media:[]}}}}]}},g=function(e){var t=e.options;t.__staticData?t.__staticData.data=p:(t.__staticData=r.a.observable({data:p}),t.computed=h({$static:function(){return t.__staticData.data}},t.computed))},w=Object(n.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("div",{staticClass:"container-fluid bg-dark"},[t("div",{staticClass:"row ps-2"},[t("Introduction"),t("div",{staticClass:"col-9 mt-2"},[t("h1",{staticClass:"text-center text-white"},[this._v("A list of projects I've worked on")]),this._l(this.getProjects,(function(e){return t("div",{key:e.name},[t("ProjectCard",{staticClass:"mb-2 bg-dark text-white",attrs:{project:e}})],1)}))],2)],1)])])}),[],!1,null,null,null);"function"==typeof g&&g(w);t.default=w.exports}}]);