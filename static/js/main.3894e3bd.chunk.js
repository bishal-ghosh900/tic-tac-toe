(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(16),s=c.n(n),a=(c(21),c(22),c(14)),i=c(3),l=c(4),o=c(6),j=c(5),b=c(2),p=c(1),d=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Not Found"})}}]),c}(r.Component),h=d,u=c(13),O=c(12),x=c(8),f=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.index,c=e.draw,r=e.playerA,n=e.playerB,s=e.circleOrCross;return Object(p.jsx)("div",{className:"players",children:c[t]?Object(p.jsx)("p",{children:"Draw"}):r[t]||n[t]?r[t]&&!n[t]?Object(p.jsx)("p",{children:"PlayerA wins"}):Object(p.jsx)("p",{children:"PlayerB wins"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"PlayerA(X)"}),s[t]?Object(p.jsx)("p",{children:"B"}):Object(p.jsx)("p",{children:"A"}),Object(p.jsx)("p",{children:"PlayerB(O)"})]})})}}]),c}(r.Component),v=f,y=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.boxState,c=e.index,r=e.handleClick;return Object(p.jsx)("div",{className:"tictactoe",children:t[c].map((function(e){return Object(p.jsx)("div",{name:e.box,onClick:r,className:"box ".concat(e.box),children:e.innerText},e.box)}))})}}]),c}(r.Component),C=y,k=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"util",children:[Object(p.jsx)("button",{className:"btn",onClick:function(){return e.props.handlePrev()},rel:"noopener noreferrer",children:Object(p.jsx)("i",{className:"fas fa-arrow-alt-circle-left"})}),Object(p.jsx)("button",{onClick:function(){return e.props.handleReset()},className:"btn",rel:"noopener noreferrer",children:Object(p.jsx)("i",{className:"fas fa-redo"})}),Object(p.jsx)("button",{onClick:function(){return e.props.prevClicked?e.props.handleNext():""},className:"btn",rel:"noopener noreferrer",children:Object(p.jsx)("i",{className:"fas fa-arrow-alt-circle-right"})})]})}}]),c}(r.Component),m=k,g=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.index,c=e.draw,r=e.playerA,n=e.playerB,s=e.circleOrCross,a=e.boxState,i=e.prevClicked,l=e.handleClick,o=e.handleReset,j=e.handlePrev,b=e.handleNext;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{index:t,draw:c,playerA:r,playerB:n,circleOrCross:s}),Object(p.jsx)(m,{prevClicked:i,handleReset:o,handlePrev:j,handleNext:b}),Object(p.jsx)(C,{boxState:a,index:t,handleClick:l})]})}}]),c}(r.Component),w=g,N=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var r;return Object(i.a)(this,c),(r=t.call(this,e)).handleReset=function(){for(var e=Object(x.a)(r.state.boxState),t=e.length-1;t>=1;t--)e.pop();r.setState({boxState:e,winComplete:[!1],draw:[!1],playerA:[!1],playerB:[!1],circleOrCross:[!1],index:0,prevClicked:!1})},r.handlePrev=function(){var e=r.state.index;e>0&&r.setState({index:--e,prevClicked:!0})},r.handleNext=function(){var e=r.state,t=e.index;t+1<e.boxState.length&&(t+=1),r.setState({index:t})},r.handleClick=function(e){var t=r.state.index;if(!r.state.winComplete[t]){var c=e.target.getAttribute("name"),n=Object(x.a)(r.state.boxState),s=Object(x.a)(n[t]),a=Object(O.a)({},s.find((function(e){return e.box===c})));if(!a.circle&&!a.cross){a.clicked=!0,r.state.circleOrCross[t]?(a.circle=!0,a.innerText="O"):(a.cross=!0,a.innerText="X");for(var i=0;i<s.length;i++)if(s[i].box===c){s[i]=Object(O.a)({},a);break}if(n.length-1<t+1)n.push(s);else for(n[t+1]=s;n.length-1>t+1;)n.pop();for(var l=["","","","","","","","",""],o=0;o<s.length;o++)s[o].circle?l[o]="circle":s[o].cross&&(l[o]="cross");var j=!1,b=!1,p=!1,d=!1,h=r.state.circleOrCross[t],f=0;if("cross"===l[0]&&"cross"===l[1]&&"cross"===l[2]&&(j=!0,b=!0),"cross"===l[3]&&"cross"===l[4]&&"cross"===l[5]&&(j=!0,b=!0),"cross"===l[6]&&"cross"===l[7]&&"cross"===l[8]&&(j=!0,b=!0),"cross"===l[0]&&"cross"===l[3]&&"cross"===l[6]&&(j=!0,b=!0),"cross"===l[1]&&"cross"===l[4]&&"cross"===l[7]&&(j=!0,b=!0),"cross"===l[2]&&"cross"===l[5]&&"cross"===l[8]&&(j=!0,b=!0),"cross"===l[0]&&"cross"===l[4]&&"cross"===l[8]&&(j=!0,b=!0),"cross"===l[2]&&"cross"===l[4]&&"cross"===l[6]&&(j=!0,b=!0),"circle"===l[0]&&"circle"===l[1]&&"circle"===l[2]&&(j=!0,p=!0),"circle"===l[3]&&"circle"===l[4]&&"circle"===l[5]&&(j=!0,p=!0),"circle"===l[6]&&"circle"===l[7]&&"circle"===l[8]&&(j=!0,p=!0),"circle"===l[0]&&"circle"===l[3]&&"circle"===l[6]&&(j=!0,p=!0),"circle"===l[1]&&"circle"===l[4]&&"circle"===l[7]&&(j=!0,p=!0),"circle"===l[2]&&"circle"===l[5]&&"circle"===l[8]&&(j=!0,p=!0),"circle"===l[0]&&"circle"===l[4]&&"circle"===l[8]&&(j=!0,p=!0),"circle"===l[2]&&"circle"===l[4]&&"circle"===l[6]&&(j=!0,p=!0),!j){var v,y=Object(u.a)(l);try{for(y.s();!(v=y.n()).done;){v.value&&f++}}catch(N){y.e(N)}finally{y.f()}}f!==l.length||j||(d=!0);var C=Object(x.a)(r.state.winComplete),k=Object(x.a)(r.state.draw),m=Object(x.a)(r.state.playerA),g=Object(x.a)(r.state.playerB),w=Object(x.a)(r.state.circleOrCross);if(t+=1,C.length-1<t)C.push(j);else for(C[t]=j;C.length-1>t;)C.pop();if(k.length-1<t)k.push(d);else for(k[t]=d;k.length-1>t;)k.pop();if(m.length-1<t)m.push(b);else for(m[t]=b;m.length-1>t;)m.pop();if(g.length-1<t)g.push(p);else for(g[t]=p;g.length-1>t;)g.pop();if(w.length-1>t)w.push(!h);else for(w[t]=!h;w.length-1<t;)w.pop();r.setState({winComplete:C,draw:k,playerA:m,playerB:g,boxState:n,circleOrCross:w,index:t,prevClicked:!1})}}},r.state={winComplete:[!1],draw:[!1],playerA:[!1],playerB:[!1],circleOrCross:[!1],prevClicked:!1,index:0,boxState:[[{box:"one",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"two",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"three",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"four",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"five",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"six",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"seven",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"eight",circle:!1,cross:!1,clicked:!1,innerText:""},{box:"nine",circle:!1,cross:!1,clicked:!1,innerText:""}]]},r}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)(w,Object(O.a)(Object(O.a)({},this.state),{},{handleReset:this.handleReset,handlePrev:this.handlePrev,handleNext:this.handleNext,handleClick:this.handleClick}))})}}]),c}(r.Component),T=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsx)("h1",{children:"Tic-Tac-Toe"})}}]),c}(r.Component),S=T,A=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"btn-wrap",children:Object(p.jsx)(a.b,{to:"/tic-tac-toe-started",className:"start-button",children:"Start"})})}}]),c}(r.Component),B=A,P=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(S,{}),Object(p.jsx)(B,{})]})}}]),c}(r.Component),R=P,F=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/tic-tac-toe-started",element:Object(p.jsx)(N,{})}),Object(p.jsx)(b.a,{exact:!0,path:"/",element:Object(p.jsx)(R,{})}),Object(p.jsx)(b.a,{path:"*",element:Object(p.jsx)(h,{})})]})}}]),c}(r.Component),J=F;var X=function(){return Object(p.jsx)(a.a,{children:Object(p.jsx)(J,{})})};s.a.render(Object(p.jsx)(X,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3894e3bd.chunk.js.map