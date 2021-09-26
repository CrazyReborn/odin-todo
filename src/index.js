import { updateProjectListDom, createProjectDom, updateProjectTasksListDom } from './dom-manipulator';

const run = (() => {
    updateProjectListDom();
    createProjectDom();
})();
