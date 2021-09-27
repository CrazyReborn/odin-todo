import { updateProjectListDom, createProjectDom, createTaskDom } from './dom-manipulator';

const run = (() => {
    updateProjectListDom();
    createProjectDom(); // use forms
    createTaskDom();    //use forms
})();
