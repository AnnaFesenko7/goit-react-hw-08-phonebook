"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[500],{4100:function(t,n,e){e.r(n),e.d(n,{default:function(){return V}});var c="ViewContact_formPage__3PJyP",r="ViewContact_title__dnTrt",a="ViewContact_button__MdN+m",s="ViewContact_massage__mXcuQ",i="ViewContact_wrapper__vWQHt",o=(e(3158),e(6373)),l="ContactsList_contactsList__ZQI1L",u="Contact_contactsListItem__fd6WW",d="Contact_contactsListName__qtXbK",_="Contact_contactsListBtn__QuzOb",f=e(9434),h=e(5036),m=e(184);var v=function(t){var n=t.contact,e=t.key,c=n.id,r=(0,f.I0)();return(0,m.jsxs)("li",{className:u,children:[(0,m.jsx)("p",{className:d,children:n.name}),(0,m.jsx)("p",{className:d,children:n.phone}),(0,m.jsx)("button",{className:_,onClick:function(){return r(h.deleteContact(c))},children:"Delete"})]},e)},x=e(4141);function j(){var t=(0,f.v9)(x.Jr);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("ul",{className:l,children:t.map((function(t){return(0,m.jsx)(v,{contact:t},t.id)}))})})}var C="Filter_form__wVnxJ",p="Filter_label__vEd1E",N="Filter_input__N7T3z",g=e(5984),w=e(4443);function L(){var t=(0,g.x0)(),n=(0,f.v9)((function(t){return t.filter})),e=(0,f.I0)();return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("label",{className:p,htmlFor:t}),"Find contact by name:",(0,m.jsx)("input",{id:t,className:N,type:"text",value:n,onChange:function(t){return e(w.M6(t.target.value))}})]})}var b=e(2791),k=e(24),y=e(3504);function V(){var t=(0,f.I0)();(0,b.useEffect)((function(){t(k.m.fetchContacts())}),[t]);var n=(0,f.v9)(k.l.mk),e=(0,f.v9)(k.l.Wu),l=(0,f.v9)(k.l.HL);return(0,m.jsxs)("div",{className:c,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{className:a,children:(0,m.jsx)(y.OL,{to:"/addcontact",children:"Add Contact"})}),(0,m.jsx)("h1",{className:r,children:"View Contact"}),(0,m.jsxs)("div",{className:s,children:[0===n.length&&(0,m.jsx)("p",{children:"No contacts saved yet"}),l&&(0,m.jsx)("p",{children:l.message})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(L,{}),(0,m.jsx)("div",{className:i,children:0!==n.length?(0,m.jsx)(j,{}):""}),e&&(0,m.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)(o.g4,{height:"100",width:"100",color:"red",ariaLabel:"loading"})})]})]})}},4141:function(t,n,e){e.d(n,{HL:function(){return s},Jr:function(){return i},Wu:function(){return a},mk:function(){return r}});var c=e(6916),r=function(t){return t.contacts.items},a=function(t){return t.contacts.loading},s=function(t){return t.contacts.error},i=(0,c.P1)([r,function(t){return t.contacts.filter}],(function(t,n){var e=n.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}))},24:function(t,n,e){e.d(n,{l:function(){return r},m:function(){return c}});var c=e(5036),r=e(4141)}}]);
//# sourceMappingURL=500.ee21d6fd.chunk.js.map