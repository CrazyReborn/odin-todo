(()=>{"use strict";const e=[],t=(t,n,c,o)=>({title:t,description:n,dueDate:c,priority:o,add:function(){e.push(this)},remove:function(){let t=e.indexOf(this);e.splice(t,1)}});document.querySelector("#submit-project").addEventListener("click",(n=>{const c=document.createElement("div"),o=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),l=document.createElement("button");l.classList.add("delete-project"),l.addEventListener("click",(t=>{e.splice(t.target.parentElement.getAttribute("project-id"),1),console.log(e),t.target.parentElement.remove()})),l.textContent="Delete This Project";const u=t(document.querySelector("#project-title-value").value,document.querySelector("#project-discription-value").value,document.querySelector("#project-due-date-value").value,document.querySelector('input[name="project-priority"]:checked').value);u.add(),c.setAttribute("project-id",e.indexOf(u)),console.log(e),o.textContent=u.title,r.textContent=u.description,i.textContent=u.dueDate,d.textContent=u.priority,c.append(o,r,i,d,l),document.querySelector("#project-container").appendChild(c),n.preventDefault()}))})();