(this["webpackJsonptokyo-walker"]=this["webpackJsonptokyo-walker"]||[]).push([[0],{10:function(e,t,n){e.exports={volumeControl:"VolumeControl_volumeControl__3WcDp",label:"VolumeControl_label__1BTs2",volume:"VolumeControl_volume__1OfC8"}},11:function(e,t,n){e.exports={name:"MusicMenu_name__3qm6w",wrapper:"MusicMenu_wrapper__mFd5Y",type:"MusicMenu_type__3z919"}},13:function(e,t,n){e.exports={menu:"Menu_menu__3KCbk",title:"Menu_title__1Tc1I"}},19:function(e,t,n){e.exports={Card:"Card_Card__1hsvL"}},20:function(e,t,n){e.exports={github:"Github_github__3Iv0l"}},22:function(e,t,n){e.exports={button:"Button_button__33CwW"}},23:function(e,t,n){e.exports={buttons:"Buttons_buttons__tlssM"}},29:function(e,t,n){},30:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),c=n(17),r=n.n(c),u=(n(29),n(5)),i=(n(30),n(8)),s=n.n(i),l=a.a.createContext({name:"",url:""}),m=n(1),d=function(){var e=Object(o.useContext)(l);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"audio-stream",children:Object(m.jsx)(s.a,{className:"audio",playing:e.playing,volume:e.volume,url:e.url,onEnded:e.selectRandom})})})},h=a.a.createContext({name:"",url:"",start:"",muted:""}),j=n(6),b=(n(54),function(){var e=Object(o.useContext)(h);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"video-background",children:Object(m.jsx)("div",{className:"video-foreground",children:Object(m.jsx)(s.a,{volume:.5,url:"https://www.youtube.com/watch?v=".concat(e.url,"?t=".concat(e.start)),muted:e.muted,onEnded:function(){var t,n=j[e.country].length;e.addVideo(j[e.country][(t=n,Math.floor(Math.random()*t))])},playing:!0})})})})}),p=n(9),f=n.n(p),g=n(18),O=function(){var e=Object(o.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(o.useContext)(h),r=function(){a((function(e){return!e}))},i=j[c.country].map((function(e){return Object(m.jsx)("li",{className:c.name===e.name?f.a.bold:null,onClick:function(){return function(e){c.addVideo(e)}(e)},role:"button",children:e.name},e.url)}));return Object(m.jsx)("div",{className:f.a.videoList,children:Object(m.jsx)("ul",{children:n?function(){var e=[],t=function(t){e.push(Object(m.jsxs)("li",{onClick:function(){return e=t,c.changeCountry(e),void r();var e},children:["> ",t]},t))};for(var n in j)t(n);return e}():Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{role:"button",onClick:r,className:f.a.icon}),i]})})})},x=n(10),v=n.n(x),y=function(e){return Object(m.jsxs)("div",{className:v.a.volumeControl,children:[Object(m.jsx)("label",{className:v.a.label,htmlFor:"volume",children:"Volume"}),Object(m.jsx)("input",{type:"range",className:"volume",name:v.a.volume,min:"0",max:"1",step:"0.01",value:e.volume,onChange:e.onVolumeChange})]})},k=n(11),_=n.n(k),C=n(7),N=n(19),S=n.n(N),w=function(e){return Object(m.jsx)("div",{onClick:e.onClick,role:e.role,className:"".concat(S.a.Card," ").concat(e.className&&e.className),children:e.children})},M=function(){var e=Object(o.useContext)(l);return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{className:_.a.name,children:e.name}),Object(m.jsx)(y,{onVolumeChange:function(t){e.changeVolume(t.target.value)},volume:e.volume}),Object(m.jsx)("p",{className:_.a.type,children:"select music genre:"}),Object(m.jsx)("div",{className:_.a.wrapper,children:function(){var t=[],n=function(n){t.push(Object(m.jsx)(w,{onClick:function(){return e.selectRandom(n)},children:n},n))};for(var o in C)n(o);return t}()})]})},V=n(20),z=n.n(V),T=n(21),L=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("a",{href:"https://github.com/Sebosun/Tokyo-Walker",className:z.a.github,children:Object(m.jsx)(T.a,{color:"black"})})})},I=n(22),P=n.n(I),F=function(e){return Object(m.jsx)("button",{onClick:e.onClick,className:P.a.button,children:e.children})},R=n(23),B=n.n(R),Y=function(e){return Object(m.jsxs)("div",{className:B.a.buttons,children:[Object(m.jsx)(F,{onClick:e.changeMute,children:e.muted?"Turn On The Street Noise":"Turn Off The Street Noise"}),Object(m.jsx)(F,{onClick:e.setPlayStatus,children:"  ".concat(e.playing?"Stop music":"Play music"," ")})]})},W=n(13),E=n.n(W),J=function(){var e=Object(o.useContext)(h),t=Object(o.useContext)(l);return Object(m.jsxs)("div",{className:E.a.menu,children:[Object(m.jsx)("p",{className:E.a.title,children:"Tokyo Walker"}),Object(m.jsx)(O,{}),Object(m.jsx)(Y,{changeMute:e.changeMute,muted:e.muted,setPlayStatus:t.setPlayStatus,playing:t.playing}),t.playing&&Object(m.jsx)(M,{}),Object(m.jsx)(L,{})]})},q=function(e){var t=Object(o.useState)({name:"Imperial Palace Cherry Blossoms",url:"JOqqR5TcL-I",start:"924"}),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(o.useState)(!0),i=Object(u.a)(r,2),s=i[0],l=i[1],d=Object(o.useState)("japan"),b=Object(u.a)(d,2),p=b[0],f=b[1],g=function(e){c(e)};var O={name:a.name,url:a.url,start:a.start,muted:s,addVideo:g,changeMute:function(){l((function(e){return!e}))},country:p,changeCountry:function(e){f(e)},selectRandom:function(){var e,t=j[p].length;g(j[p][(e=t,Math.floor(Math.random()*e))])}};return Object(m.jsx)(h.Provider,{value:O,children:e.children})},K=function(e){var t=Object(o.useState)({name:"Midnight walk",url:"https://soundcloud.com/jazzhopcafe/midnight-walk-lofi-jazzhop-chill-mix"}),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(o.useState)(!1),i=Object(u.a)(r,2),s=i[0],d=i[1],h=Object(o.useState)(100),j=Object(u.a)(h,2),b=j[0],p=j[1],f=Object(o.useState)("lofi"),g=Object(u.a)(f,2),O=g[0],x=g[1],v=function(e){c(e)},y=function(e){x(e)};function k(e){return Math.floor(Math.random()*e)}var _={name:a.name,url:a.url,start:a.start,playing:s,setPlayStatus:function(){d((function(e){return!e}))},changeAudio:v,volume:b,changeVolume:function(e){p(e)},genre:O,changeGenre:y,selectRandom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=C[e].length;v(C[e][k(t)]),y(e)}};return Object(m.jsx)(l.Provider,{value:_,children:e.children})},D=n(24);var H=function(){var e=Object(o.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q,{children:Object(m.jsxs)(K,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(d,{}),n&&Object(m.jsx)(J,{})]})}),Object(m.jsx)(D.a,{role:"button",className:"toggleVisible",onClick:function(){a((function(e){return!e}))}})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),G()},6:function(e){e.exports=JSON.parse('{"japan":[{"name":"Toyko Shibuya at night","url":"6qGiXY1SB68","start":"0"},{"name":"Night Walk in Shinjuku, Tokyo","url":"vHr4qSQ-5XU","start":"0"},{"name":"Backstreets of Japan at night - Heavy rain","url":"Hndf5JRwUL0","start":"0"},{"name":"Rainy walk from Tokyo station to Akihabara","url":"s9VYTn5h8VQ","start":"0"},{"name":"Evening Walk -  From Shibuya to Omote-sando","url":"bBj7QqmFNPw","start":"0"},{"name":"Rural Yokohama - Jikecho to Ichigao","url":"qArFQa6UYQI","start":"0"},{"name":"Countryside Village - Suburban Nagoya","url":"rz8KzLbdS7g","start":"0"},{"name":"Rainy Arashiyama, Kyoto.","url":"yIMDgPKgN1w","start":"0"},{"name":"Kyoto sakura","url":"aaaxRIBPbXE","start":"0"}],"korea":[{"name":"Saturday Evening Downtown - Daegu, Korea","url":"Mt4s1Gg2-d4","start":"0"},{"name":"South Korea Night Walk in Heavy Rain","url":"f6Lwxc-zZ8o","start":"0"},{"name":"Rainy Yeouido Evening","url":"sBtYWK817-0","start":"0"},{"name":"Ikseondong Hanok Village","url":"Pcn3rHNI1Y0","start":"0"},{"name":"Bukchon Hanok Village","url":"2NzYYbSLVfU","start":"0"}]}')},7:function(e){e.exports=JSON.parse('{"lofi":[{"name":"midnight walk","url":"https://soundcloud.com/jazzhopcafe/midnight-walk-lofi-jazzhop-chill-mix"},{"name":"for those types of days","url":"https://soundcloud.com/jackdomagala23/studio-ghibli-lofi-hiphop-mix"},{"name":"cherry blossom","url":"https://soundcloud.com/jazzhopcafe/cherry-blossom-lofi-jazzhop-anime-mix"},{"name":"Lofi Girl 2021","url":"https://soundcloud.com/wim-buyse/sets/chilled-cow-releases-2021-lofi"},{"name":"Late Nights With You","url":"https://soundcloud.com/mossyfrogs/late-nights-with-you-lofi-study-mix"},{"name":"I don\'t sleep, I just dream","url":"https://soundcloud.com/paul-gilmore/i-dont-sleep-i-just-dream-lofi-hip-hop-mix-tape"},{"name":"Cozy Winter","url":"https://soundcloud.com/lofi_girl/cozy-winter"},{"name":"Train Trip to Tokyo","url":"https://soundcloud.com/paul-gilmore/train-trip-to-tokyo-lo-hop-lo-fi-hip-hop-mixtape"}],"citypop":[{"name":"Japanese City Pop Vol. 1","url":"https://soundcloud.com/user-152162715/japanese-city-pop-vol1"},{"name":"\u30b7\u30c6\u30a3\u30dd\u30c3\u30d7: The Lost Decade [90s]","url":"https://soundcloud.com/vanpaugam/city-pop-the-lost-decade90s"},{"name":"\u30b7\u30c6\u30a3\u30dd\u30c3\u30d7 Summertime Edition: The Lost Summer","url":"https://soundcloud.com/vanpaugam/city-pop-summer-edition-iv-the-lost-summer90s"},{"name":"The Midnight Randezvous Mk.II","url":"https://soundcloud.com/kado-bara/midnight-rendezvous-mk-ii"},{"name":"Guise","url":"https://soundcloud.com/kado-bara/kadobara-guise-city-pop-mix"}]}')},9:function(e,t,n){e.exports={bold:"VideoList_bold__1lcio",videoList:"VideoList_videoList__1hq6D",icon:"VideoList_icon__CE5XP"}}},[[55,1,2]]]);
//# sourceMappingURL=main.a9326f48.chunk.js.map