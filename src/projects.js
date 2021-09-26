import { defTask } from "./tasks";


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
})();

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


/*
const projectList = [];

const Project = (title, description, dueDate, priority) => {
    function add(){
        projectList.push(this);
    };
    function remove() {
        let index = projectList.indexOf(this);
        projectList.splice(index, 1);
    };
    const taskList = [];
    function addToTaskList(task) {
        taskList.push(task);
    }
    return { title, description, dueDate, priority, add, remove , taskList, addToTaskList};
};

const defPro = Project('aaaa', 'bbbbb', 'ccccc', '3');
defPro.add();

export { Project, projectList, defPro }
*/