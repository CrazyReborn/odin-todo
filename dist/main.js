(()=>{"use strict";const e=[],t=(t,n,c,o)=>({title:t,description:n,dueDate:c,priority:o,add:function(){e.push(this)},remove:function(){let t=e.indexOf(this);e.splice(t,1)}});t("Default","Defaul description","11.11.2222",4).add(),document.querySelector("#submit-project").addEventListener("click",(n=>{const c=document.createElement("div"),o=document.createElement("p"),r=document.createElement("p"),u=document.createElement("p"),d=document.createElement("p"),i=t(document.querySelector("#project-title-value").value,document.querySelector("#project-discription-value").value,document.querySelector("#project-due-date-value").value,document.querySelector('input[name="project-priority"]:checked').value);i.add(),c.setAttribute("project-id",e.indexOf(i)),console.log(e),o.textContent=i.title,r.textContent=i.description,u.textContent=i.dueDate,d.textContent=i.priority,c.append(o,r,u,d),document.querySelector("#project-container").appendChild(c),n.preventDefault()}))})();