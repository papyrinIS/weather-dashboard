(this["webpackJsonpweather-dashboard"]=this["webpackJsonpweather-dashboard"]||[]).push([[0],{20:function(e,t,a){},34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),o=a.n(c),s=(a(39),a(13)),u=(a(20),a(5)),i=a(17),d=a.n(i),l=a(30),h=a(18),m=a(9),b=a(31),p=a.n(b).a.create({baseURL:"http://api.openweathermap.org/data/2.5/weather?"}),f=function(e){return p.get("&q=".concat(e,"&APPID=dcca529665a37812e85088afd3957d4d&units=metric&SameSite=None")).then((function(e){return e.data}))},E={dashboards:[],city:"",error:!1},v=function(e){return{type:"CITY",city:e}},y=function(e){return{type:"ERROR",error:e}},g=Object(u.b)((function(e){return{dashboards:e.Reducer.dashboards}}),{deleteDashboardAC:function(e){return{type:"DELETE_DASHBOARD",newDashboards:e}}})((function(e){var t=e.dashboards,a=e.mainWeather,r=e.city,c=e.icon,o=e.deleteDashboardAC,u=n.a.useState(!1),i=Object(s.a)(u,2),d=i[0],l=i[1];return n.a.createElement("div",{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},className:"dashboard"},n.a.createElement("div",{className:"dashboard__button"},d&&n.a.createElement("button",{onClick:function(){var e=t.filter((function(e){return e.name!==r}));o(e)}},"delete")),n.a.createElement("div",{className:"dashboard__city"},r),n.a.createElement("div",{className:"dashboard__temp"},Math.round(a.temp),"\u2103"),n.a.createElement("img",{alt:"icon",src:"http://openweathermap.org/img/wn/".concat(c,"@2x.png")}))})),O=a(65),w=a(66),A=Object(u.b)((function(e){return{dashboards:e.Reducer.dashboards,city:e.Reducer.city,error:e.Reducer.error}}),{getWeatherThunk:function(e){return function(){var t=Object(l.a)(d.a.mark((function t(a){var r,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:r=t.sent,n=a({type:"GET_WEATHER",dashboard:r}),Promise.all([n]).then((function(){a(v(""))})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a(v("")),a(y(!0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},getCityAC:v,errorAC:y})((function(e){var t=e.dashboards,a=e.getWeatherThunk,c=e.getCityAC,o=e.city,u=e.error,i=e.errorAC;Object(r.useEffect)((function(){o&&a(o)}),[a,o]);var d=Object(r.useState)(""),l=Object(s.a)(d,2),h=l[0],m=l[1],b=t.map((function(e){return n.a.createElement(O.a,{classNames:"option",key:e.name,timeout:1e3},n.a.createElement(g,{icon:e.weather[0].icon,city:e.name,mainWeather:e.main}))}));return u&&setTimeout((function(){return i(!1)}),3e3),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App__form"},n.a.createElement("input",{value:h,onChange:function(e){m(e.currentTarget.value.replace(/^[\u0430-\u044f\u0410-\u042f]+$/,""))},placeholder:"search"}),n.a.createElement("button",{onClick:function(){return c(h)}},"add"),n.a.createElement("button",{onClick:function(){return m("")}},"Clear")),n.a.createElement("div",{className:"App__error"},u&&n.a.createElement("span",null,"city not found")),0===t.length&&n.a.createElement("div",{className:"App__isEmpty"},"Dashboard is empty"),n.a.createElement("div",null,n.a.createElement(w.a,{className:"dashboards"},b)))})),j=a(6),R=a(32),_=Object(j.c)({Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER":return Object(m.a)({},e,{dashboards:[].concat(Object(h.a)(e.dashboards),[t.dashboard])});case"CITY":return Object(m.a)({},e,{city:t.city});case"DELETE_DASHBOARD":return Object(m.a)({},e,{dashboards:Object(h.a)(t.newDashboards)});case"ERROR":return Object(m.a)({},e,{error:t.error});default:return e}}}),C=Object(j.d)(_,localStorage.weather?JSON.parse(localStorage.weather):{},Object(j.a)(R.a));C.subscribe((function(){localStorage.weather?localStorage.weather=JSON.stringify(C.getState()):localStorage.weather=JSON.stringify(E)})),window.store=C;var S=C;o.a.render(n.a.createElement(u.a,{store:S},n.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c3dc849e.chunk.js.map