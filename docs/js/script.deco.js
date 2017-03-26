!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("./ns"),ub=c(bb),tb=b("../module/Point"),cb=c(tb),hb=b("../module/Line"),ib=c(hb),bu=b("./util"),uu=function(){function b(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),this.initialize(u)}return i(b,[{key:"initialize",value:function(){var b=this,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.arrow=document.createElementNS("http://www.w3.org/2000/svg","g"),this.$elm=$(this.arrow),this.lineElm=document.createElementNS("http://www.w3.org/2000/svg","line"),this.arrowHeadElm=document.createElementNS("http://www.w3.org/2000/svg","path"),this.arrowHeadElm.setAttribute("class","arrow-head"),this.arrowHeadElm.setAttribute("d","M2 0 L-16 8 L-10 0 L-16 -8 L2 0  Z"),this.startPt=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.endPt=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.startPt.setAttribute("class","start-pt"),this.endPt.setAttribute("class","end-pt"),this.$container=$(".container"),ub["default"].ctrlField.append(this.arrow),this.line=u.line||new ib["default"]({start:new cb["default"]({x:0,y:0}),end:new cb["default"]({x:1,y:0})}),this.$container.one("mousedown",function(u){b.touchDownHandler(u)})}},{key:"replace",value:function(){var b=(0,bu.px)(this.line.start),u=(0,bu.px)(this.line.end);this.setStartLine(b),this.setEndLine(u),this.setStartPtAttr(b),this.setEndPtAttr(u),this.setArrowHead()}},{key:"touchDownHandler",value:function(b){var u=this,t=b.pageX,c=b.pageY,h=new cb["default"]({x:t,y:c}),i=(0,bu.unit)(h);ub["default"].snapFlag&&(i=ub["default"].grid.nn(new cb["default"]({x:i.x,y:i.y}))),this.setStartPt(i),this.$container.on("mousemove",function(b){u.touchMoveHandler(b)}),this.$container.one("mouseup",function(b){u.touchUpHandler(b)}),$(this.startPt).on("mousedown",function(b){$(u.startPt).on("mouseup",function(b){u.$container.off("mousemove"),u.$container.trigger("replot-fractal",12)}),u.$container.on("mousemove",function(b){u.startMoveHandler(b)})}),$(this.endPt).on("mousedown",function(b){u.$container.on("mouseup",function(b){u.$container.off("mousemove"),u.$container.trigger("replot-fractal",12)}),u.$container.on("mousemove",function(b){u.endMoveHandler(b)})})}},{key:"touchMoveHandler",value:function(b){var u=b.pageX,t=b.pageY,c=new cb["default"]({x:u,y:t}),h=(0,bu.unit)(c);ub["default"].snapFlag&&(h=ub["default"].grid.nn(new cb["default"]({x:h.x,y:h.y})),c=(0,bu.px)(h)),this.setArrowHead(),this.line.end=h,this.setEndLine(c)}},{key:"touchUpHandler",value:function(b){var u=b.pageX,t=b.pageY,c=new cb["default"]({x:u,y:t}),h=(0,bu.unit)(c);ub["default"].snapFlag&&(h=ub["default"].grid.nn(new cb["default"]({x:h.x,y:h.y})),c=(0,bu.px)(h)),this.$container.off("mousemove"),this.setEndPt(h),this.$container.trigger("set-line")}},{key:"startMoveHandler",value:function(b){var u=b.pageX,t=b.pageY,c=new cb["default"]({x:u,y:t}),h=(0,bu.unit)(c);ub["default"].snapFlag&&(h=ub["default"].grid.nn(new cb["default"]({x:h.x,y:h.y})),c=(0,bu.px)(h)),this.line.start=h,this.setStartLine(c),this.setStartPtAttr(c),this.setArrowHead(),this.$container.trigger("replot-fractal",8)}},{key:"endMoveHandler",value:function(b){var u=b.pageX,t=b.pageY,c=new cb["default"]({x:u,y:t}),h=(0,bu.unit)(c);ub["default"].snapFlag&&(h=ub["default"].grid.nn(new cb["default"]({x:h.x,y:h.y})),c=(0,bu.px)(h)),this.line.end=h,this.setEndLine(c),this.setEndPtAttr(c),this.setArrowHead(),this.$container.trigger("replot-fractal",8)}},{key:"setStartPt",value:function(b){var u=(0,bu.px)(b);this.line.start=b,this.setStartLine(u),this.setEndLine(u),this.arrow.append(this.lineElm),this.setStartPtAttr(u),this.setEndPtAttr(u),this.setArrowHead(),this.arrowHeadElm.setAttribute("visibility","hidden"),this.arrow.append(this.arrowHeadElm),this.arrow.append(this.startPt)}},{key:"setEndPt",value:function(b){var u=(0,bu.px)(b);this.line.end.x=b.x,this.line.end.y=b.y,this.setEndLine(u),this.setEndPtAttr(u),this.setArrowHead(),this.arrowHeadElm.setAttribute("visibility","visible"),this.arrow.append(this.endPt)}},{key:"setStartPtAttr",value:function(b){this.startPt.setAttribute("cx",b.x),this.startPt.setAttribute("cy",b.y)}},{key:"setEndPtAttr",value:function(b){this.endPt.setAttribute("cx",b.x),this.endPt.setAttribute("cy",b.y)}},{key:"setArrowHead",value:function(){var b=(0,bu.px)(this.line.end),u=180*-this.line.arg()/Math.PI;this.arrowHeadElm.setAttribute("transform","rotate("+u+", "+b.x+", "+b.y+") translate("+b.x+" "+b.y+")")}},{key:"setStartLine",value:function(b){this.lineElm.setAttribute("x1",b.x),this.lineElm.setAttribute("y1",b.y)}},{key:"setEndLine",value:function(b){this.lineElm.setAttribute("x2",b.x),this.lineElm.setAttribute("y2",b.y)}}]),b}();t["default"]=uu},{"../module/Line":3,"../module/Point":5,"./ns":7,"./util":9}],2:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("./ns"),ub=c(bb),tb=b("./Point"),cb=c(tb),hb=b("./Line"),ib=c(hb),bu=b("./util"),uu=function(){function b(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),this.initialize(u)}return i(b,[{key:"initialize",value:function(b){this.canvas=b.canvas,this.ctx=this.canvas.getContext("2d"),this.type=b.type,this.interval=b.interval||1,this.setSize()}},{key:"setSize",value:function(){if(this.minX=Math.floor(ub["default"].cornerUnit[0].x),this.minY=-Math.ceil(ub["default"].cornerUnit[0].y),this.maxX=Math.ceil(ub["default"].cornerUnit[1].x),this.maxY=-Math.floor(ub["default"].cornerUnit[1].y),this.lineArr=[],this.pointArr=[],this.axisArr=[],"square"===this.type){for(var b=this.minY;b<=this.maxY;b+=this.interval)this.lineArr.push(new ib["default"]({start:new cb["default"]({x:this.minX,y:b}),end:new cb["default"]({x:this.maxX,y:b})}));for(var u=this.minX;u<=this.maxX;u+=this.interval)this.lineArr.push(new ib["default"]({start:new cb["default"]({x:u,y:this.minY}),end:new cb["default"]({x:u,y:this.maxY})}));for(var t=this.minY;t<this.maxY;t+=this.interval)for(var c=this.minX;c<this.maxX;c+=this.interval)this.pointArr.push(new cb["default"]({x:c,y:t}));this.axisArr.push(new ib["default"]({start:new cb["default"]({x:0,y:this.minY}),end:new cb["default"]({x:0,y:this.maxY})})),this.axisArr.push(new ib["default"]({start:new cb["default"]({x:this.minX,y:0}),end:new cb["default"]({x:this.maxX,y:0})}))}}},{key:"plot",value:function(){var b=this;this.lineArr.forEach(function(u){var t=(0,bu.px)(u.start),c=(0,bu.px)(u.end);b.ctx.beginPath(),b.ctx.moveTo(t.x,t.y),b.ctx.lineTo(c.x,c.y),b.ctx.strokeStyle="#ccc",b.ctx.stroke()}),this.axisArr.forEach(function(u){var t=(0,bu.px)(u.start),c=(0,bu.px)(u.end);b.ctx.beginPath(),b.ctx.moveTo(t.x,t.y),b.ctx.lineTo(c.x,c.y),b.ctx.strokeStyle="#000",b.ctx.stroke()})}},{key:"nn",value:function(b){var u=1/0,t=void 0;return this.pointArr.forEach(function(c){var h=(0,bu.sub)(b,c).abs();u>h&&(t=c,u=h)}),t}}]),b}();t["default"]=uu},{"./Line":3,"./Point":5,"./ns":7,"./util":9}],3:[function(b,u,t){"use strict";function c(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),i=b("./util"),bb=function(){function b(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,b),this.type="line",this.start=u.start||u[0],this.end=u.end||u[1]}return h(b,[{key:"width",value:function(){return(0,i.sub)(this.end,this.start).x}},{key:"height",value:function(){return(0,i.sub)(this.end,this.start).y}},{key:"abs",value:function(){return(0,i.sub)(this.end,this.start).abs()}},{key:"arg",value:function(){return(0,i.sub)(this.end,this.start).arg()}},{key:"start",get:function(){return this[0]},set:function(b){this[0]=b}},{key:"end",get:function(){return this[1]},set:function(b){this[1]=b}}]),b}();t["default"]=bb},{"./util":9}],4:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("./Router"),ub=c(bb),tb=function(){function b(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),console.log("Hello, world!"),this.initialize(),console.log("Thanks, world!")}return i(b,[{key:"initialize",value:function(){var b=this;$(function(){b.router=new ub["default"]})}}]),b}();t["default"]=tb},{"./Router":6}],5:[function(b,u,t){"use strict";function c(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),i=function(){function b(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,b),this.type="point",this.x=u.x||u[0]||0,this.y=u.y||u[1]||0}return h(b,[{key:"abs",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"arg",value:function(){return Math.atan2(this.y,this.x)}},{key:"x",get:function(){return this[0]},set:function(b){this[0]=b}},{key:"y",get:function(){return this[1]},set:function(b){this[1]=b}}]),b}();t["default"]=i},{}],6:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("./ns"),ub=(c(bb),b("../page/Common")),tb=c(ub),cb=b("../page/Index"),hb=c(cb),ib=function(){function b(){h(this,b),this.initialize()}return i(b,[{key:"initialize",value:function(){var b=$("body");this.pageCommon=new tb["default"],b.hasClass("page-index")&&(this.pageIndex=new hb["default"])}}]),b}();t["default"]=ib},{"../page/Common":10,"../page/Index":11,"./ns":7}],7:[function(b,u,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.App=window.App||{};var c=window.App;t["default"]=c},{}],8:[function(b,u,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c={ccurve:{name:"C曲線",generator:[[0,0,.5,.5],[.5,.5,1,0]]},dragon:{name:"ドラゴン曲線",generator:[[0,0,.5,.5],[1,0,.5,.5]]},koch:{name:"コッホ曲線",generator:[[0,0,1/3,0],[1/3,0,.5,Math.sqrt(3)/6],[.5,Math.sqrt(3)/6,2/3,0],[2/3,0,1,0]]},sierpinskiCarpet:{name:"シェルピンスキーのカーペット",generator:[[0,0,1/3,0],[1/3,0,2/3,0],[2/3,0,1,0],[0,1/3,1/3,1/3],[2/3,1/3,1,1/3],[0,2/3,1/3,2/3],[1/3,2/3,2/3,2/3],[2/3,2/3,1,2/3]]},sierpinskiGasket:{name:"シェルピンスキーのギャスケット",generator:[[0,0,.5,0],[.5,0,1,0],[.25,Math.sqrt(3)/4,.75,Math.sqrt(3)/4]]},cantorDust:{name:"カントールの塵集合",generator:[[0,0,1/3,0],[2/3,0,1,0],[0,2/3,1/3,2/3],[2/3,2/3,1,2/3]]},minkowskiSausage:{name:"ミンコフスキーのソーセージ",generator:[[0,0,.25,0],[.25,0,.25,.25],[.25,.25,.5,.25],[.5,.25,.5,0],[.5,0,.5,-1/4],[.5,-1/4,.75,-1/4],[.75,-1/4,.75,0],[.75,0,1,0]]}};t["default"]=c},{}],9:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){return new bu["default"]({x:b.x+u.x,y:b.y+u.y})}function i(b,u){return new bu["default"]({x:b.x-u.x,y:b.y-u.y})}function bb(b,u){return new bu["default"]({x:b.x*u.x-b.y*u.y,y:b.x*u.y+b.y*u.x})}function ub(b){return new bu["default"]({x:200*b.x+hb["default"].width/2,y:200*-b.y+hb["default"].height/2})}function tb(b){return new bu["default"]({x:(b.x-hb["default"].width/2)/200,y:-(b.y-hb["default"].height/2)/200})}Object.defineProperty(t,"__esModule",{value:!0}),t.plus=h,t.sub=i,t.mult=bb,t.px=ub,t.unit=tb;var cb=b("./ns"),hb=c(cb),ib=b("./Point"),bu=c(ib)},{"./Point":5,"./ns":7}],10:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("../module/ns"),ub=c(bb),tb=function(){function b(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),this.initialize()}return i(b,[{key:"initialize",value:function(){console.log("page common"),this.setEnvClass()}},{key:"setEnvClass",value:function(){var b=$("html");ub["default"].isSp=!1,ub["default"].isPc=!1,ub["default"].isTab=!1,b.hasClass("is-sp")&&(ub["default"].isSp=!0),b.hasClass("is-pc")&&(ub["default"].isPc=!0),b.hasClass("is-tab")&&(ub["default"].isTab=!0)}}]),b}();t["default"]=tb},{"../module/ns":7}],11:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}function h(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=b("../module/ns"),ub=c(bb),tb=b("../module/Point"),cb=c(tb),hb=b("../module/Line"),ib=c(hb),bu=b("../module/Grid"),uu=c(bu),tu=b("../module/Generator"),cu=c(tu),hu=b("../module/preset-list"),iu=c(hu),bt=b("../module/util"),ut=1e4,tt=12,ct=8,ht=function(){function b(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,b),this.initialize()}return i(b,[{key:"initialize",value:function(){var b=this;this.$container=$(".container"),this.canvas=document.querySelector(".elm-canvas"),this.circleImg=new Image,this.circleImg.src="img/circle.png",this.lineImg=new Image,this.lineImg.src="img/line.svg",this.squareImg=new Image,this.squareImg.src="img/square.png",ub["default"].ctrlField=document.querySelector(".ctrl-field"),$(window).on("resize",function(){b.setSize(),b.plot(ct),ub["default"].grid.setSize(),ub["default"].gArr.forEach(function(b){b.replace()})}),this.setSize(),this.$container.append(ub["default"].ctrlField),this.ctx=this.canvas.getContext("2d"),ub["default"].grid=new uu["default"]({type:"square",interval:.25,canvas:this.canvas}),ub["default"].grid.plot();var u=$('[data-js-class~="snap"]');u.on("change",function(){ub["default"].snapFlag=u.prop("checked")}).trigger("change"),ub["default"].gArr=[],$(".btn-add-generator").on("click",function(b){ub["default"].currentGenerator=new cu["default"],ub["default"].gArr.push(ub["default"].currentGenerator)}),$(".btn-edit").on("click",function(b){}),this.$container.on("set-line",function(){b.plot(tt)}),this.$container.on("replot-fractal",function(u,t){b.plot(t)});var t=($('[data-js-class~="preset"]'),$('[data-js-class~="preset__list"]')),c=$('[data-js-class~="preset__input"]');$('[data-js-class~="preset__list"]').on("click","li",function(b){var u=$(b.target).attr("data-value"),t=$(b.target).text();$(b.target).parents(".mdl-select").addClass("is-dirty").children("input").val(t),c.trigger("change",{key:u,name:t})}),c.on("change",function(u){function t(b){var u=[];return b.forEach(function(b){u.push(new cu["default"]({line:new ib["default"]({start:new cb["default"]({x:b[0],y:b[1]}),end:new cb["default"]({x:b[2],y:b[3]})})}))}),u}var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=c.name||$(u.target).val(),i=_.findKey(iu["default"],function(b){return b.name===h});""!==i&&(ub["default"].ctrlField.innerHTML="",ub["default"].gArr=t(iu["default"][i].generator),ub["default"].gArr.forEach(function(b){b.setStartPt(b.line.start),b.setEndPt(b.line.end)}),b.plot(tt))}),Object.keys(iu["default"]).forEach(function(b){var u=iu["default"][b];t.append('<li class="mdl-menu__item" data-value="'+b+'">'+u.name+"</li>")})}},{key:"setSize",value:function(){ub["default"].width=$(window).width(),ub["default"].height=$(window).height(),this.canvas.width=ub["default"].width,this.canvas.height=ub["default"].height,$(ub["default"].ctrlField).attr("width",ub["default"].width),$(ub["default"].ctrlField).attr("height",ub["default"].height),$(ub["default"].ctrlField).attr("viewBox","0 0 256 256"),ub["default"].cornerPx=[new cb["default"]({x:0,y:0}),new cb["default"]({x:ub["default"].width,y:ub["default"].height})],ub["default"].cornerUnit=[(0,bt.unit)(ub["default"].cornerPx[0]),(0,bt.unit)(ub["default"].cornerPx[1])]}},{key:"plot",value:function(){var b=this,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Math.floor(Math.log(ut)/Math.log(ub["default"].gArr.length));u=Math.min(u,t),this.ctx.clearRect(0,0,ub["default"].width,ub["default"].height),ub["default"].grid.plot();for(var c=[new ib["default"]({start:new cb["default"]({x:0,y:0}),end:new cb["default"]({x:1,y:0})})],h=0;u>h;h++)c=this.iterate(c);var i=c;i.forEach(function(u){var t=(0,bt.px)({x:u.start.x,y:u.start.y});b.ctx.fillRect(t.x,t.y,1,1)})}},{key:"iterate",value:function(b){var u=this,t=[];return b.forEach(function(b){var c=u.ifs(b);t=t.concat(c)}),t}},{key:"ifs",value:function(b){var u=[];return ub["default"].gArr.forEach(function(t){var c=new ib["default"]({start:(0,bt.plus)((0,bt.mult)((0,bt.sub)(t.line.end,t.line.start),b.start),t.line.start),end:(0,bt.plus)((0,bt.mult)((0,bt.sub)(t.line.end,t.line.start),b.end),t.line.start)});u.push(c)}),u}}]),b}();t["default"]=ht},{"../module/Generator":1,"../module/Grid":2,"../module/Line":3,"../module/Point":5,"../module/ns":7,"../module/preset-list":8,"../module/util":9}],12:[function(b,u,t){"use strict";function c(b){return b&&b.__esModule?b:{"default":b}}var h=b("./module/ns"),i=c(h),bb=b("./module/Main"),ub=c(bb);i["default"].main=new ub["default"]},{"./module/Main":4,"./module/ns":7}]},{},[12]);