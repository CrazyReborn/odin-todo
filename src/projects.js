const ProjectManager = (() => {
    const projectList = [];
    const addProject = (project) => {
        projectList.push(project);
    }
    const removeProject = (project) => {
        const projectIndex = projectList.indexOf(project);
        projectList.splice(projectIndex, 1);
    }
    const findProjectIndex = (project) => {
        projectList.indexOf(project);
    }
    return {
        projectList,
        addProject,
        removeProject,
        findProjectIndex
    };
})();

const Project = (title, description, dueDate, priority) => {
    const taskList = [];
    const addTask = (task) => {
        taskList.push(task);
    };
    const removeTask = (task) => {
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

const defaultProject = Project('Buy PS5', 'Add 100 dollars to a save account each month', '11-11-2022', '1');
ProjectManager.addProject(defaultProject);
const defaulTask = Task ('Create Account', 'Create a saving accout', '11-11-2021', '1');
defaultProject.addTask(defaulTask);

export {ProjectManager, Project, Task, defaultProject};