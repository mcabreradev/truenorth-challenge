(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t(85)},48:function(e,a,t){},76:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(32),c=t.n(s),i=t(18),l=(t(48),t(10)),o=t(7),m=t(8),u=t(11),d=t(9),p=t(12),E=(t(52),t(54),t(87)),h=t(89),f=t(88),v=function(){return r.a.createElement("h2",{className:"title is-2 has-text-grey has-text-centered"},"404 NotFound")},g={padding:"19px 0px 0px 0px"},b=function(){return r.a.createElement("nav",{className:"navbar is-fixed-top is-danger"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item has-text-weight-semibold is-size-4"},"Restoservice"),r.a.createElement("small",{className:"has-text-weight-light",style:g},"v1.0"),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenuColorinfo-example"}," ",r.a.createElement("span",null)," ",r.a.createElement("span",null)," ",r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"bd-tw-button button","data-social-network":"Github","data-social-action":"tweet","data-social-target":"https://github.com/mcabreradev/truenorth-client",href:"https://github.com/mcabreradev/truenorth-client"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Fork me"))))))))},N=t(15),y=t(16),O=t.n(y),w=t(21),R=t(35),T=t.n(R),j=function(e){var a=e.restaurants,t=e.name,n=e.sortBy;return a.filter(function(e){return e.commercialName.toLowerCase().indexOf(t.toLowerCase())>=0||e.address.toLowerCase().indexOf(t.toLowerCase())>=0}).sort(function(e,a){return""===n?e.commercialName>a.commercialName?1:-1:"highest_rated"===n?a.rating-e.rating:e.rating-a.rating})},x=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onChange=t.onChange.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onChange",value:function(e){switch(e.target.name){case"name":this.props.setName(e.target.value);break;case"sortBy":this.props.setSortBy(e.target.value)}}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.sortBy;return r.a.createElement("div",{className:"columns filters"},r.a.createElement("div",{className:"field column is-7"},r.a.createElement("div",{className:"control is-medium has-icons-right"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Restaurant or Address",name:"name",value:a,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-medium is-right"},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",{className:"field column is-5 is-horizontal"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Sort By")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-medium is-fullwidth"},r.a.createElement("select",{name:"sortBy",onChange:this.onChange},r.a.createElement("option",{value:""},""===t?"Select":"-- Reset Filter"),r.a.createElement("option",{value:"highest_rated"},"Highest Rated"),r.a.createElement("option",{value:"lower_rated"},"Lower Rated")))))))}}]),a}(n.Component);x.defaultProps={name:"",sortBy:""};var S=Object(l.b)(function(e){return{name:e.data.name,sortBy:e.data.sortBy}},{setName:function(e){return function(a,t){try{a({type:"SET_NAME",payload:e}),setTimeout(function(){return a({type:"FILTER_RESTAURANTS",payload:j(t().data)})},400)}catch(n){console.error("Error filtering Restaurants action",n)}}},setSortBy:function(e){return function(){var a=Object(w.a)(O.a.mark(function a(t,n){return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{t({type:"SET_SORTBY",payload:e}),setTimeout(function(){return t({type:"FILTER_RESTAURANTS",payload:j(n().data)})},100)}catch(r){console.error("Error sorting Restaurants action",r)}case 1:case"end":return a.stop()}},a,this)}));return function(e,t){return a.apply(this,arguments)}}()}})(x),_=function(e){return r.a.createElement("div",{className:"pageloader has-background-danger "+(e.isActive?"is-active":"")},r.a.createElement("span",{className:"title"},e.text))};_.defaultProps={text:"Loading..",isActive:!1};var L=_,A=function(e){var a=e.rating,t=Array(5).fill("star").map(function(e,t){var n="fas fa-star has-text-grey-lighter";return t+1<=Math.floor(a)&&(n="fas fa-star has-text-warning"),r.a.createElement("i",{className:n,key:e+t})});return r.a.createElement("div",{title:"Rate "+a},t)},k=(t(76),function(e){var a=e.logo,t=e.commercialName,n=e.rating,s=e.reviews,c=e.address;return r.a.createElement("div",{className:"box restaurant"},r.a.createElement("article",{className:"media restaurant-details"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:a,alt:"Imagee"}))),r.a.createElement("div",{className:"media-content columns"},r.a.createElement("div",{className:"content column is-four-fifths"},r.a.createElement("div",{className:"is-size-5 has-text-weight-semibold has-text-grey restaurant-name"},t),r.a.createElement("div",{className:"is-flex restaurant-rating"},r.a.createElement("span",{className:"tag is-success is-radiusless restaurant-tag"},n),r.a.createElement(A,{rating:n}),r.a.createElement("span",{className:"is-size-7 has-text-link restaurant-reviews"},s.length," Reviews")),r.a.createElement("div",null,r.a.createElement("i",{className:"has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"}),r.a.createElement("span",{className:"is-size-7 restaurant-address"},c))),r.a.createElement("div",{className:"column"},r.a.createElement("a",{className:"button is-small is-danger is-pulled-right order-button",href:"/"},"Order food")))))}),C=t(36);function B(){var e=Object(C.a)(["\n  top: 40px;\n  position: relative;\n"]);return B=function(){return e},e}var G=t(37).a.div(B()),I=function(e){return r.a.createElement(G,{className:"container"},e.children)},F=(t(80),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchRestaurants()}},{key:"render",value:function(){var e=this.props,a=e.restaurants,t=e.isLoading;return r.a.createElement(I,null,r.a.createElement(L,{isActive:t}),r.a.createElement(S,null),r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-12-desktop is-12-tablet"},a.map(function(e){return r.a.createElement(k,Object.assign({},e,{key:e._id}))}))))}}]),a}(n.Component));F.defaultProps={renderLoading:r.a.createElement("div",{className:"container"},"loading..."),tryAgain:r.a.createElement("div",{className:"container"},"Restaurant was not found!, try again"),restaurants:[],name:"",selectedSortby:""};var D=Object(l.b)(function(e){return{restaurants:e.data.filteredRestaurants,name:e.data.name,isLoading:e.data.isLoading,selectedSortby:!!e.data.selectedSortby&&e.data.selectedSortby}},{fetchRestaurants:function(){return function(){var e=Object(w.a)(O.a.mark(function e(a,t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"TOGGLE_LOADING",payload:!0}),e.next=4,T.a.get("https://mcabreradev-truenorth-api.herokuapp.com/restaurants");case 4:n=e.sent,r=n.data.data,a({type:"FETCH_RESTAURANTS",payload:r}),a({type:"FILTER_RESTAURANTS",payload:j(t().data)}),a({type:"TOGGLE_LOADING",payload:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching Restaurants action",e.t0),a({type:"TOGGLE_LOADING",payload:!1});case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(a,t){return e.apply(this,arguments)}}()}})(F),U=(t(82),function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"".concat("/truenorth-client","/"),component:D}),r.a.createElement(f.a,{exact:!0,path:"".concat("/truenorth-client","/list"),component:D}),r.a.createElement(f.a,{component:v}))))}}]),a}(n.Component)),z=function(e){var a=e.store,t=e.history;return r.a.createElement(l.a,{store:a},r.a.createElement(U,{history:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(6),X=t(42),H=t(13),P={restaurants:[],filteredRestaurants:[],name:"",sortBy:"",isLoading:!1},W=Object(M.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_RESTAURANTS":return Object(H.a)({},e,{restaurants:a.payload});case"FILTER_RESTAURANTS":return Object(H.a)({},e,{filteredRestaurants:a.payload});case"SET_NAME":return Object(H.a)({},e,{name:a.payload});case"SET_SORTBY":return Object(H.a)({},e,{sortBy:a.payload});case"TOGGLE_LOADING":return Object(H.a)({},e,{isLoading:a.payload});default:return e}}}),J=[X.a],V=Object(M.e)(W,{},Object(M.d)(M.a.apply(void 0,J),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Y=Object(i.a)();c.a.render(r.a.createElement(z,{store:V,history:Y}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.c1e6c3f5.chunk.js.map