(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(3),s=a(5),o=a(4),r=a(6),i=a(1),l=a(0),m=a.n(l),h=a(7),u=(a(14),"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");var d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={active:!1},a.setActive=a.setActive.bind(Object(i.a)(Object(i.a)(a))),a.setNotActive=a.setNotActive.bind(Object(i.a)(Object(i.a)(a))),a.onImageError=a.onImageError.bind(Object(i.a)(Object(i.a)(a))),a}return Object(r.a)(t,e),Object(c.a)(t,[{key:"setActive",value:function(){this.setState({active:!0})}},{key:"setNotActive",value:function(){this.setState({active:!1})}},{key:"onImageError",value:function(e){e.target.onerror=null,e.target.src=u}},{key:"render",value:function(){var e,t=this.props,a=t.profile_image,n=t.icon,c=t.job,s=t.name,o=t.company_name,r=t.phone,i=t.email,l=t.index,h=(e=a)?(e.indexOf("https")<0&&(e=e.replace("http","https")),e):u;return m.a.createElement("div",{className:"contact",key:l.toString(),onMouseOver:this.setActive,onMouseLeave:this.setNotActive},m.a.createElement("div",{className:"image ".concat(this.state.active?"active":"")},m.a.createElement("img",{src:h,onError:this.onImageError,className:"img-fluid",alt:"Contact Iamge"})),m.a.createElement("div",{className:"icon"},m.a.createElement("img",{src:n,onError:this.onImageError,className:"img-fluid",alt:"icon"})),m.a.createElement("div",{className:"name"},s),m.a.createElement("div",{className:"desc"},c&&c+" |"," ",o),this.state.active&&m.a.createElement("div",{className:"more"},r&&m.a.createElement("div",{className:"phone"},"Phone Number ",r),i&&m.a.createElement("div",{className:"email"},i)))}}]),t}(l.Component);a(16);function v(){return m.a.createElement("div",{className:"navbar"},m.a.createElement("div",{className:"title"},"Contact List"),m.a.createElement("div",{className:"search"},m.a.createElement("input",{type:"text",placeholder:"Search..."})))}a(18);var b=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={contacts:[],loaded:!1,error:"",showMore:!1},e.allContacts=[],e.count=0,e.showMore=e.showMore.bind(Object(i.a)(Object(i.a)(e))),e}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://candidate-test.herokuapp.com/contacts").then(function(e){return e.json()}).then(function(t){e.allContacts=t,e.count++,e.setState({loaded:!0,contacts:e.allContacts.slice(0,12),showMore:t.length>12})}).catch(function(t){e.setState({loaded:!0,error:t})})}},{key:"showMore",value:function(){this.count++,12*this.count>=this.allContacts.length?this.setState({contacts:this.allContacts.slice(0),showMore:!1}):this.setState({contacts:this.allContacts.slice(0,12*this.count)})}},{key:"render",value:function(){return m.a.createElement("div",{className:"app"},m.a.createElement(v,null),m.a.createElement("div",{className:"contact-list"},!this.state.loaded&&m.a.createElement("div",{className:"loader"},"Loading..."),this.state.error&&m.a.createElement("div",{className:"error"},"Error: ",this.state.error.message),this.state.loaded&&!this.state.error&&m.a.createElement("div",{className:"contacts-container"},this.state.contacts.length>0?this.state.contacts.map(function(e,t){return m.a.createElement(d,Object.assign({index:t},e))}):"No Available Contacts Found :-(")),this.state.showMore&&m.a.createElement("div",{className:"more-btn"},m.a.createElement("button",{type:"button",onClick:this.showMore,className:"btn btn-secondary btn-lg"}," Show More")))}}]),t}(l.Component);Object(h.render)(m.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.f734f6e4.chunk.js.map