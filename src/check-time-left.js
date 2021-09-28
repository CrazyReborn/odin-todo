import { formatDistanceToNow, toDate, parseISO } from "date-fns"



const checkTimeLeft = (()=> {
    const task = (taskObject) => {
        const dueDate = toDate(parseISO(taskObject.dueDate));
        return formatDistanceToNow(dueDate);
    }
    const project = (projectObject) => {
        const dueDate = toDate(parseISO(projectObject.dueDate));
        return formatDistanceToNow(dueDate);
    }
    return {
        task,
        project,
    }
})();

export {checkTimeLeft};