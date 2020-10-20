(this["webpackJsonpcharter-code-challenge"]=this["webpackJsonpcharter-code-challenge"]||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a(14),o=(a(28),a(29),a(1)),s=a(6),u=a(8),i=a(9),m=a(11),p=a(10);var g=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Charter/Spectrum Code Challenge"),r.a.createElement("p",null,"React Application using restaurant data"))},h=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,r=[];n<=t;)r.push(n),n+=a;return r},f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).gotoPage=function(e){var t=n.props.onPageChanged,a=void 0===t?function(e){return e}:t,r=Math.max(0,Math.min(e,n.totalPages)),l={currentPage:r,totalPages:n.totalPages,pageLimit:n.pageLimit,totalRecords:n.totalRecords};n.setState({currentPage:r},(function(){return a(l)}))},n.handleClick=function(e,t){t.preventDefault(),n.gotoPage(e)},n.handleMoveLeft=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage-2*n.pageNeighbours-1)},n.handleMoveRight=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage+2*n.pageNeighbours+1)},n.fetchPageNumbers=function(){var e=n.totalPages,t=n.state.currentPage,a=n.pageNeighbours,r=2*n.pageNeighbours+3;if(e>r+2){var l=[],c=t-a,o=t+a,u=e-1,i=c>2?c:2,m=o<u?o:u,p=r-(l=h(i,m)).length-1,g=i>2,f=m<u,d="LEFT";if(g&&!f){var v=h(i-p,i-1);l=[d].concat(Object(s.a)(v),Object(s.a)(l))}else if(!g&&f){var E=h(m+1,m+p);l=[].concat(Object(s.a)(l),Object(s.a)(E),["RIGHT"])}else g&&f&&(l=[d].concat(Object(s.a)(l),["RIGHT"]));return[1].concat(Object(s.a)(l),[e])}return h(1,e)};var r=e.totalRecords,l=void 0===r?null:r,c=e.pageLimit,o=void 0===c?30:c,i=e.pageNeighbours,m=void 0===i?0:i;return n.pageLimit="number"===typeof o?o:30,n.totalRecords="number"===typeof l?l:0,n.pageNeighbours="number"===typeof m?Math.max(0,Math.min(m,2)):0,n.totalPages=Math.ceil(n.totalRecords/n.pageLimit),n.state={currentPage:1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords)return null;if(1===this.totalPages)return null;var t=this.state.currentPage,a=this.fetchPageNumbers();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{"aria-label":"Restaurants Pagination"},r.a.createElement("ul",{className:"pagination"},a.map((function(a,n){return"LEFT"===a?r.a.createElement("li",{key:n,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:e.handleMoveLeft},r.a.createElement("span",{"aria-hidden":"true"},"\xab"),r.a.createElement("span",{className:"sr-only"},"Previous"))):"RIGHT"===a?r.a.createElement("li",{key:n,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#","aria-label":"Next",onClick:e.handleMoveRight},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"),r.a.createElement("span",{className:"sr-only"},"Next"))):r.a.createElement("li",{key:n,className:"page-item".concat(t===a?" active":"")},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(t){return e.handleClick(a,t)}},a))})))))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={restaurants:[],currentRestaurants:[],currentPage:null,totalPages:null},e.onPageChanged=function(t){var a=e.state.restaurants,n=t.currentPage,r=t.totalPages,l=t.pageLimit,c=(n-1)*l,o=a.slice(c,c+l);e.setState({currentPage:n,currentRestaurants:o,totalPages:r})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.restaurants;e.restaurants!==t&&this.setState({restaurants:t})}},{key:"render",value:function(){var e=this.state,t=e.restaurants,a=(e.currentRestaurants,e.currentPage),n=e.totalPages,l=t.length;if(0===l)return null;var c=["text-dark py-2 pr-4 m-0",a?"border-gray border-right":""].join(" ").trim();return r.a.createElement("div",{className:"container mb-5"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Phone Number"),r.a.createElement("th",null,"Genres"))),r.a.createElement("tbody",null,this.state.currentRestaurants.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.city),r.a.createElement("td",null,e.state),r.a.createElement("td",null,e.telephone),r.a.createElement("td",null,e.genre))})))),r.a.createElement("div",{className:"row d-flex flex-row py-2"},r.a.createElement("div",{className:"w-100 px-4 py-2 d-flex flex-row flex-wrap align-items-center justify-content-between"},r.a.createElement("div",{className:"d-flex flex-row align-items-center"},r.a.createElement("h4",{className:c},r.a.createElement("strong",{className:"text-secondary"},l)," ","Restaurants"),a&&r.a.createElement("span",{className:"current-page d-inline-block h-100 pl-4 text-secondary"},"Page ",r.a.createElement("span",{className:"font-weight-bold"},a)," /"," ",r.a.createElement("span",{className:"font-weight-bold"},n))),r.a.createElement("div",{className:"d-flex flex-row py-4 align-items-center"},r.a.createElement(f,{totalRecords:l,pageLimit:10,pageNeighbours:0,onPageChanged:this.onPageChanged})))))}}]),a}(r.a.Component),v=a(15),E=a.n(v),b=a(21);function y(e){return P.apply(this,arguments)}function P(){return(P=Object(b.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw a=e.sent,new Error(a);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){throw console.error("API call failed. "+e),e}var k="https://code-challenge.spectrumtoolbox.com/api/restaurants/";var w={gt:{asc:1,desc:-1},lt:{asc:-1,desc:1}},j=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ASC",r=e[a],l=t[a];return r<l?w.lt[n.toLowerCase()]:r>l?w.gt[n.toLowerCase()]:0},x=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return"string"===typeof t[0]&&(t=[{direction:t[1],property:t[0]}]),function(e,a){var n=0;return t.some((function(t){var r=t.property,l=t.direction,c=j(e,a,r,void 0===l?"ASC":l);return 0!==c&&(n=c,!0)})),n}},O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={restaurants:[],filters:e.props.filters,sorters:e.props.sorters},e.compareBy=function(e){return function(t,a){return t[e]<a[e]?-1:t[e]>a[e]?1:0}},e.sortList=function(t){var a=Object(s.a)(e.state.restaurants);a.sort(e.compareBy(t)),console.log(a),e.setState({users:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(k,{headers:{Authorization:"Api-Key q3MNxtfep8Gt"}}).then(y).catch(N).then((function(t){return e.setState({restaurants:e.parseData(t)})})),console.log(this.state.restaurants)}},{key:"parseData",value:function(e){var t=this.state.sorters,a=this.state.filters;e&&e.length&&(Array.isArray(a)&&a.length&&(e=e.filter((function(e){return"FL"===e.state}))),Array.isArray(t)&&t.length&&e.sort(x.apply(void 0,Object(s.a)(t)))),console.log(e);var n=function(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.map((function(t){t.map((function(t){e.includes(t.state)||e.push(t.state)}))})),e.sort()}(e);console.log(n);var r=function(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.map((function(t){t.map((function(t){e.includes(t.attire)||e.push(t.attire)}))})),e.sort()}(e);console.log(r);var l=function(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.map((function(t){t.map((function(t){[],t.genre.split(",").map((function(t){e.includes(t)||e.push(t)}))}))})),e.sort()}(e);return console.log(l),e}},{key:"render",value:function(){var e=this.state.restaurants;return console.log(e),r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement("h3",null,"List of Restaurants")),r.a.createElement(d,{restaurants:e}))}}]),a}(r.a.Component);O.defaultProps={sorters:[{property:"name"},{property:"state"}]};var C=O,R=(a(31),function(){return r.a.createElement("h1",null,"Oops!!! Page Not Found!!!")});var A=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:C}),r.a.createElement(o.a,{component:R})))};Object(l.render)(r.a.createElement(c.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f770c0dc.chunk.js.map