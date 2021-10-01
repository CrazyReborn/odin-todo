import { ProjectManager, Project, Task } from './projects';
import { checkTimeLeft } from './check-time-left';
import { storage } from './localstorage-function';

const selectionTracker = (() => {
    const index = 0;
    return { index };
})();

function updateProjectListDom() {
    document.querySelector('#project-container').innerHTML = '';
    ProjectManager.projectList.forEach((object, index) => {
        const newProjectDiv = document.createElement('div');
        const newProjectTitle = document.createElement('p');
        const newProjectDesc = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const newProjectPriority = document.createElement('p');
        const newProjectDeleteButton = document.createElement('button');
        const newProjectShowTasksButton = document.createElement('button');

        newProjectDiv.classList.add('project-div');
        newProjectDeleteButton.classList.add('delete-button');
        newProjectShowTasksButton.classList.add('show-tasks-button');
        newProjectDiv.setAttribute('project-id', index);

        newProjectShowTasksButton.textContent = 'Show Related Tasks';
        newProjectDeleteButton.textContent = 'Delete This Project';
        newProjectTitle.textContent = `Title: ${object.title}`;
        newProjectDesc.textContent = `Description: ${object.description}`;
        newProjectDueDate.textContent = `Due Date: ${object.dueDate}. You have ${checkTimeLeft.project(object)} left.`;
        newProjectPriority.textContent = `Priority: ${object.priority}`;

        newProjectDiv.append(newProjectTitle, newProjectDesc, newProjectDueDate, newProjectPriority, newProjectDeleteButton, newProjectShowTasksButton);
        document.querySelector('#project-container').appendChild(newProjectDiv);

    })
    deleteProjectDom();
    showTasks();
    addNewProjectButton();
}

function createProjectDom() {             //this works for the form; should be remade into a popup form. Also don't forget to remove event listener;
    document.querySelector('#submit-project').addEventListener('click', e => {
        const newProject = Project(document.querySelector('#project-title-value').value,
            document.querySelector('#project-discription-value').value,
            document.querySelector('#project-due-date-value').value,
            document.querySelector('input[name="project-priority"]:checked').value);
        ProjectManager.addProject(newProject);
        document.querySelector('#project-submit-form').style.display = 'none';


        updateProjectListDom();
        document.querySelector('#task-container').innerHTML = '';
        storage.update();
        e.preventDefault();
    })
};

function createTaskDom() {
    document.querySelector('#submit-task').addEventListener('click', e => {
        const newTask = Task(document.querySelector('#task-title-value').value,
            document.querySelector('#task-discription-value').value,
            document.querySelector('#task-due-date-value').value,
            document.querySelector('input[name="task-priority"]:checked').value);
        ProjectManager.projectList[selectionTracker.index].addTask(newTask);
        updateTasksDom();
        document.querySelector('#task-submit-form').style.display = 'none';
        storage.update();
        e.preventDefault();
        
    })
};

function deleteProjectDom() {
    const allDeleteButtons = document.querySelectorAll('.delete-button');
    allDeleteButtons.forEach(button => {
        button.addEventListener('click', e => {
            const projectToRemove = ProjectManager.projectList[e.target.parentElement.getAttribute('project-id')];
            ProjectManager.removeProject(projectToRemove);
            storage.update();
            updateProjectListDom();
            updateTasksDom();
            
        })
    })
};

function deleteTaskDom() {
    const allDeleteButtons = document.querySelectorAll('.delete-task-button');
    allDeleteButtons.forEach(button => {
        button.addEventListener('click', e => {
            const projectToRemoveFrom = ProjectManager.projectList[selectionTracker.index];
            const taskToRemove = ProjectManager.projectList[selectionTracker.index].taskList[e.target.parentElement.getAttribute('task-id')];
            projectToRemoveFrom.removeTask(taskToRemove);
            updateTasksDom();
            storage.update();
        })
    })
}

function addNewProjectButton() {
    const theButton = document.createElement('button');
    theButton.setAttribute('id', 'add-project-button');
    theButton.textContent = 'Click To Add New Project';
    document.querySelector('#project-container').appendChild(theButton);
    theButton.addEventListener('click', e => {
        document.querySelector('#project-submit-form').style.display = 'flex';
    })
    cancelProjectSubmition();
};

