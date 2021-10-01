import './style.css';
import { updateProjectListDom, createProjectDom, updateTasksDom, createTaskDom, selectionTracker, changeShowStatusProjects, changeShowStatusTasks } from './dom-manipulator';
import { checkStorage, } from './localstorage-function';

const run = (() => {
    checkStorage();
    updateProjectListDom();
    createProjectDom();
    updateTasksDom();
    createTaskDom();
    changeShowStatusProjects();
    changeShowStatusTasks();
})();
