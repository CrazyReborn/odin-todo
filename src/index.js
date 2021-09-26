import { Project, projectList, defPro } from './projects';
import { updateProjectListDom, createProjectDom } from './dom-manipulator';
import { Task, defTask } from './tasks';

const run = (() => {
    updateProjectListDom();
    createProjectDom();
})();
