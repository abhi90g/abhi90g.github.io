(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=a(1),l=a(2),i=a(4),m=a(3),u=a(5),p=a(8),h=(a(15),a(17),function(e){return r.a.createElement("button",{className:"actionbtn",onClick:e.cmpName}," ",e.buttonName," ")}),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handlesubmit=function(e){e.preventDefault(),a.props.next(),console.log(a.props)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("email props - ",this.props),r.a.createElement("div",{className:"emailComponent"},r.a.createElement("p",{className:"join"},"Join the list"),r.a.createElement("form",{onSubmit:this.handlesubmit,className:"emailForm"},r.a.createElement("p",{className:"formInstruction"},"sign up for the tlc newsletter"),r.a.createElement("input",{id:"email",type:"email",defaultValue:this.props.email,onChange:this.props.changeEvent,placeholder:"enter email address",required:!0}),r.a.createElement(h,{buttonName:"NEXT"}),r.a.createElement("div",{className:"disclamer row"},r.a.createElement("input",{id:"privacyCheck",type:"checkbox",onChange:this.props.changeEvent,required:!0}),r.a.createElement("p",{className:"privacyStatement"}," I agree to recieve information from Discovery Communications in accordance with the following ",r.a.createElement("a",{href:"/"},"Privacy Policy")))))}}]),t}(r.a.Component),E=(a(19),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handlesubmit=function(e){e.preventDefault(),a.props.next()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nameComponent"},r.a.createElement("p",{className:"join"},"Join the list"),r.a.createElement("form",{onSubmit:this.handlesubmit,className:"nameForm"},r.a.createElement("p",{className:"formInstruction"},"almost done! please enter your first and last name"),r.a.createElement("input",{id:"firstName",type:"text",defaultValue:this.props.fName,onChange:this.props.changeEvent,placeholder:"First Name",required:!0}),r.a.createElement("input",{id:"lastName",type:"text",defaultValue:this.props.lName,onChange:this.props.changeEvent,placeholder:"Last Name",required:!0}),r.a.createElement(h,{buttonName:"SIGN UP"})))}}]),t}(r.a.Component)),N=(a(21),function(){return r.a.createElement("div",{className:"thankyouComponent"},r.a.createElement("p",{className:"congratsText"},"congratulations!"),r.a.createElement("div",{className:""},r.a.createElement("p",{className:"thankyouText"},"Thank You For Signing Up!"),r.a.createElement("p",{className:"newsText"},"Look out for the latest news on your favorite shows.")))}),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,email:"",emailError:!1,firstName:"",firstNameError:!1,lastName:"",lastNameError:!1},a.next=function(){var e=a.state.step;a.setState({step:e+1})},a.handleChange=function(e){return function(t){a.setState(Object(p.a)({},e,t.target.value))}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t={email:e.email,emailError:e.emailError,firstName:e.firstName,firstNameError:e.firstNameError,lastName:e.lastName,lastNameError:e.lastNameError};switch(this.state.step){case 1:return r.a.createElement(f,{next:this.next,email:t.email,error:t.emailError,changeEvent:this.handleChange});case 2:return r.a.createElement(E,{next:this.next,fName:t.firstName,fNameError:t.firstNameError,lName:t.lastName,lNameError:t.lastNameError,changeEvent:this.handleChange});case 3:return r.a.createElement(N,null);default:return}}}]),t}(n.Component),b=(a(23),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(d,null))}}]),t}(n.Component));c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(26)}},[[9,2,1]]]);
//# sourceMappingURL=main.7e96dbf4.chunk.js.map