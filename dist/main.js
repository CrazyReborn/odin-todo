(()=>{"use strict";const e=(()=>{const e=[];return{projectList:e,addProject:t=>{e.push(t)},removeProject:t=>{const n=e.indexOf(t);e.splice(n,1)}}})(),t=(e,t,n,o)=>{const c=[];return{title:e,description:t,dueDate:n,priority:o,taskList:c,addTask:function(e){c.push(e)},removeTask:function(e){let t=c.indexOf(e);c.splice(t,1)}}},n=t("Buy PS5","Add 100 dollars to a save account each month","11-11-2022","1");e.addProject(n);function o(){document.querySelector("#project-container").innerHTML="",e.projectList.forEach(((t,n)=>{const o=document.createElement("div"),c=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),d=document.createElement("button"),u=document.createElement("button");o.classList.add("project-div"),d.classList.add("delete-button"),u.classList.add("show-tasks-button"),o.setAttribute("project-id",n),console.log(e.projectList),u.textContent="Show Related Tasks",d.textContent="Delete This Project",c.textContent=`Title: ${t.title}`,r.textContent=`Description: ${t.description}`,a.textContent=`Due Date: ${t.dueDate}`,i.textContent=`Priority: ${t.priority}`,o.append(c,r,a,i,d,u),document.querySelector("#project-container").appendChild(o)})),document.querySelectorAll(".delete-button").forEach((t=>{t.addEventListener("click",(t=>{const n=e.projectList[t.target.parentElement.getAttribute("project-id")];e.removeProject(n),o()}))})),document.querySelectorAll(".show-tasks-button").forEach((t=>{t.addEventListener("click",(t=>{document.querySelector("#task-container").innerHTML="",e.projectList[t.target.parentElement.getAttribute("project-id")].taskList.forEach(((e,t)=>{const n=document.createElement("div"),o=document.createElement("p"),c=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("button");n.classList.add("task-div"),i.classList.add("delete-task-button"),n.setAttribute("task-id",t),i.textContent="Delete This Task",o.textContent=`Title: ${e.title}`,c.textContent=`Description: ${e.description}`,r.textContent=`Due Date: ${e.dueDate}`,a.textContent=`Priority: ${e.priority}`,n.append(o,c,r,a,i),document.querySelector("#task-container").appendChild(n)}))}))}))}n.addTask({title:"Create Account",description:"Create a saving accout",dueDate:"11-11-2021",priority:"1"}),o(),document.querySelector("#submit-project").addEventListener("click",(n=>{const c=t(document.querySelector("#project-title-value").value,document.querySelector("#project-discription-value").value,document.querySelector("#project-due-date-value").value,document.querySelector('input[name="project-priority"]:checked').value);e.addProject(c),o(),n.preventDefault()}))})();