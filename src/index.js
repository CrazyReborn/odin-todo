import { updateProjectListDom, createProjectDom, updateTasksDom, createTaskDom } from './dom-manipulator';
import { defaultProject, defaultTask } from './projects';
import { checkTimeLeft } from './check-time-left';
import { toDate, parseISO, formatDistanceToNow } from 'date-fns';

const run = (() => {
    updateProjectListDom();
    createProjectDom(); // use forms
    createTaskDom();    //use forms
    updateTasksDom();
})();
