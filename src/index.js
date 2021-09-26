import { ProjectManager, Project, Task } from './projects';
import { updateProjectListDom, createProjectDom, deleteProjectDom } from './dom-manipulator';

const run = (() => {
    updateProjectListDom();
    createProjectDom();
})();
