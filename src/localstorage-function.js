import { ProjectManager, Project, Task } from "./projects";
import { checkTimeLeft } from "./check-time-left";
import { updateProjectListDom } from "./dom-manipulator";


const storage = (() => {
    let projects = [];
    const update = () => {
        localStorage.clear;
        localStorage.setItem('projects', JSON.stringify(ProjectManager.projectList));
    }
    const load = () => {
        projects = JSON.parse(localStorage.getItem('projects'));
        projects.forEach(project => {
            const newProject = project;
            newProject.addTask = (task) => {
                this.taskList.push(task);
            };
            newProject.removeTask = (task) => {
                let index = taskList.indexOf(task);
                this.taskList.splice(index, 1);
            };
            ProjectManager.addProject(newProject);
        })
        }
    return {
        projects,
        update,
        load,
    }
})();

const checkStorage = () => {
    if (localStorage.length == 0) {
        const defaultProject = Project('Buy PS5', 'Add 100 dollars to a save account each month', '2022-11-11', '1');
        ProjectManager.addProject(defaultProject);
        const defaulTask = Task('Create Account', 'Create a saving accout', '2021-11-11', '1');
        defaultProject.addTask(defaulTask);
    }
    else {
        storage.load();
    }
};

export { storage, checkStorage };