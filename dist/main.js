(()=>{"use strict";const e={title:"Test Title",description:"Test Description",add:function(){taskList.push(this)},remove:function(){let e=taskList.indexOf(this);taskList.splice(e,1)}};n.addToTaskList(e);const t=[],c=(e,c,n,o)=>{const r=[];return{title:e,description:c,dueDate:n,priority:o,add:function(){t.push(this)},remove:function(){let e=t.indexOf(this);t.splice(e,1)},taskList:r,addToTaskList:function(e){r.push(e)}}},n=c("aaaa","bbbbb","ccccc","3");function o(){document.querySelector("#project-container").innerHTML="",t.forEach(((e,c)=>{const n=document.createElement("div");n.classList.add("project-div");const o=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),u=document.createElement("button");u.classList.add("delete-button"),u.textContent="Delete This Project",n.setAttribute("project-id",c),console.log(t),o.textContent=e.title,r.textContent=e.description,i.textContent=e.dueDate,d.textContent=e.priority,n.append(o,r,i,d,u),document.querySelector("#project-container").appendChild(n)})),document.querySelectorAll(".delete-button").forEach((e=>{e.addEventListener("click",(e=>{t[e.target.parentElement.getAttribute("project-id")].remove(),o()}))})),document.querySelectorAll(".project-div").forEach((e=>{e.addEventListener("click",(e=>{r=t[e.target.getAttribute("project-id")],console.log(r)}))}))}let r;n.add(),o(),document.querySelector("#submit-project").addEventListener("click",(e=>{c(document.querySelector("#project-title-value").value,document.querySelector("#project-discription-value").value,document.querySelector("#project-due-date-value").value,document.querySelector('input[name="project-priority"]:checked').value).add(),o(),e.preventDefault()}))})();