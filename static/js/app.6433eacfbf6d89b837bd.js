webpackJsonp([1],{"2Qdc":function(e,t){},"4/hK":function(e,t){},"5ckH":function(e,t){},DqTn:function(e,t){},Mk5N:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i={name:"App",mounted:function(){var e,t;e=document,(t=e.createElement("script")).type="text/javascript",t.async=!0,t.onload=function(){},t.src="https://togetherjs.com/togetherjs-min.js",e.getElementsByTagName("head")[0].appendChild(t)}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(i,s,!1,function(e){n("w53R")},null,null).exports,a=n("/ocq"),r=n("woOf"),l=n.n(r),u=n("E5Az"),p=n.n(u),d={autoCloseBrackets:!0,tabSize:2,theme:"material",lineNumbers:!0,smartIndent:!0,lineWrapping:!0,matchBrackets:!0,viewportMargin:1/0,ctrl_z:"undo",ctrl_y:"redo",ctrl_bracket:"highlight-brackets",toggleComment:!0,extraKeys:{"Ctrl-Space":"autocomplete","Cmd-/":"toggleComment","Ctrl-/":"toggleComment"}},m={props:["source","expandSourceType"],components:{codemirror:u.codemirror},data:function(){return{localSource:"",options:l()({},d,{mode:"text/javascript",autofocus:!0})}},watch:{source:function(e){this.localSource=e}},methods:{onSourceChange:function(e){this.$emit("onChange",e)}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor",attrs:{id:"editor-js"}},[n("header",[n("span",{staticClass:"title"},[e._v("JavaScript")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"js"!==e.expandSourceType,expression:"expandSourceType !== 'js'"}],staticClass:"icon right icon-maximize-2",on:{click:function(t){e.$emit("onExpandClicked","js")}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"js"===e.expandSourceType,expression:"expandSourceType === 'js'"}],staticClass:"icon right icon-minimize-2",on:{click:function(t){e.$emit("onShrinkClicked")}}})]),e._v(" "),n("codemirror",{attrs:{options:e.options},on:{input:e.onSourceChange},model:{value:e.localSource,callback:function(t){e.localSource=t},expression:"localSource"}})],1)},staticRenderFns:[]};var v=n("VU/8")(m,h,!1,function(e){n("zX0l")},"data-v-29c23354",null).exports,C={props:["source","expandSourceType"],components:{codemirror:u.codemirror},data:function(){return{localSource:"",options:l()({},d,{mode:"text/html",matchTags:{bothTags:!0},htmlMode:!0})}},watch:{source:function(e){this.localSource=e}},methods:{onSourceChange:function(e){this.$emit("onChange",e)}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor",attrs:{id:"editor-html"}},[n("header",[n("span",{staticClass:"title"},[e._v("HTML")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"html"!==e.expandSourceType,expression:"expandSourceType !== 'html'"}],staticClass:"icon right icon-maximize-2",on:{click:function(t){e.$emit("onExpandClicked","html")}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"html"===e.expandSourceType,expression:"expandSourceType === 'html'"}],staticClass:"icon right icon-minimize-2",on:{click:function(t){e.$emit("onShrinkClicked")}}})]),e._v(" "),n("codemirror",{attrs:{options:e.options},on:{input:e.onSourceChange},model:{value:e.localSource,callback:function(t){e.localSource=t},expression:"localSource"}})],1)},staticRenderFns:[]};var f=n("VU/8")(C,S,!1,function(e){n("5ckH")},"data-v-91fa0c2e",null).exports,x={props:["source","expandSourceType"],components:{codemirror:u.codemirror},data:function(){return{localSource:"",options:l()({},d,{mode:"text/css",htmlMode:!0})}},watch:{source:function(e){this.localSource=e}},methods:{onSourceChange:function(e){this.$emit("onChange",e)}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor",attrs:{id:"editor-css"}},[n("header",[n("span",{staticClass:"title"},[e._v("CSS")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"css"!==e.expandSourceType,expression:"expandSourceType !== 'css'"}],staticClass:"icon right icon-maximize-2",on:{click:function(t){e.$emit("onExpandClicked","css")}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"css"===e.expandSourceType,expression:"expandSourceType === 'css'"}],staticClass:"icon right icon-minimize-2",on:{click:function(t){e.$emit("onShrinkClicked")}}})]),e._v(" "),n("codemirror",{attrs:{options:e.options},on:{input:e.onSourceChange},model:{value:e.localSource,callback:function(t){e.localSource=t},expression:"localSource"}})],1)},staticRenderFns:[]};var g=n("VU/8")(x,k,!1,function(e){n("mxFR")},"data-v-8047643a",null).exports,_=new o.a,T={props:["css","js","html","expandSourceType"],mounted:function(){this.iframeContainer=document.getElementById("iframe-container")},created:function(){var e=this;_.$on("run",function(t){e.write()})},methods:{write:function(){this.iframeContainer.innerHTML='<iframe id="iframe-output"></iframe>',this.source="",this.source+="<style>"+(this.css||"")+"</style>",this.source+=this.html||"",this.source+="<script>"+(this.js||"")+"<\/script>";var e=document.getElementById("iframe-output").contentWindow;e.document.open(),e.document.write(this.source),e.document.close()}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor output",attrs:{id:"editor-output"}},[n("header",[n("span",{directives:[{name:"show",rawName:"v-show",value:"output"!==e.expandSourceType,expression:"expandSourceType !== 'output'"}],staticClass:"right icon-maximize-2",on:{click:function(t){e.$emit("onExpandClicked","output")}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"output"===e.expandSourceType,expression:"expandSourceType === 'output'"}],staticClass:"right icon-minimize-2",on:{click:function(t){e.$emit("onShrinkClicked")}}})]),e._v(" "),n("div",{attrs:{id:"iframe-container"}})])},staticRenderFns:[]};var w=n("VU/8")(T,y,!1,function(e){n("DqTn")},null,null).exports,E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[e._m(0),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:""!==e.sourceType,expression:"sourceType !== ''"}],staticClass:"links-source"},[n("li",{class:{active:"js"===e.sourceType},on:{click:function(t){e.$emit("onSourceTypeChange","js")}}},[e._v("JS")]),e._v(" "),n("li",{class:{active:"css"===e.sourceType},on:{click:function(t){e.$emit("onSourceTypeChange","css")}}},[e._v("CSS")]),e._v(" "),n("li",{class:{active:"html"===e.sourceType},on:{click:function(t){e.$emit("onSourceTypeChange","html")}}},[e._v("HTML")]),e._v(" "),n("li",{class:{active:"output"===e.sourceType},on:{click:function(t){e.$emit("onSourceTypeChange","output")}}},[e._v("Result")])]),e._v(" "),n("ul",{staticClass:"links"},[n("li",{on:{click:function(t){e.$emit("onRunClicked")}}},[n("span",{staticClass:"icon icon-play"}),e._v(" "),n("span",{staticClass:"text"},[e._v("Run")])]),e._v(" "),e._m(1),e._v(" "),e._m(2)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"title"},[t("b",[this._v("</>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{attrs:{onclick:"TogetherJS(this); return false;"}},[t("span",{staticClass:"icon icon-user-plus"}),this._v(" "),t("span",{staticClass:"text"},[this._v("Collaborate")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"https://github.com/jsitor/jsitor",target:"_blank"}},[t("span",{staticClass:"icon icon-star"}),this._v(" "),t("span",{staticClass:"text"},[this._v("Github")])])])}]};var $=n("VU/8")({props:["sourceType"]},E,!1,function(e){n("wAR6")},"data-v-1de7d58a",null).exports,j=(n("puAj"),n("5IAE"),n("ezqs"),n("8Nur"),n("aX1R"),n("vq+x"),n("TQy8"),n("DpZM"),n("Z6qg"),n("jQeI"),n("7HfX"),n("7pxA"),n("Mixr"),n("oXYg"),n("PsxY"),n("epNC"),"js"),z="css",R="html",N={components:{JavascriptEditorComponent:v,HTMLEditorComponent:f,CSSEditorComponent:g,OutputEditorComponent:w,NavComponent:$},data:function(){return{js:"",html:"",css:"",expandSourceType:"",autoRun:!1}},mounted:function(){this.js=localStorage.getItem(j),this.css=localStorage.getItem(z),this.html=localStorage.getItem(R)},methods:{onRunClicked:function(){_.$emit("run")},onChangeJavascript:function(e){this.js=e,localStorage.setItem(j,this.js)},onChangeHTML:function(e){this.html=e,localStorage.setItem(R,this.html)},onChangeCSS:function(e){this.css=e,localStorage.setItem(z,this.css)},onExpandClicked:function(e){this.expandSourceType=e},onShrinkClicked:function(){this.expandSourceType=""}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editors"},[n("NavComponent",{attrs:{sourceType:e.expandSourceType},on:{onSourceTypeChange:e.onExpandClicked,onRunClicked:e.onRunClicked}}),e._v(" "),n("div",{staticClass:"editors-content",class:e.expandSourceType},[n("Split",{ref:"split1",attrs:{gutterSize:2},on:{onDragEnd:e.onDragEnd}},[n("SplitArea",{attrs:{size:50}},[n("Split",{attrs:{gutterSize:2,direction:"vertical"}},[n("SplitArea",{attrs:{size:50,minSize:150}},[n("HTMLEditorComponent",{attrs:{expandSourceType:e.expandSourceType,source:e.html},on:{onChange:e.onChangeHTML,onExpandClicked:e.onExpandClicked,onShrinkClicked:e.onShrinkClicked}})],1),e._v(" "),n("SplitArea",{attrs:{size:50,minSize:150}},[n("CSSEditorComponent",{attrs:{expandSourceType:e.expandSourceType,source:e.css},on:{onChange:e.onChangeCSS,onExpandClicked:e.onExpandClicked,onShrinkClicked:e.onShrinkClicked}})],1)],1)],1),e._v(" "),n("SplitArea",{attrs:{size:50}},[n("Split",{attrs:{gutterSize:2,direction:"vertical"}},[n("SplitArea",{attrs:{size:50,minSize:150}},[n("JavascriptEditorComponent",{attrs:{expandSourceType:e.expandSourceType,source:e.js},on:{onChange:e.onChangeJavascript,onExpandClicked:e.onExpandClicked,onShrinkClicked:e.onShrinkClicked}})],1),e._v(" "),n("SplitArea",{attrs:{size:50,minSize:150}},[n("OutputEditorComponent",{attrs:{js:e.js,css:e.css,html:e.html,expandSourceType:e.expandSourceType},on:{onExpandClicked:e.onExpandClicked,onShrinkClicked:e.onShrinkClicked}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var A={components:{EditorsComponent:n("VU/8")(N,b,!1,function(e){n("Mk5N")},null,null).exports}},M={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("EditorsComponent")],1)},staticRenderFns:[]};var H=n("VU/8")(A,M,!1,function(e){n("2Qdc")},"data-v-51f20b03",null).exports;o.a.use(a.a);var I=new a.a({routes:[{path:"/",name:"main",component:H}]}),F=n("HcO+"),J=n.n(F);n("4/hK");o.a.use(p.a),o.a.use(J.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:I,components:{App:c},template:"<App/>"})},PsxY:function(e,t){},epNC:function(e,t){},mxFR:function(e,t){},w53R:function(e,t){},wAR6:function(e,t){},zX0l:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6433eacfbf6d89b837bd.js.map