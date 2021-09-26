const ProjectManager = (() => {
    const projectList = [];
    const addProject = (project) => {
        projectList.push(project);
    }
    const removeProject = (project) => {
        const projectIndex = projectList.indexOf(project);
        projectList.splice(projectIndex, 1);
    }
    return {
        projectList,
        addProject,
        removeProject,
    };
});

const Project = (title, description, dueDate, priority) => {
    const taskList = [];
    function addTask(task){
        taskList.push(task);
    };
    function removeTask(task) {
        let index = taskList.indexOf(task);
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

const Task = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
    };
};

export {ProjectManager, Project, Task};