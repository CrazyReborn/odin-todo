const ProjectManager = (() => {
  const projectList = [];
  const addProject = (project) => {
    projectList.push(project);
  };
  const removeProject = (project) => {
    const projectIndex = projectList.indexOf(project);
    projectList.splice(projectIndex, 1);
  };
  const findProjectIndex = (project) => {
    projectList.indexOf(project);
  };
  return {
    projectList,
    addProject,
    removeProject,
    findProjectIndex,
  };
})();

const Project = (title, description, dueDate, priority) => {
  const taskList = [];
  const addTask = (task) => {
    taskList.push(task);
  };
  const removeTask = (task) => {
    const index = taskList.indexOf(task);
    taskList.splice(index, 1);
  };
  return {
    title,
    description,
    dueDate,
    priority,
    taskList,
    addTask,
    removeTask,
  };
};

const Task = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
});

export { ProjectManager, Project, Task };
