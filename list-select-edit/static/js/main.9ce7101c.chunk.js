(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),c=n.n(o),s=n(7),r=n(3),l=n(4),u=n(6),h=n(5),m=n(8),d=function(e){var t=e.label,n=e.isSelected,a=e.onCheckboxChange,o=e.disable;return i.a.createElement("div",{className:"form-check"},i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",name:t,checked:n,onChange:a,className:"form-check-input",disabled:o}),t))},b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).showPreview=function(){n.setState({isPreviewShown:!0})},n.cancelPreview=function(){n.setState({isPreviewShown:!1})},n.clearSelection=function(e){n.setState(function(e){var t=e.options;return t.forEach(function(e){e.isChecked=!1}),{options:t}})},n.handleCheckboxChange=function(e){var t=e.target.name,a=e.target.checked;n.setState(function(e){var n=e.options;return{options:n=n.map(function(e){return e.value===t?Object(s.a)({},e,{isChecked:a}):e})}})},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state.options.filter(function(e){return e.isChecked});n.setState({selectedOptions:t,isPreviewShown:!1})},n.state={isPreviewShown:!1,options:[{id:1,value:"Checkbox 1",isChecked:!0},{id:2,value:"Checkbox 2",isChecked:!0},{id:3,value:"Checkbox 3",isChecked:!0},{id:4,value:"Checkbox 4",isChecked:!0},{id:5,value:"Checkbox 5",isChecked:!1}],selectedOptions:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.options.filter(function(e){return e.isChecked});this.setState({selectedOptions:e,isPreviewShown:!1})}},{key:"selectedBoxCount",value:function(){return this.state.options.filter(function(e){return e.isChecked})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"mt-5"},i.a.createElement("div",{className:"display-box"},this.state.selectedOptions.length>0?this.state.selectedOptions.map(function(e){return i.a.createElement("div",{key:e.id}," ",e.value," ")}):null,this.state.isPreviewShown?null:i.a.createElement("button",{type:"button",className:"btn btn-outline-primary mt-3 w-25",onClick:this.showPreview}," Edit ")),this.state.isPreviewShown?i.a.createElement("div",{className:"preview-box"},i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("div",{className:"row ml-0 mb-4"},i.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"}," Save "),i.a.createElement("button",{type:"button",className:"btn btn-outline-primary ml-1",onClick:this.clearSelection}," Clear "),i.a.createElement("button",{type:"button",className:"btn btn-outline-primary ml-1",onClick:this.cancelPreview}," Cancel ")),this.state.options.map(function(t){return i.a.createElement(d,{label:t.value,isSelected:t.isChecked,onCheckboxChange:e.handleCheckboxChange,key:t.id,disable:4===e.selectedBoxCount().length})}))):null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9ce7101c.chunk.js.map