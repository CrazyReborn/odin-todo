import { formatDistanceToNow, parseISO } from 'date-fns';

const checkTimeLeft = (() => {
  const task = (taskObject) => {
    const { dueDate } = taskObject;
    return formatDistanceToNow(parseISO(dueDate));
  };
  const project = (projectObject) => {
    const { dueDate } = projectObject;
    return formatDistanceToNow(parseISO(dueDate));
  };
  return {
    task,
    project,
  };
})();

export { checkTimeLeft };
