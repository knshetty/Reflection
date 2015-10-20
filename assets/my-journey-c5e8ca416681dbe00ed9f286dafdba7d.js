define("my-journey/app",["ember","ember/resolver","ember/load-initializers","my-journey/config/environment","exports"],function(e,t,n,s,r){"use strict";var a=e["default"],o=t["default"],i=n["default"],u=s["default"];a.MODEL_FACTORY_INJECTIONS=!0;var l=a.Application.extend({modulePrefix:u.modulePrefix,podModulePrefix:u.podModulePrefix,Resolver:o});i(l,u.modulePrefix),r["default"]=l}),define("my-journey/components/friesianhorse-architecture",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Component.extend({snapsvgInit:function(){var e;return e=Snap("#friesianhorse-arch-svg"),this.set("draw",e)},didInsertElement:function(){var e;return this.snapsvgInit(),e=this.get("draw"),Snap.load("assets/images/friesianhorse_architecture.svg",function(t){var n;return n=t.select("g"),e.append(n),e.addClass("fadeIn fadeIn-1s")})}}),t["default"]=n}),define("my-journey/components/hackneyhorse-architecture",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Component.extend({snapsvgInit:function(){var e;return e=Snap("#hackneyhorse-arch-svg"),this.set("draw",e)},didInsertElement:function(){var e;return this.snapsvgInit(),e=this.get("draw"),Snap.load("assets/images/hackneyhorse_architecture.svg",function(t){var n;return n=t.select("g"),e.append(n),e.addClass("fadeIn fadeIn-1s")})}}),t["default"]=n}),define("my-journey/components/markhor-architecture",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Component.extend({snapsvgInit:function(){var e;return e=Snap("#markhor-arch-svg"),this.set("draw",e)},didInsertElement:function(){var e;return this.snapsvgInit(),e=this.get("draw"),Snap.load("assets/images/markhor_architecture.svg",function(t){var n;return n=t.select("g"),e.append(n),e.addClass("fadeIn fadeIn-1s")})}}),t["default"]=n}),define("my-journey/components/norfolktrotter-architecture",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Component.extend({snapsvgInit:function(){var e;return e=Snap("#norfolktrotter-arch-svg"),this.set("draw",e)},didInsertElement:function(){var e;return this.snapsvgInit(),e=this.get("draw"),Snap.load("assets/images/norfolktrotter_architecture.svg",function(t){var n;return n=t.select("g"),e.append(n),e.addClass("fadeIn fadeIn-1s")})}}),t["default"]=n}),define("my-journey/components/nutcracker-rooks-architecture",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Component.extend({snapsvgInit:function(){var e;return e=Snap("#nutcracker-rooks-arch-svg"),this.set("draw",e)},didInsertElement:function(){var e;return this.snapsvgInit(),e=this.get("draw"),Snap.load("assets/images/nutcracker_rooks_architecture.svg",function(t){var n;return n=t.select("g"),e.append(n),e.addClass("fadeIn fadeIn-1s")})}}),t["default"]=n}),define("my-journey/components/tech-stack-physics",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Component.extend({didInsertElement:function(){var e,t,n,s,r,a,o,i,u,l,c,h,f,d,p,m,b;return a=Matter.Engine,l=Matter.World,t=Matter.Body,e=Matter.Bodies,s=Matter.Common,r=Matter.Composites,o=Matter.Events,i=Matter.Mouse,u=Matter.MouseConstraint,n=Matter.Bounds,h=a.create(this.$("#techstack-physics")[0],{render:{options:{showAngleIndicator:!0,wireframes:!0,height:314,width:210}}}),f=u.create(h),l.add(h.world,f),d=5,p={isStatic:!0,render:{visible:!0}},h.world.bodies=[],l.add(h.world,[e.rectangle(110,-d,215+2*d,10,p),e.rectangle(110,314+d,215+2*d,10,p),e.rectangle(210+d,161.5,10,312+2*d,p),e.rectangle(-d,161.5,10,312+2*d,p)]),c=1,b=r.stack(25,20,3,4,0,0,function(t,n){return 1===c?(c+=1,e.rectangle(t,n,55,53,{render:{sprite:{texture:"assets/images/emberjs-logo.svg",url:"http://emberjs.com/",xScale:.45,yScale:.45}}})):2===c?(c+=1,e.circle(t,n,27.5,{density:5e-4,frictionAir:.06,restitution:.3,friction:.01,render:{sprite:{texture:"assets/images/coffeescript-logo.svg",url:"http://coffeescript.org/",xScale:.375,yScale:.375}}})):3===c?(c+=1,e.circle(t,n,27.5,{density:5e-4,frictionAir:.06,restitution:.3,friction:.01,render:{sprite:{texture:"assets/images/broccoli-logo.svg",url:"http://broccolijs.com/",xScale:.1875,yScale:.1875}}})):4===c?(c+=1,e.rectangle(t,n,68.75,25,{render:{sprite:{texture:"assets/images/ember-cli-logo.svg",url:"http://www.ember-cli.com/",xScale:.8125,yScale:.8125}}})):5===c?(c+=1,e.circle(t,n,27.5,{density:5e-4,frictionAir:.06,restitution:.3,friction:.01,render:{sprite:{texture:"assets/images/bower-logo.svg",url:"http://bower.io/",xScale:.1125,yScale:.1125}}})):6===c?(c+=1,e.rectangle(t,n,43.75,50,{render:{sprite:{texture:"assets/images/html5-logo.svg",url:"http://www.w3.org/html/",xScale:.1,yScale:.1}}})):7===c?(c+=1,e.circle(t,n,22.75,{density:5e-4,frictionAir:.06,restitution:.3,friction:.01,render:{sprite:{texture:"assets/images/handlebars-logo.svg",url:"http://handlebarsjs.com/",xScale:.225,yScale:.225}}})):8===c?(c+=1,e.rectangle(t,n,37.5,37.5,{render:{sprite:{texture:"assets/images/bootstrap-logo.svg",url:"http://getbootstrap.com/",xScale:.2625,yScale:.2625}}})):9===c?(c+=1,e.rectangle(t,n,90,25,{render:{sprite:{texture:"assets/images/jquery-logo.svg",url:"http://jquery.com/",xScale:.2875,yScale:.2875}}})):10===c?(c+=1,e.rectangle(t,n,81.25,22.5,{render:{sprite:{texture:"assets/images/impress-js-logo.svg",url:"https://github.com/impress/impress.js",xScale:.2375,yScale:.2375}}})):11===c?(c+=1,e.rectangle(t,n,56.25,43.75,{render:{sprite:{texture:"assets/images/mapbox-logo.svg",url:"https://www.mapbox.com/",xScale:.25,yScale:.25}}})):12===c?(c+=1,e.rectangle(t,n,62.5,37.5,{render:{sprite:{texture:"assets/images/matter-js-logo.svg",url:"http://brm.io/matter-js/",xScale:.1875,yScale:.1875}}})):void 0}),l.add(h.world,b),m=h.render.options,m.background="",m.showAngleIndicator=!1,m.wireframes=!1,o.on(h,"mouseup",function(e){var t,s,r,a,o,i;if(!f.bodyB){for(o=e.source.world.composites[0].bodies,i=[],r=0,a=o.length;a>r;r++){if(t=o[r],n.contains(t.bounds,f.mouse.position)){s=t.render.sprite.url,void 0!==s&&window.open(s);break}i.push(void 0)}return i}}),a.run(h)}}),t["default"]=n}),define("my-journey/controllers/application",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Controller.extend({aboutModalButtons:[s.Object.create({title:"Close",clicked:"cancel",dismiss:"modal"})],actions:{showmodal:function(){return Bootstrap.ModalManager.show("aboutModal")},cancel:function(){return Bootstrap.NM.push("Modal was cancelled","info")}}}),t["default"]=n}),define("my-journey/controllers/projects/friesianhorse",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Controller.extend({actions:{fire_demo:function(){return window.open(this.get("demoSPA_url"))}}}),t["default"]=n}),define("my-journey/controllers/projects/hackneyhorse",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Controller.extend({actions:{fire_demo:function(){return window.open(this.get("demoService_url"))}}}),t["default"]=n}),define("my-journey/controllers/projects/norfolktrotter",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Controller.extend({actions:{fire_demo:function(){return window.open(this.get("demoService_url"))}}}),t["default"]=n}),define("my-journey/initializers/export-application-global",["ember","my-journey/config/environment","exports"],function(e,t,n){"use strict";function s(e,t){var n=r.String.classify(a.modulePrefix);a.exportApplicationGlobal&&!window[n]&&(window[n]=t)}var r=e["default"],a=t["default"];n.initialize=s,n["default"]={name:"export-application-global",initialize:s}}),define("my-journey/router",["ember","my-journey/config/environment","exports"],function(e,t,n){"use strict";var s,r=e["default"],a=t["default"];s=r.Router.extend({location:a.locationType}),s.map(function(){return this.route("mystory"),this.resource("research",function(){return this.resource("research.software",{path:"/software"},function(){return this.route("mdsd"),this.route("dsl")}),this.resource("research.analytics",{path:"/analytics"},function(){return this.route("algotrading"),this.route("infovis")}),this.route("robotics")}),this.resource("projects",function(){return this.route("friesianhorse"),this.route("hackneyhorse"),this.route("norfolktrotter"),this.route("markhor"),this.route("nutcracker"),this.route("hornet"),this.route("manucode")})}),n["default"]=s}),define("my-journey/routes/index",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({redirect:function(){return this.transitionTo("mystory")}}),t["default"]=n}),define("my-journey/routes/mystory",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/projects",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t=[s.Object.create({title:"Friesian Horse - 2015",linkTo:"projects.friesianhorse"}),s.Object.create({title:"Hackney Horse - 2015",linkTo:"projects.hackneyhorse"}),s.Object.create({title:"Norfolk Trotter - 2015",linkTo:"projects.norfolktrotter"}),s.Object.create({title:"Markhor - 2014",linkTo:"projects.markhor"}),s.Object.create({title:"Nutcracker/Rooks - 2012",linkTo:"projects.nutcracker"}),s.Object.create({title:"Hornet - 2012",linkTo:"projects.hornet"}),s.Object.create({title:"Manucode/SnailShell - 2011",linkTo:"projects.manucode"})],e.set("tabs",t)},afterModel:function(){return this.transitionTo("projects.friesianhorse")}}),t["default"]=n}),define("my-journey/routes/projects/friesianhorse",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t="http://knshetty.github.io/ebook-searcher-app/",s.$.get(t).done(function(){return console.log("FriesianHorse-SPA Available"),e.set("demo",!0),e.set("demoSPA_url",t)}).fail(function(){return console.log("FriesianHorse-Service Not Available!"),e.set("demo",!1)})}}),t["default"]=n}),define("my-journey/routes/projects/hackneyhorse",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t="http://88.114.108.176:4201",s.$.get(t).done(function(){return console.log("HackneyHorse-Service Available"),e.set("demo",!0),e.set("demoService_url",t)}).fail(function(){return console.log("HackneyHorse-Service Not Available!"),e.set("demo",!1)})}}),t["default"]=n}),define("my-journey/routes/projects/hornet",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/projects/manucode",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/projects/markhor",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/projects/norfolktrotter",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t="http://88.114.108.176:1337/city",s.$.get(t).done(function(){return console.log("NorfolkTrotter-Service Available"),e.set("demo",!0),e.set("demoService_url",t)}).fail(function(){return console.log("NorfolkTrotter-Service Not Available!"),e.set("demo",!1)})}}),t["default"]=n}),define("my-journey/routes/projects/nutcracker",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/research",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t=[s.Object.create({title:"Big Data / Analytics",linkTo:"research.analytics"}),s.Object.create({title:"Software Engineering",linkTo:"research.software"}),s.Object.create({title:"Robotics",linkTo:"research.robotics"})],e.set("tabs",t)},afterModel:function(){return this.transitionTo("research.analytics")}}),t["default"]=n}),define("my-journey/routes/research/analytics",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t=[s.Object.create({title:"Algorithmic Trading",linkTo:"research.analytics.algotrading"}),s.Object.create({title:"Information Visualisation",linkTo:"research.analytics.infovis"})],e.set("tabs",t)},afterModel:function(){return this.transitionTo("research.analytics.algotrading")}}),t["default"]=n}),define("my-journey/routes/research/analytics/algotrading",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/research/analytics/infovis",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/research/robotics",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/research/software",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend({setupController:function(e){var t;return t=[s.Object.create({title:"MDSD",linkTo:"research.software.mdsd"}),s.Object.create({title:"DSL",linkTo:"research.software.dsl"})],e.set("tabs",t)},afterModel:function(){return this.transitionTo("research.software.mdsd")}}),t["default"]=n}),define("my-journey/routes/research/software/dsl",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/routes/research/software/mdsd",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.Route.extend(),t["default"]=n}),define("my-journey/templates/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){function o(e,t){t.buffer.push('\n              <a class="navbar-brand">\n                <span class="glyphicon glyphicon-record"></span>\n                Reflection\n              </a>\n          ')}function i(e,t){var n="";return t.buffer.push("\n              <a "),t.buffer.push(b(s["bind-attr"].call(e,{hash:{href:"#mystory"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:t}))),t.buffer.push('>\n                <span class="glyphicon glyphicon-user"></span>\n                My Story\n              </a>\n            '),n}function u(e,t){var n="";return t.buffer.push("\n              <a "),t.buffer.push(b(s["bind-attr"].call(e,{hash:{href:"#research"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:t}))),t.buffer.push('>\n                <span class="glyphicon glyphicon-eye-open"></span>\n                Research Interests\n              </a>\n            '),n}function l(e,t){var n="";return t.buffer.push("\n              <a "),t.buffer.push(b(s["bind-attr"].call(e,{hash:{href:"#projects"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:t}))),t.buffer.push('>\n                <span class="glyphicon glyphicon-bookmark"></span>\n                Projects\n              </a>\n            '),n}function c(e,t){var n="";return t.buffer.push("\n                <a "),t.buffer.push(b(s.action.call(e,"showmodal",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push('>\n                  <span class="glyphicon glyphicon-info-sign"></span>\n                  About\n                </a>\n              '),n}function h(e,t){var n,r="";return t.buffer.push('\n\n				<div class="row">\n					<div class="col-sm-5 col-md-5">\n						<div class="thumbnail">\n							<div align=center>\n								<strong>Technology Stack</strong>\n							</div>\n							'),n=s._triageMustache.call(e,"tech-stack-physics",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push('\n				    </div>\n					</div>\n\n					<div class="col-sm-7 col-md-7">\n				    	<div class="thumbnail">\n					      	<h1>Reflection App</h1>\n							<p>\n								This wep-app is a slide show concering one\'s life journey and interests. This Single-Page Application (SPA) is designed and developed by <a href="http://knshetty.weebly.com/">Nirdharsh</a>.\n\n								<br>\n								<br>\n								<strong>Version</strong>\n\n								<br>\n								&nbsp; 0.1\n\n								<br>\n								<br>\n								<strong>License</strong>\n\n								<br>\n								&nbsp; &nbsp;3-clause New BSD License.\n\n								<br>\n								<br>\n								<strong>Copyright</strong>\n\n								<br>\n								&nbsp; &nbsp;&copy; 2015 Nirdharsh Shetty\n							</p>\n				    	</div>\n					</div>\n				</div>\n		    '),r}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var f,d,p,m="",b=this.escapeExpression,y=this,v=s.helperMissing;return a.buffer.push('<div class="container">\n  <div class="row clearfix">\n    <div class="col-md-12 column">\n      <nav class="navbar navbar-inverse" role="navigation">\n\n        <div class="navbar-header">\n           <button type="button"\n                   class="navbar-toggle"\n                   data-toggle="collapse"\n                   data-target="#bs-example-navbar-collapse-1">\n              <span class="sr-only">Toggle navigation</span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n           </button>\n\n           '),d=s["link-to"]||t&&t["link-to"],p={hash:{},hashTypes:{},hashContexts:{},inverse:y.noop,fn:y.program(1,o,a),contexts:[t],types:["STRING"],data:a},f=d?d.call(t,"mystory",p):v.call(t,"link-to","mystory",p),(f||0===f)&&a.buffer.push(f),a.buffer.push('\n        </div>\n\n        <div class="collapse navbar-collapse"\n             id="bs-example-navbar-collapse-1"\n             navbar-selection-main ng-cloak>\n\n          <ul class="nav navbar-nav">\n\n            '),d=s["link-to"]||t&&t["link-to"],p={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:t,href:t},inverse:y.noop,fn:y.program(3,i,a),contexts:[t],types:["STRING"],data:a},f=d?d.call(t,"mystory",p):v.call(t,"link-to","mystory",p),(f||0===f)&&a.buffer.push(f),a.buffer.push("\n\n            "),d=s["link-to"]||t&&t["link-to"],p={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:t,href:t},inverse:y.noop,fn:y.program(5,u,a),contexts:[t],types:["STRING"],data:a},f=d?d.call(t,"research",p):v.call(t,"link-to","research",p),(f||0===f)&&a.buffer.push(f),a.buffer.push("\n\n            "),d=s["link-to"]||t&&t["link-to"],p={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:t,href:t},inverse:y.noop,fn:y.program(7,l,a),contexts:[t],types:["STRING"],data:a},f=d?d.call(t,"projects",p):v.call(t,"link-to","projects",p),(f||0===f)&&a.buffer.push(f),a.buffer.push('\n\n          </ul>\n\n          <ul class="nav navbar-nav navbar-right">\n			         '),d=s["link-to"]||t&&t["link-to"],p={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:t,href:t},inverse:y.noop,fn:y.program(9,c,a),contexts:[t],types:["STRING"],data:a},f=d?d.call(t,"",p):v.call(t,"link-to","",p),(f||0===f)&&a.buffer.push(f),a.buffer.push("\n\n            "),d=s["bs-modal"]||t&&t["bs-modal"],p={hash:{name:"aboutModal",fade:!0,footerButtonsBinding:"aboutModalButtons",title:"About"},hashTypes:{name:"STRING",fade:"BOOLEAN",footerButtonsBinding:"STRING",title:"STRING"},hashContexts:{name:t,fade:t,footerButtonsBinding:t,title:t},inverse:y.noop,fn:y.program(11,h,a),contexts:[],types:[],data:a},f=d?d.call(t,p):v.call(t,"bs-modal",p),(f||0===f)&&a.buffer.push(f),a.buffer.push("\n\n		  </ul>\n\n        </div>\n\n      </nav>\n    </div>\n  </div>\n\n  "),f=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(f||0===f)&&a.buffer.push(f),a.buffer.push("\n\n</div>\n"),m})}),define("my-journey/templates/components/friesianhorse-architecture",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{},a.buffer.push('<svg id="friesianhorse-arch-svg" \n	width="100%"\n	height="100%"\n	viewBox="0 0 993 745"\n	preserveAspectRatio="xMaxYmax">\n</svg>\n')})}),define("my-journey/templates/components/hackneyhorse-architecture",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{},a.buffer.push('<svg id="hackneyhorse-arch-svg" \n	width="100%"\n	height="100%"\n	viewBox="0 0 993 745"\n	preserveAspectRatio="xMaxYmax">\n</svg>\n')})}),define("my-journey/templates/components/markhor-architecture",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{},a.buffer.push('<svg id="markhor-arch-svg" \n	width="100%"\n	height="100%"\n	viewBox="0 0 950 650"\n	preserveAspectRatio="xMaxYmax">\n</svg>\n\n')})}),define("my-journey/templates/components/norfolktrotter-architecture",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{},a.buffer.push('<svg id="norfolktrotter-arch-svg" \n	width="100%"\n	height="100%"\n	viewBox="0 0 835 420"\n	preserveAspectRatio="xMaxYmax">\n</svg>\n\n')})}),define("my-journey/templates/components/nutcracker-rooks-architecture",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{},a.buffer.push('<svg id="nutcracker-rooks-arch-svg" \n	width="100%"\n	height="100%"\n	viewBox="0 0 835 660"\n	preserveAspectRatio="xMaxYmax">\n</svg>\n\n')})}),define("my-journey/templates/components/tech-stack-physics",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{},a.buffer.push('<div id="techstack-physics"></div>\n')})}),define("my-journey/templates/index",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/mystory",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){function o(e,t){t.buffer.push('\n  <iframe class="slideshow"\n          src="http://knshetty.github.io/ItsMyStory"\n          frameborder="0"\n          style="overflow: hidden; height: 100%; width: 80%; position: absolute;"\n          height="100%"\n          width="80%">\n  </iframe>\n')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var i,u="",l=this;return i=s.view.call(t,"Itsmystoryslides",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,a),contexts:[t],types:["ID"],data:a}),(i||0===i)&&a.buffer.push(i),a.buffer.push("\n\n"),i=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(i||0===i)&&a.buffer.push(i),a.buffer.push("\n"),u})}),define("my-journey/templates/projects",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i,u,l="",c=s.helperMissing,h=this.escapeExpression;return a.buffer.push(h((i=s["bs-tabs"]||t&&t["bs-tabs"],u={hash:{contentBinding:"tabs"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:t},contexts:[],types:[],data:a},i?i.call(t,u):c.call(t,"bs-tabs",u)))),a.buffer.push("\n\n"),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),l})}),define("my-journey/templates/projects/friesianhorse",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){function o(e,t){var n,r,a,o="";return t.buffer.push('\n				<div class="col-md-1">\n					<br>\n					'),r=s["bs-button"]||e&&e["bs-button"],a={hash:{type:"link",icon:"glyphicon glyphicon-play-circle",clicked:"fire_demo"},hashTypes:{type:"STRING",icon:"STRING",clicked:"STRING"},hashContexts:{type:e,icon:e,clicked:e},inverse:c.noop,fn:c.program(2,i,t),contexts:[],types:[],data:t},n=r?r.call(e,a):h.call(e,"bs-button",a),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n				</div>\n			"),o}function i(e,t){t.buffer.push("\n						Demo\n					")}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var u,l="",c=this,h=s.helperMissing;return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<div class="row">\n			<div class="col-md-11">\n				<h1>Visual DSL Tool - Client Side</h1>\n			</div>\n\n			'),u=s["if"].call(t,"demo",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,o,a),contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push('\n		</div>\n	</div>\n\n	<div class="panel-body">\n		'),u=s._triageMustache.call(t,"friesianhorse-architecture",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push("\n	</div>\n</div>\n\n"),u=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push("\n"),l})}),define("my-journey/templates/projects/hackneyhorse",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){function o(e,t){var n,r,a,o="";return t.buffer.push('\n				<div class="col-md-1">\n					<br>\n					'),r=s["bs-button"]||e&&e["bs-button"],a={hash:{type:"link",icon:"glyphicon glyphicon-play-circle",clicked:"fire_demo"},hashTypes:{type:"STRING",icon:"STRING",clicked:"STRING"},hashContexts:{type:e,icon:e,clicked:e},inverse:c.noop,fn:c.program(2,i,t),contexts:[],types:[],data:t},n=r?r.call(e,a):h.call(e,"bs-button",a),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n				</div>\n			"),o}function i(e,t){t.buffer.push("\n					")}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var u,l="",c=this,h=s.helperMissing;return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<div class="row">\n			<div class="col-md-11">\n				<h1>Dashboard - Client Side</h1>\n			</div>\n			\n			'),u=s["if"].call(t,"demo",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,o,a),contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push('\n		</div>\n	</div>\n	\n	<div class="panel-body">\n		'),u=s._triageMustache.call(t,"hackneyhorse-architecture",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push("\n	</div>\n</div>\n\n"),u=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push("\n"),l})}),define("my-journey/templates/projects/hornet",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<h1>Batch Analytics Toolchain</h1>\n	</div>\n	\n	<div class="panel-body">\n		<img class="fadeIn fadeIn-1s"\n			 src="/Reflection/assets/images/hornet_architecture.svg"\n			 alt="Hornet"\n			 height="89%" width="89%">\n	</div>\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/projects/manucode",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<h1>Event-Flow Browser Toolchain - Client/Server Sides</h1>\n	</div>\n	\n	<div class="panel-body">\n		<img class="fadeIn fadeIn-1s"\n			 src="/Reflection/assets/images/manucode_snailshell_architecture.svg"\n			 alt="Manucode/Snailshell"\n			 height="85%" width="85%">\n	</div>\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/projects/markhor",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<h1>Extract-Transform-Load Process - Server Side</h1>\n	</div>\n	\n	<div class="panel-body">\n		'),o=s._triageMustache.call(t,"markhor-architecture",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n	</div>\n</div>\n\n"),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/projects/norfolktrotter",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){function o(e,t){var n,r,a,o="";return t.buffer.push('\n				<div class="col-md-1">\n					<br>\n					'),r=s["bs-button"]||e&&e["bs-button"],a={hash:{type:"link",icon:"glyphicon glyphicon-play-circle",clicked:"fire_demo"},hashTypes:{type:"STRING",icon:"STRING",clicked:"STRING"},hashContexts:{type:e,icon:e,clicked:e},inverse:c.noop,fn:c.program(2,i,t),contexts:[],types:[],data:t},n=r?r.call(e,a):h.call(e,"bs-button",a),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n				</div>\n			"),o}function i(e,t){t.buffer.push("\n					")}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var u,l="",c=this,h=s.helperMissing;return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<div class="row">\n			<div class="col-md-11">\n				<h1>Dashboard - RESTful Server Side</h1>\n			</div>\n			\n			'),u=s["if"].call(t,"demo",{hash:{},hashTypes:{},hashContexts:{},inverse:c.noop,fn:c.program(1,o,a),contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push('\n		</div>\n	</div>\n	\n	<div class="panel-body">\n		'),u=s._triageMustache.call(t,"norfolktrotter-architecture",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push("\n	</div>\n</div>\n\n"),u=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(u||0===u)&&a.buffer.push(u),a.buffer.push("\n"),l})}),define("my-journey/templates/projects/nutcracker",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="panel panel-info">\n	<div class="panel-heading">\n		<h1>Event-Driven Dashboard - Client/Server Sides</h1>\n	</div>\n	\n	<div class="panel-body">\n		'),o=s._triageMustache.call(t,"nutcracker-rooks-architecture",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n	</div>\n</div>\n\n"),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i
})}),define("my-journey/templates/research",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i,u,l="",c=s.helperMissing,h=this.escapeExpression;return a.buffer.push(h((i=s["bs-tabs"]||t&&t["bs-tabs"],u={hash:{contentBinding:"tabs"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:t},contexts:[],types:[],data:a},i?i.call(t,u):c.call(t,"bs-tabs",u)))),a.buffer.push("\n\n"),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),l})}),define("my-journey/templates/research/analytics",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i,u,l="",c=s.helperMissing,h=this.escapeExpression;return a.buffer.push(h((i=s["bs-pills"]||t&&t["bs-pills"],u={hash:{contentBinding:"tabs"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:t},contexts:[],types:[],data:a},i?i.call(t,u):c.call(t,"bs-pills",u)))),a.buffer.push("\n\n"),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),l})}),define("my-journey/templates/research/analytics/algotrading",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="jumbotron">\n  <img class="fadeIn fadeIn-1s"\n	   src="/Reflection/assets/images/algo-a99712ea3ae5b5a10a577aeb06ede12f.png"\n       alt="Algo-Trading"\n       height="100%" width="100%">\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/research/analytics/infovis",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="jumbotron">\n  <img class="fadeIn fadeIn-1s"\n	   src="/Reflection/assets/images/infovis-a04aa0c90215c2528fc3ec712b6e6fdf.png"\n       alt="Infovis"\n       height="100%" width="100%">\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/research/robotics",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="jumbotron">\n  <img class="fadeIn fadeIn-1s"\n	   src="/Reflection/assets/images/robotics-7fef2407f9b6bf9ba2f32c574b32be52.png"\n       alt="Autonomous Robotics"\n       height="100%" width="100%">\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/research/software",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i,u,l="",c=s.helperMissing,h=this.escapeExpression;return a.buffer.push(h((i=s["bs-pills"]||t&&t["bs-pills"],u={hash:{contentBinding:"tabs"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:t},contexts:[],types:[],data:a},i?i.call(t,u):c.call(t,"bs-pills",u)))),a.buffer.push("\n    \n"),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),l})}),define("my-journey/templates/research/software/dsl",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="jumbotron">\n  <img class="fadeIn fadeIn-1s"\n	   src="/Reflection/assets/images/dsl-0beb15f8f3139167bf89308b5b967a4d.png"\n       alt="Visual Programming"\n       height="100%" width="100%">\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/templates/research/software/mdsd",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,r,a){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),a=a||{};var o,i="";return a.buffer.push('<div class="jumbotron">\n  <img class="fadeIn fadeIn-1s"\n	   src="/Reflection/assets/images/mdsd-60959914453fd09d5d53ca19c74d8618.png"\n       alt="Domain Engineering"\n       height="100%" width="100%">\n</div>\n\n'),o=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n"),i})}),define("my-journey/views/itsmystoryslides",["ember","exports"],function(e,t){"use strict";var n,s=e["default"];n=s.View.extend({didInsertElement:function(){return this.$(".slideshow").focus()}}),t["default"]=n}),define("my-journey/config/environment",["ember"],function(e){var t="my-journey";try{var n=t+"/config/environment",s=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(s));return{"default":r}}catch(a){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("my-journey/tests/test-helper"):require("my-journey/app")["default"].create({});