function updateTasksDom() {
    document.querySelector('#task-container').innerHTML = '';
    const selectedProject = ProjectManager.projectList[selectionTracker.index];
    if(selectedProject.taskList) {
    selectedProject.taskList.forEach((element, index) => {
        const newTaskDiv = document.createElement('div');
        const newTaskTitle = document.createElement('p');
        const newTaskDesc = document.createElement('p');
        const newTaskDueDate = document.createElement('p');
        const newTaskPriority = document.createElement('p');
        const newTaskDeleteButton = document.createElement('button');

        newTaskDiv.classList.add('task-div');
        newTaskDeleteButton.classList.add('delete-task-button');
        newTaskDiv.setAttribute('task-id', index);

        newTaskDeleteButton.textContent = 'Delete This Task';
        newTaskTitle.textContent = `Title: ${element.title}`;
        newTaskDesc.textContent = `Description: ${element.description}`;
        newTaskDueDate.textContent = `Due Date: ${element.dueDate}. You have ${checkTimeLeft.task(element)} left.`;
        newTaskPriority.textContent = `Priority: ${element.priority}`;

        newTaskDiv.append(newTaskTitle, newTaskDesc, newTaskDueDate, newTaskPriority, newTaskDeleteButton);
        document.querySelector('#task-container').appendChild(newTaskDiv);

    })
    deleteTaskDom();
    addNewTaskButton();
}
};

function addNewTaskButton() {
    const newTaskButton = document.createElement('button');
    newTaskButton.setAttribute('id', 'add-task-button');
    newTaskButton.textContent = 'Click To Add New Task';
    document.querySelector('#task-container').appendChild(newTaskButton);
    newTaskButton.addEventListener('click', e=> {
        document.querySelector('#task-submit-form').style.display = 'flex';
    })
    cancelTaskSubmition();
}

function showTasks() {
    const allShowTaskButtons = document.querySelectorAll('.show-tasks-button');
    allShowTaskButtons.forEach(button => {
        button.addEventListener('click', e => {
            document.querySelector('#task-container').innerHTML = '';                       ///delete the divs content
            const selectedTaskList = ProjectManager.projectList[e.target.parentElement.getAttribute('project-id')].taskList;    ///get the task list to render
            selectionTracker.index = e.target.parentElement.getAttribute('project-id');


            selectedTaskList.forEach((element, index) => {
                const newTaskDiv = document.createElement('div');
                const newTaskTitle = document.createElement('p');
                const newTaskDesc = document.createElement('p');
                const newTaskDueDate = document.createElement('p');
                const newTaskPriority = document.createElement('p');
                const newTaskDeleteButton = document.createElement('button');

                newTaskDiv.classList.add('task-div');
                newTaskDeleteButton.classList.add('delete-task-button');
                newTaskDiv.setAttribute('task-id', index);

                newTaskDeleteButton.textContent = 'Delete This Task';
                newTaskTitle.textContent = `Title: ${element.title}`;
                newTaskDesc.textContent = `Description: ${element.description}`;
                newTaskDueDate.textContent = `Due Date: ${element.dueDate}. You have ${checkTimeLeft.task(element)} left.`;
                newTaskPriority.textContent = `Priority: ${element.priority}`;

                newTaskDiv.append(newTaskTitle, newTaskDesc, newTaskDueDate, newTaskPriority, newTaskDeleteButton);
                document.querySelector('#task-container').appendChild(newTaskDiv);
            })
            addNewTaskButton();
            deleteTaskDom();
        })
    })
}

function cancelProjectSubmition() {
    document.querySelector('#cancel-project-submition').addEventListener('click', e => {
        document.querySelector('#project-submit-form').style.display = 'none';
        e.preventDefault();
    })
}

function cancelTaskSubmition() {
    document.querySelector('#cancel-task-submition').addEventListener('click', e => {
        document.querySelector('#task-submit-form').style.display = 'none';
        e.preventDefault();
    })
}

function changeShowStatusProjects() {
    let status = 'show';
    document.querySelector('#show-hide-projects').addEventListener('click', e=> {
        if (status == 'show') {
            document.querySelector('#project-container').style.display = 'none';
            status = 'hide';
        }
        else {
            document.querySelector('#project-container').style.display = 'flex';
            status = 'show';
        }
    })
}

function changeShowStatusTasks() {
    let status = 'show';
    document.querySelector('#show-hide-tasks').addEventListener('click', e=> {
        if (status == 'show') {
            document.querySelector('#task-container').style.display = 'none';
            status = 'hide';
        }
        else {
            document.querySelector('#task-container').style.display = 'flex';
            status = 'show';
        }
    })
}

export { updateProjectListDom, createProjectDom, deleteProjectDom, showTasks, updateTasksDom, selectionTracker, createTaskDom, changeShowStatusProjects, 
    changeShowStatusTasks};