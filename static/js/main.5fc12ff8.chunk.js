(this["webpackJsonpfeature-lint-editor"]=this["webpackJsonpfeature-lint-editor"]||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t);var i,r,o=n(1),u=n.n(o),c=n(15),a=n.n(c),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),i(e),r(e),o(e),u(e)}))},s=n(9),d=n(13),f=n(10),b=n(11),g=n.n(b),h=n(12),p=n(7),j=n.n(p),x=n(3),y=n(5),O=n(17),v=function(e){return"BuildingBlockFigure"===(null===e||void 0===e?void 0:e.type)},w={x:x.c().positive(),y:x.c().positive(),width:x.c().positive(),height:x.c().positive(),resizing:x.a()},B=function(e,t,n){return Object(y.a)(Object(y.a)({},n),{},{x:e,y:t})},k=function(e,t){return v(t)?Object(y.a)(Object(y.a)({},t),{},{resizing:e}):"FeatureTypeFigure"===(null===(n=t)||void 0===n?void 0:n.type)?Object(y.a)(Object(y.a)({},t),{},{resizing:e}):t;var n},F=function(e,t,n){return Object(y.a)(Object(y.a)({},n),{},{width:e,height:t})},m="urn:building-block-figure:",T=j()("BuildingBlockFigureId",x.e().refine((function(e){return e.startsWith(m)}))),C=T.create,E=j()("BuildingBlockFigure",x.d({id:T,bbName:x.e(),type:x.b("BuildingBlockFigure")}).extend(w)),S=E.create,L=j()("RuleTool",x.d({type:x.b("PLACE_RULE"),from:E.nullable(),to:E.nullable()})),R=L.create,I=j()("Visual-Selection",x.d({type:x.b("SELECTION")})),D=j()("Visual-BB",x.d({type:x.b("PLACE_BUILDING_BLOCK")})),N=j()("Visual-Feature",x.d({type:x.b("PLACE_FEATURE")})),z=j()("Tool",x.f([I,D,N,L])),P=(D.create,I.create,z.create),A=f.a.button(i||(i=Object(s.a)(["\n  padding: 8px;\n  font-size: 12px;\n  outline: none;\n  border: 0;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  background: ",";\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n"])),(function(e){return e.active?"#f6f6f6":"transparent"}),(function(e){return e.active?"#f6f6f6":"#ececec"})),U=n(2),_=1.1,M=function(e){var t=e.tool,n=e.selectTool;return Object(U.jsxs)(G,{children:[Object(U.jsxs)(A,{active:"SELECTION"===t.currentTool.type,onClick:function(){return n(P({type:"SELECTION"}))},children:[Object(U.jsx)(g.a,{path:h.c,size:_,color:"grey"}),"Select"]}),Object(U.jsxs)(A,{active:"PLACE_FEATURE"===t.currentTool.type,onClick:function(){return n(P({type:"PLACE_FEATURE"}))},children:[Object(U.jsx)(g.a,{path:h.d,size:_,color:"grey"}),"Feature"]}),Object(U.jsxs)(A,{active:"PLACE_BUILDING_BLOCK"===t.currentTool.type,onClick:function(){return n(P({type:"PLACE_BUILDING_BLOCK"}))},children:[Object(U.jsx)(g.a,{path:h.e,size:_,color:"grey"}),"Building Block"]}),Object(U.jsxs)(A,{active:"PLACE_RULE"===t.currentTool.type,onClick:function(){return n(P({type:"PLACE_RULE",from:null,to:null}))},children:[Object(U.jsx)(g.a,{path:h.f,size:_,color:"grey"}),"Allow Import"]})]})},G=f.a.div(r||(r=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: centeR;\n  justify-content: flex-start;\n  left: 8px;\n  top: 30%;\n  position: absolute;\n  width: 64px;\n  background: white;\n  z-index: 99999;\n  border-radius: 5px;\n\n  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n"]))),X=n(6),Y=n(8);var K,q,W,J,H,V,$,Q=j()("RuleGhost",x.d({endX:x.c(),endY:x.c()})).create,Z=function(e){var t,n=null===(t=e.target.getStage())||void 0===t?void 0:t.getPointerPosition();return(null===n||void 0===n?void 0:n.x)&&n.y?n:{x:0,y:0}},ee=function(e){var t=e.target.position();if((null===t||void 0===t?void 0:t.x)&&t.y)return t;throw new Error("No element pos possible")},te=n(19),ne=function(e){var t=e.figure,n=e.updateFigure,i=e.onSelect,r=Object(o.useState)(!1),u=Object(Y.a)(r,2),c=u[0],a=u[1],l=Object(o.useState)({}),s=Object(Y.a)(l,2),d=s[0],f=s[1],b=Object(o.useRef)(),p=t.height,j=t.width,x=o.useRef(),O=o.useRef(),v=t.resizing;return o.useEffect((function(){v&&(O.current.nodes([x.current]),O.current.getLayer().batchDraw())}),[v]),Object(U.jsxs)(U.Fragment,{children:[t.resizing&&Object(U.jsx)(X.g,{rotateEnabled:!1,ref:O,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}}),Object(U.jsxs)(X.b,{draggable:!0,onDragMove:function(e){var i=ee(e);n.updatePosition(t,i.x,i.y)},children:[c?Object(U.jsx)(te.a,{children:Object(U.jsx)("textarea",{onKeyDown:function(e){if(13===e.keyCode){a(!1),console.log("END FEAT TRANS");var i=x.current,r=i.scaleX(),o=i.scaleY();i.scaleX(1),i.scaleY(1),n.updateShape(t,Math.max(5,i.width()*r),Math.max(i.height()*o))}},onChange:function(e){n.updateFeatureTypeName(t,e.target.value)},ref:function(e){return null===e||void 0===e?void 0:e.focus()},style:Object(y.a)(Object(y.a)({background:"red",position:"absolute"},d),{},{height:p+"px"}),children:t.name})}):null,Object(U.jsx)(X.f,{ref:b,preventDefault:!0,listening:!1,fill:"black",wrap:"none",align:"center",verticalAlign:"middle",width:200,height:50,text:t.name,x:t.x,y:t.y,fontSize:20}),Object(U.jsx)(X.d,{onDblClick:function(e){a(!c);var t=b.current.getAbsolutePosition(),n=e.currentTarget.getStage().container().getBoundingClientRect(),i=n.left+t.x,r=n.top+t.y;f({top:r+"px",left:i+"px",width:j+"px"})},onTransformEnd:function(){console.log("END FEAT TRANS");var e=x.current,i=e.scaleX(),r=e.scaleY();e.scaleX(1),e.scaleY(1),n.updateShape(t,Math.max(5,e.width()*i),Math.max(e.height()*r))},ref:x,draggable:!0,onClick:function(){return i(t,"BLOCK")},x:t.x,y:t.y,height:p,width:j,strokeWidth:5,stroke:"black"})]}),Object(U.jsx)(te.a,{groupProps:{x:t.x+t.width-42,y:t.y,fill:"red",width:42,height:42},children:Object(U.jsx)("div",{style:{width:42,height:42,padding:"8px",boxSizing:"border-box"},onClick:function(){return i(t,"ICON")},children:Object(U.jsx)(g.a,{path:h.a,size:1.2})})})]})},ie=function(e){var t=e.figure,n=e.onSelect,i=e.updateFigure,r=Object(o.useState)(!1),u=Object(Y.a)(r,2),c=u[0],a=u[1],l=Object(o.useState)({}),s=Object(Y.a)(l,2),d=s[0],f=s[1],b=Object(o.useRef)(),p=t.width,j=t.height,x=j/20,O=c?"green":"red",v=o.useRef(),w=o.useRef(),B=t.resizing;return o.useEffect((function(){B&&(w.current.nodes([v.current]),w.current.getLayer().batchDraw())}),[B]),Object(U.jsxs)(U.Fragment,{children:[t.resizing&&Object(U.jsx)(X.g,{rotateEnabled:!1,ref:w,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}}),Object(U.jsxs)(X.b,{draggable:!0,onDragEnd:function(e){var n=ee(e);i.updatePosition(t,n.x,n.y)},onDragMove:function(e){var n=ee(e);i.updatePosition(t,n.x,n.y)},onClick:function(e){n(t,"BLOCK")},children:[c?Object(U.jsx)(te.a,{children:Object(U.jsx)("textarea",{onKeyDown:function(e){if(13===e.keyCode){a(!1),console.log("ENTER");var n=v.current,r=n.scaleX(),o=n.scaleY();n.scaleX(1),n.scaleY(1),i.updateShape(t,Math.max(5,n.width()*r),Math.max(n.height()*o))}},onChange:function(e){i.updateBuildingBlockName(t,e.target.value)},ref:function(e){return null===e||void 0===e?void 0:e.focus()},style:Object(y.a)(Object(y.a)({background:"red",position:"absolute"},d),{},{height:j+"px"}),children:t.bbName})}):null,Object(U.jsx)(X.d,{onDblClick:function(e){a(!c);var t=b.current.getAbsolutePosition(),n=e.currentTarget.getStage().container().getBoundingClientRect(),i=n.left+t.x,r=n.top+t.y;f({top:r+"px",left:i+"px",width:p+"px"})},onTransformEnd:function(){console.log("END");var e=v.current,n=e.scaleX(),r=e.scaleY();e.scaleX(1),e.scaleY(1),i.updateShape(t,Math.max(5,e.width()*n),Math.max(e.height()*r))},ref:v,draggable:!0,x:t.x,y:t.y,width:p,height:j,stroke:O}),Object(U.jsx)(X.f,{preventDefault:!0,ref:b,listening:!1,fill:O,wrap:"none",align:"center",verticalAlign:"middle",width:p,height:j,text:t.bbName,x:t.x,y:t.y+x/2,fontSize:20})]}),Object(U.jsx)(te.a,{groupProps:{x:t.x+t.width-42,y:t.y,fill:"red",width:42,height:42},children:Object(U.jsx)("div",{style:{width:42,height:42,padding:"8px",boxSizing:"border-box"},onClick:function(){return n(t,"ICON")},children:Object(U.jsx)(g.a,{path:h.a,size:1.2})})})]})},re="urn:feature-type:",oe=j()("FeatureTypeFigureId",x.e().refine((function(e){return e.startsWith(re)}))),ue=oe.create,ce=j()("FeatureTypeFigure",x.d({id:oe,name:x.e(),type:x.b("FeatureTypeFigure")}).extend(w)).create,ae=function(e,t,n,i){var r=e,o=e+t,u=e+t/2,c=n,a=n+i/2;return Math.abs(u-a)<t?u:c>o?o:r},le=function(e,t){return ae(e.x,e.width,t.x,t.width)},se=function(e,t,n,i){var r=e,o=e+t,u=e+t/2,c=n+i,a=n-i/2;return Math.abs(u-a)<t?u:c<r?r:o},de=function(e,t){return se(e.y,e.height,t.y,t.height)},fe=function(e){var t=e.queryBuildingBlocks,n=e.rule,i=e.select,r=t.buildingBlockById(C(n.from)),o=t.buildingBlockById(C(n.to)),u=le(r,o),c=de(r,o),a=le(o,r),l=de(o,r);return o&&r?Object(U.jsx)(X.a,{onClick:function(){return i(n,"ICON")},points:[u,c,a,l],stroke:"red",strokeWidth:5}):null},be=function(e){var t=e.toolState,n=e.ruleTool,i=ae(n.from.x,n.from.width,t.ruleGhost.endX,0),r=se(n.from.y,n.from.height,t.ruleGhost.endY,0);return Object(U.jsx)(X.a,{listening:!1,points:[i,r,t.ruleGhost.endX,t.ruleGhost.endY],strokeWidth:2,stroke:"red"})},ge=function(e){var t,n=e.figures,i=e.tool,r=e.updateFigure,u=e.onSelectFigure,c=e.queryBuildingBlocks,a=function(){var e=Object(o.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(Y.a)(e,2),n=t[0],i=t[1];return Object(o.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),l=i.currentTool;return Object(U.jsx)(pe,{children:Object(U.jsxs)(X.e,{height:a.height,width:a.width,onMouseMove:function(e){var t=Z(e);i.setRuleGhost((function(e){return Q({endX:t.x,endY:t.y})}))},onClick:function(t){var n=Z(t);he(e,{x:n.x,y:n.y})},children:[Object(U.jsx)(X.c,{children:Object(U.jsx)(X.d,{listening:!1,x:0,y:0,width:a.width,height:a.height,fill:"#fbfbfb"})}),Object(U.jsxs)(X.c,{children:[n.featureTypeFigures.map((function(e){return Object(U.jsx)(ne,{onSelect:u,figure:e,updateFigure:r},e.id)})),n.buildingBlockFigures.map((function(e){return Object(U.jsx)(ie,{updateFigure:r,figure:e,onSelect:u},e.id)})),(t=l,"PLACE_RULE"===t.type&&null!==t.from&&i.ruleGhost?Object(U.jsx)(be,{ruleTool:l,toolState:i}):null),n.rules.map((function(e){return Object(U.jsx)(fe,{select:u,queryBuildingBlocks:c,rule:e},e.id)}))]})]})})},he=function(e,t){var n=e.tool,i=e.placeFeature,r=e.placeBuildingBlock;switch(n.currentTool.type){case"PLACE_FEATURE":i(ce({name:"unnamed-feature",id:ue(re+Object(O.a)()),height:500,width:500,x:t.x,y:t.y,type:"FeatureTypeFigure",resizing:!1}));break;case"PLACE_BUILDING_BLOCK":r(t.x,t.y)}},pe=f.a.div(K||(K=Object(s.a)(["\n  cursor: crosshair;\n"]))),je="urn:dependency-rule:",xe=j()("DependencyRuleFigureId",x.e().refine((function(e){return e.startsWith(je)}))),ye=(xe.create,j()("DependencyRuleFigure",x.d({type:x.b("DependencyRuleFigure"),id:xe,from:T,to:T})).create),Oe=function(e){var t=e.figure,n=e.onClose;return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:t.bbName}),t.id,Object(U.jsx)("button",{onClick:n,children:"Close"})]})},ve=function(e){var t=e.figureId,n=e.query,i=e.onClose,r=n.figureById(t);return r?Object(U.jsxs)(Be,{children:[Object(U.jsx)(we,{children:Object(U.jsx)("h2",{children:"Details"})}),function(){switch(r.type){case"BuildingBlockFigure":return Object(U.jsx)(Oe,{figure:r,onClose:i});case"FeatureTypeFigure":return Object(U.jsxs)("div",{children:["Hello",Object(U.jsx)("button",{onClick:i,children:"Close"})]});case"DependencyRuleFigure":return Object(U.jsxs)("div",{children:["Dep Figure ",Object(U.jsx)("button",{onClick:i,children:"Close"})]})}}()]}):null},we=f.a.div(q||(q=Object(s.a)(["\n  padding: 8px;\n"]))),Be=f.a.div(W||(W=Object(s.a)(["\n  display: flex;\n  background: red;\n  flex-direction: column;\n  align-items: flex-star;\n  justify-content: flex-start;\n  right: 0;\n  top: 0;\n  height: 100%;\n  position: absolute;\n  width: 400px;\n  background: white;\n  z-index: 99999;\n  border-radius: 5px;\n\n  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n"]))),ke=n(4),Fe=n(18),me=function(e){return{top:e.y,bottom:e.y+e.height,left:e.x,right:e.x+e.width}},Te=f.a.div(J||(J=Object(s.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: 999999999999999999;\n"]))),Ce=f.a.div(H||(H=Object(s.a)(["\n  width: 500px;\n  height: 500px;\n  background: white;\n"]))),Ee=function(e){return a.a.createPortal(Object(U.jsx)(Te,{children:Object(U.jsx)(Ce,{children:e.children})}),document.getElementById("portal"))},Se=function(e){var t=e.text,n=e.close;return Object(U.jsx)(Ee,{children:Object(U.jsxs)("div",{style:{padding:"8px",height:"100%",display:"flex",flexDirection:"column"},children:[Object(U.jsx)("div",{children:Object(U.jsx)("h2",{children:"Configuration export"})}),Object(U.jsx)("div",{style:{width:"100%",height:"100%",border:"1px solid black",overflow:"scroll"},contentEditable:!0,children:t}),Object(U.jsx)("button",{onClick:function(){return n()},children:" Close"})]})})},Le=function(e){var t=e.convertToJson,n=Object(o.useState)(""),i=Object(Y.a)(n,2),r=i[0],u=i[1];return Object(U.jsxs)(Re,{children:[r?Object(U.jsx)(Se,{text:r,close:function(){return u("")}}):null,Object(U.jsxs)(A,{active:!1,onClick:function(){u(JSON.stringify(t()))},children:[Object(U.jsx)(g.a,{path:h.b,size:1.1,color:"grey"}),"Save"]})]})},Re=f.a.div(V||(V=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0 auto;\n  left: 50%;\n  top: 0;\n  position: absolute;\n  height: 64px;\n  min-width: 200px;\n  background: white;\n  z-index: 99999;\n  border-radius: 5px;\n\n  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;\n"]))),Ie=n(51),De=function(e){var t=e.onBuildingBlocks,n=e.buildingBlocks,i=e.onFeatureTypes,r=e.featureTypes,o=n(),u=r(),c=Ne(o),a=ze(u);return{updateFeatureTypeName:function(e,t){var n=a(ue(e.id)),r=Ie.a(n,(function(e){return function(e,t){return ce(Object(y.a)(Object(y.a)({},t),{},{name:e}))}(t,e)}),u);return i(r),r},updateBuildingBlockName:function(e,n){var i=c(C(e.id)),r=Ie.a(i,(function(e){return S(function(e,t){return Object(y.a)(Object(y.a)({},t),{},{bbName:e})}(n,e))}),o);return t(r),r},updateShape:function(e,n,r){switch(e.type){case"BuildingBlockFigure":var l=c(C(e.id)),s=Ie.a(l,(function(e){return k(!1,F(n,r,e))}),o);t(s);break;case"DependencyRuleFigure":break;case"FeatureTypeFigure":var d=a(ue(e.id));i(Ie.a(d,(function(e){return k(!1,F(n,r,e))}),u))}},resizing:function(e,n){switch(n.type){case"BuildingBlockFigure":var r=c(C(n.id)),l=Ie.a(r,(function(t){return k(e,t)}),o);t(l);break;case"DependencyRuleFigure":break;case"FeatureTypeFigure":var s=a(ue(n.id)),d=Ie.a(s,(function(t){return k(e,t)}),u);i(d)}},updatePosition:function(e,n,r){switch(e.type){case"FeatureTypeFigure":var l=a(ue(e.id));i(Ie.a(l,(function(e){return B(n,r,e)}),u));break;case"DependencyRuleFigure":break;case"BuildingBlockFigure":var s=c(C(e.id)),d=Ie.a(s,(function(e){return B(n,r,e)}),o);t(d)}}}},Ne=function(e){return function(t){var n=e.findIndex((function(e){return e.id===t}));if(-1!==n)return n;throw new Error("Cannot find bb")}},ze=function(e){return function(t){var n=e.findIndex((function(e){return e.id===t}));if(-1!==n)return n;throw new Error("Cannot find bb")}},Pe=function(e){var t,n,i,r=function(){var e=Object(o.useState)([]),t=Object(Y.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)([]),u=Object(Y.a)(r,2),c=u[0],a=u[1],l=Object(o.useState)([]),s=Object(Y.a)(l,2);return{featureTypeFigures:n,setFeatureTypeFigures:i,buildingBlockFigures:c,setBuildingBlockFigures:a,rules:s[0],setRules:s[1]}}(),u=function(){var e=Object(o.useState)(P({type:"SELECTION"})),t=Object(Y.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(null),u=Object(Y.a)(r,2),c=u[0],a=u[1],l=Object(o.useState)(null),s=Object(Y.a)(l,2);return{currentTool:n,setCurrentTool:i,ruleGhost:c,setRuleGhost:a,details:s[0],setDetails:s[1]}}(),c=function(e){var t=e.onBuildingBlocksUpdated,n=e.buildingBlocks;return function(e,i){var r=S({id:T.create(m+Object(O.a)()),type:"BuildingBlockFigure",width:150,height:75,x:e,y:i,bbName:"unamed",resizing:!1}),o=[].concat(Object(d.a)(n()),[r]);t(o)}}({onBuildingBlocksUpdated:function(e){r.setBuildingBlockFigures(e),u.setCurrentTool(P({type:"SELECTION"}))},buildingBlocks:function(){return r.buildingBlockFigures}}),a=function(e){var t=e.onRules,n=e.buildingBlocks,i=e.rules;return function(e,r){var o=n().find((function(t){return t.id===e.id})),u=n().find((function(e){return e.id===r.id}));if(o&&u)if(-1===i().findIndex((function(t){return t.from===e.id&&t.to===r.id}))){var c=[].concat(Object(d.a)(i()),[ye({type:"DependencyRuleFigure",id:je+Object(O.a)(),from:o.id,to:u.id})]);t(c)}else console.log("Rule does exist already")}}({onRules:function(e){return r.setRules(e)},buildingBlocks:function(){return r.buildingBlockFigures},rules:function(){return r.rules}}),l=function(e){var t=e.tool,n=e.onDetails;return function(){"SELECTION"===t().type&&n(null)}}({tool:function(){return u.currentTool},onDetails:function(e){return u.setDetails((null===e||void 0===e?void 0:e.id)||null)}}),s=De({onBuildingBlocks:r.setBuildingBlockFigures,featureTypes:function(){return r.featureTypeFigures},buildingBlocks:function(){return r.buildingBlockFigures},onFeatureTypes:r.setFeatureTypeFigures}),f=function(e){var t=e.onToolUpdated,n=e.placeDependencyRule,i=e.tool,r=e.onSelectedFigure,o=e.onSpawnTransform;return function(e,u){var c=i();if("SELECTION"===c.type&&"BLOCK"===u&&null!==e)o(e);else if("SELECTION"!==c.type||"BLOCK"===u){if("PLACE_RULE"===c.type){if(null===R(c).from&&null!==e&&v(e)){var a=P(Object(y.a)(Object(y.a)({},c),{},{from:e}));t(a)}else{if(null===c.from||null===e||!v(e))throw new Error("Invalid state. Second Place Rule does only work on Valid BBs, but was placed on "+JSON.stringify(e));n(S(c.from),e),t(P({type:"SELECTION"}))}}}else r(e)}}({onToolUpdated:function(e){return u.setCurrentTool(e)},onSelectedFigure:function(e){return u.setDetails((null===e||void 0===e?void 0:e.id)||null)},placeDependencyRule:a,tool:function(){return u.currentTool},onSpawnTransform:function(e){return s.resizing(!0,e)}}),b=(t=r.buildingBlockFigures,n=r.featureTypeFigures,i=r.rules,{figureById:function(e){var r=t.find((function(t){return t.id===e}));if(r)return r;var o=n.find((function(t){return t.id===e}));return o||i.find((function(t){return t.id===e}))||null},buildingBlockById:function(e){var n=t.find((function(t){return t.id===e}));if(!n)throw new Error("Did not found BB with id "+e+" but is expected in state");return n}}),g=function(e){var t=e.dependencyRules,n=e.buildingBlocks,i=e.featureTypes,r=e.query;return function(){console.log("HELLO"),console.log("Found ",t());var e,o,u,c={},a=Object(Fe.a)(i());try{for(a.s();!(e=a.n()).done;){var l=e.value,s=me(l);c[l.name]={};var f,b=Object(Fe.a)(n());try{for(b.s();!(f=b.n()).done;){var g=f.value;if(o=me(g),!((u=s).left>o.right||u.right<o.left||u.top>o.bottom||u.bottom<o.top)){var h,p=[],j=Object(Fe.a)(t());try{for(j.s();!(h=j.n()).done;){var x=h.value,O=r.figureById(C(x.from)),w=r.figureById(C(x.to));if((null===O||void 0===O?void 0:O.id)===g.id){if(!O||!w)throw new Error("Trying to create a dep rule from "+O+" to "+w+" but one of them is null");v(w)&&(p=[].concat(Object(d.a)(p),["@"+w.bbName]))}}}catch(B){j.e(B)}finally{j.f()}c[l.name]=Object(y.a)(Object(y.a)({},c[l.name]),{},Object(ke.a)({},g.bbName,{rules:[{name:"dependencies",criteria:p}]}))}}}catch(B){b.e(B)}finally{b.f()}}}catch(B){a.e(B)}finally{a.f()}return{$schema:"https://raw.githubusercontent.com/feature-lint/feature-lint/pages/schema/feature-lint-v0.0.15.schema.json",rootDir:"./src/features",featureTypes:c}}}({query:b,buildingBlocks:function(){return r.buildingBlockFigures},dependencyRules:function(){return r.rules},featureTypes:function(){return r.featureTypeFigures}});return Object(U.jsxs)(Ae,{children:[Object(U.jsx)(Le,{convertToJson:g}),Object(U.jsx)(M,{tool:u,selectTool:function(e){return u.setCurrentTool(e)}}),Object(U.jsx)(ge,{updateFigure:s,queryBuildingBlocks:b,placeFeature:function(e){r.setFeatureTypeFigures((function(t){return[].concat(Object(d.a)(t),[e])})),u.setCurrentTool(P({type:"SELECTION"}))},placeBuildingBlock:c,onSelectFigure:f,tool:u,figures:r}),u.details?Object(U.jsx)(ve,{query:b,onClose:l,figureId:u.details}):null]})},Ae=f.a.div($||($=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n"]))),Ue=function(e){return Object(U.jsx)(Pe,{})};a.a.render(Object(U.jsx)(u.a.StrictMode,{children:Object(U.jsx)(Ue,{})}),document.getElementById("root")),l()}},[[49,1,2]]]);
//# sourceMappingURL=main.5fc12ff8.chunk.js.map