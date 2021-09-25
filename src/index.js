import { Project, projectList, defPro } from './projects';
import { updateProjectListDom, createProjectDom } from './dom-manipulator';

const run = (() => {
    updateProjectListDom();
    createProjectDom();
})();
