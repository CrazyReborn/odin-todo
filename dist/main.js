(()=>{"use strict";const e=(()=>{const e=[];return{projectList:e,addProject:t=>{e.push(t)},removeProject:t=>{const n=e.indexOf(t);e.splice(n,1)},findProjectIndex:t=>{e.indexOf(t)}}})(),t=(e,t,n,o)=>{const c=[];return{title:e,description:t,dueDate:n,priority:o,taskList:c,addTask:e=>{c.push(e)},removeTask:e=>{let t=c.indexOf(e);c.splice(t,1)}}},n=(e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o}),o=t("Buy PS5","Add 100 dollars to a save account each month","11-11-2022","1");e.addProject(o);const c=n("Create Account","Create a saving accout","11-11-2021","1");o.addTask(c);const r={index:0};function d(){document.querySelector("#project-container").innerHTML="",e.projectList.forEach(((t,n)=>{const o=document.createElement("div"),c=document.createElement("p"),r=document.createElement("p"),d=document.createElement("p"),a=document.createElement("p"),i=document.createElement("button"),u=document.createElement("button");o.classList.add("project-div"),i.classList.add("delete-button"),u.classList.add("show-tasks-button"),o.setAttribute("project-id",n),console.log(e.projectList),u.textContent="Show Related Tasks",i.textContent="Delete This Project",c.textContent=`Title: ${t.title}`,r.textContent=`Description: ${t.description}`,d.textContent=`Due Date: ${t.dueDate}`,a.textContent=`Priority: ${t.priority}`,o.append(c,r,d,a,i,u),document.querySelector("#project-container").appendChild(o)})),document.querySelectorAll(".delete-button").forEach((t=>{t.addEventListener("click",(t=>{const n=e.projectList[t.target.parentElement.getAttribute("project-id")];e.removeProject(n),d()}))})),document.querySelectorAll(".show-tasks-button").forEach((t=>{t.addEventListener("click",(t=>{document.querySelector("#task-container").innerHTML="";const n=e.projectList[t.target.parentElement.getAttribute("project-id")].taskList;r.index=t.target.parentElement.getAttribute("project-id"),console.log(r.index),n.forEach(((e,t)=>{const n=document.createElement("div"),o=document.createElement("p"),c=document.createElement("p"),r=document.createElement("p"),d=document.createElement("p"),a=document.createElement("button");n.classList.add("task-div"),a.classList.add("delete-task-button"),n.setAttribute("task-id",t),a.textContent="Delete This Task",o.textContent=`Title: ${e.title}`,c.textContent=`Description: ${e.description}`,r.textContent=`Due Date: ${e.dueDate}`,d.textContent=`Priority: ${e.priority}`,n.append(o,c,r,d,a),document.querySelector("#task-container").appendChild(n)}))}))})),function(){const e=document.createElement("button");e.setAttribute("id","add-project-button"),e.textContent="Click To Add New Project",document.querySelector("#project-container").appendChild(e)}()}d(),document.querySelector("#submit-project").addEventListener("click",(n=>{const o=t(document.querySelector("#project-title-value").value,document.querySelector("#project-discription-value").value,document.querySelector("#project-due-date-value").value,document.querySelector('input[name="project-priority"]:checked').value);e.addProject(o),d(),n.preventDefault()})),document.querySelector("#submit-task").addEventListener("click",(t=>{const o=n(document.querySelector("#task-title-value").value,document.querySelector("#task-discription-value").value,document.querySelector("#task-due-date-value").value,document.querySelector('input[name="task-priority"]:checked').value);e.projectList[r.index].addTask(o),document.querySelector("#task-container").innerHTML="",e.projectList[r.index].taskList.forEach(((e,t)=>{const n=document.createElement("div"),o=document.createElement("p"),c=document.createElement("p"),r=document.createElement("p"),d=document.createElement("p"),a=document.createElement("button");n.classList.add("task-div"),a.classList.add("delete-task-button"),n.setAttribute("task-id",t),a.textContent="Delete This Task",o.textContent=`Title: ${e.title}`,c.textContent=`Description: ${e.description}`,r.textContent=`Due Date: ${e.dueDate}`,d.textContent=`Priority: ${e.priority}`,n.append(o,c,r,d,a),document.querySelector("#task-container").appendChild(n)})),t.preventDefault()}))})();