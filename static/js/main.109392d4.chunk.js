(this["webpackJsonpreact-toggle-example"]=this["webpackJsonpreact-toggle-example"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),l=(a(13),a(3)),c=a(4),i=a(6),m=a(5),u=a(7),h=(a(14),a(15),function(e){return s.a.createElement("div",{className:"box"},s.a.createElement("label",null,"Nome: "),e.name,s.a.createElement("label",null," Eta': "),e.age)}),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={persons:[{name:"Francesco",age:22},{name:"Lucrezia",age:23},{name:"Kirby",age:1}],showPersons:!1,buttonValue:"Mostra"},a.togglePersonsHandler=function(){var e=a.state.showPersons;a.setState({showPersons:!e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("button",{onClick:this.togglePersonsHandler,className:"button"},this.state.buttonValue),this.state.showPersons?s.a.createElement("div",null,s.a.createElement(h,{name:this.state.persons[0].name,age:this.state.persons[0].age}),s.a.createElement(h,{name:this.state.persons[1].name,age:this.state.persons[1].age}),s.a.createElement(h,{name:this.state.persons[2].name,age:this.state.persons[2].age})):s.a.createElement("p",null,"Premi il bottone"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.109392d4.chunk.js.map