import { formatDistanceToNow, toDate, parseISO } from "date-fns"



const checkTimeLeft = (() => {
    const task = (taskObject) => {
        const dueDate = taskObject.dueDate;
        return formatDistanceToNow(parseISO(dueDate));
    }
    const project = (projectObject) => {
        const dueDate = projectObject.dueDate;
        return formatDistanceToNow(parseISO(dueDate));
    }
    return {
        task,
        project,
    }
})();

export { checkTimeLeft };