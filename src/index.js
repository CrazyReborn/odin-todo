import { ProjectManager, Project, Task } from './projects';
import { updateProjectListDom, createProjectDom } from './dom-manipulator';
import { deleteProjectDom } from './delete-project-dom';

const run = (() => {
    updateProjectListDom();
    createProjectDom();
})();
