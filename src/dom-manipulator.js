import { Project, projectList, defaultProject } from './projects';

function createProjectDom() {
        document.querySelector('#submit-project').addEventListener('click', e=> {
        const newProjectDiv = document.createElement('div');
        const newProjectTitle = document.createElement('p');
        const newProjectDesc = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const newProjectPriority = document.createElement('p');

        const newProject = Project(document.querySelector('#project-title-value').value, 
                                   document.querySelector('#project-discription-value').value, 
                                   document.querySelector('#project-due-date-value').value, 
                                   document.querySelector('input[name="project-priority"]:checked').value);
        newProject.add();
        newProjectDiv.setAttribute('project-id', projectList.indexOf(newProject));
        console.log(projectList);

        newProjectTitle.textContent = newProject.title;
        newProjectDesc.textContent = newProject.description;
        newProjectDueDate.textContent = newProject.dueDate;
        newProjectPriority.textContent = newProject.priority;

        newProjectDiv.append(newProjectTitle, newProjectDesc, newProjectDueDate, newProjectPriority);
        document.querySelector('#project-container').appendChild(newProjectDiv);
        e.preventDefault();
    })
}


export {createProjectDom};