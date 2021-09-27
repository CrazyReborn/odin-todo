import { updateProjectListDom, createProjectDom, updateTasksDom, createTaskDom } from './dom-manipulator';

const run = (() => {
    updateProjectListDom();
    createProjectDom(); // use forms
    createTaskDom();    //use forms
    updateTasksDom();
})();
