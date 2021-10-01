import './style.css';
import { updateProjectListDom, createProjectDom, updateTasksDom, createTaskDom, selectionTracker } from './dom-manipulator';
import { checkStorage, storage } from './localstorage-function';
import { checkTimeLeft } from './check-time-left';
import { toDate, parseISO, formatDistanceToNow } from 'date-fns';

const run = (() => {
    checkStorage();
    updateProjectListDom();
    createProjectDom();
    updateTasksDom();
    createTaskDom();
    console.log(selectionTracker);
})();
