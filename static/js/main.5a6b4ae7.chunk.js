(this.webpackJsonpskilldisplay=this.webpackJsonpskilldisplay||[]).push([[0],{15:function(n,t,e){},17:function(n,t,e){},18:function(n,t,e){},19:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e(1),c=e.n(o),r=e(4),i=e.n(r),s=e(2),u=e(8),d=function(){return/[?&]HOST_PORT=(wss?:\/\/[^&/]+)/.exec(window.location.search)};function f(n){return d()?l(n):function(n){var t=function(t){n.apply(void 0,Object(u.a)(t.detail))};return document.addEventListener("onLogLine",t),function(){document.removeEventListener("onLogLine",t)}}(n)}function l(n){var t="".concat(d()[1],"/BeforeLogLineRead")||!1,e=new WebSocket(t);return e.onerror=function(){return e.close()},e.onclose=function(){return setTimeout((function(){l(n)}),1e3)},e.onmessage=function(t,a){if("."===t.data)return e.send(".");var o=JSON.parse(t.data);return"SendCharName"===o.msgtype?n(o.msg):"Chat"===o.msgtype?n.apply(void 0,Object(u.a)(o.msg.split("|"))):void 0},function(){e.close()}}e(15);var v=e(7),m=e.n(v),p=e(9),j=(e(17),new Set([15997,15998,15999,16e3,16001,16002,16003,16004,16191,16192,16193,16194,16195,16196,7418,16484,16485,16486,2259,18805,2261,18806,2263,18807,2265,18873,18874,18875,2267,18877,2266,18876,2268,18878,16492,16471,16491,2270,18880,2269,18879,2271,18881,2272])),h=new Set([3559,116,114]),b=new Map;function g(n){var t=n.actionId,e=n.additionalClasses,o=c.a.useState(),r=Object(s.a)(o,2),i=r[0],u=r[1];return c.a.useEffect((function(){var n=b.get(t);if(null==n){var e=!0;return Object(p.a)(m.a.mark((function n(){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://xivapi.com/Action/".concat(t,"?columns=Icon,Name,ActionCategoryTargetID"),{mode:"cors"});case 2:return n.next=4,n.sent.json();case 4:a=n.sent,e&&(b.set(t,a),u(a));case 6:case"end":return n.stop()}}),n)})))(),function(){e=!1}}u(n)}),[t]),void 0!==i&&i.Icon?Object(a.jsx)("img",{className:j.has(t)||!h.has(t)&&4!==i.ActionCategoryTargetID?"gcd ".concat(e):"ogcd ".concat(e),src:"https://xivapi.com/".concat(i.Icon),alt:i.Name||""}):null}e(18);function O(n){var t=n.encounterId,e=n.name,o=n.actionList,r=c.a.useState(!1),i=Object(s.a)(r,2),u=i[0],d=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:u?"rotation-button expanded":"rotation-button",onClick:function(){d((function(n){return!n}))},children:0===t?"Current Rotation":e}),Object(a.jsx)(x,{expanded:u,actionList:o})]})}function x(n){var t=n.expanded,e=n.actionList;return t?Object(a.jsx)("div",{className:"rotation-list",children:e.map((function(n,t){return Object(a.jsx)(g,{actionId:n,additionalClasses:"action-rotation"},t)}))}):null}var w=new Set(["00","01","02","21","22","33"]);function I(){var n=c.a.useState([]),t=Object(s.a)(n,2),e=t[0],o=t[1],r=c.a.useState([]),u=Object(s.a)(r,2),d=u[0],l=u[1];return c.a.useEffect((function(){var n,t="",e=-1,a="Unknown",c=1,r=f((function(){for(var r=function(){l((function(n){return n[0]&&n[0].rotation&&n[0].rotation.length<=0&&n.shift(),n.unshift({name:a,rotation:[]}),n.slice(0,3)}))},s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];if(1===u.length&&u[0].charID)return n=u[0].charID,void r();var f=u[0],v=u[1],m=u[2],p=u[3],j=u[4];if(w.has(f)){switch(f){case"00":return void("0038"===m&&"end"===j&&r());case"01":return void(a=p);case"02":return n=parseInt(m,16),void r();case"33":return void("40000012"!==p&&"40000010"!==p||r())}if(void 0!==n&&parseInt(m,16)===n){var h=parseInt(j,16);if(!((h<9||h>2e4)&&(h<100001||h>100300)||v===t&&h===e)){Date.now()-Date.parse(t)>12e4&&r(),t=v,e=h;var b=c%256+1;c=b,i.a.unstable_batchedUpdates((function(){o((function(n){return n.concat({action:h,key:b})})),l((function(n){return n[0]||(n[0]={name:a,rotation:[]}),n[0].rotation.push(h),n}))})),setTimeout((function(){o((function(n){return n.slice(1)}))}),1e4)}}}}));return function(){r()}}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"actions",children:e.map((function(n){var t=n.action,e=n.key;return Object(a.jsx)(g,{actionId:t,additionalClasses:"action-move"},e)}))}),d.map((function(n,t){return Object(a.jsx)(O,{encounterId:t,name:n.name,actionList:n.rotation},t)}))]})})}i.a.render(Object(a.jsx)(I,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5a6b4ae7.chunk.js.map