import { ProjectManager, Project, Task } from "./projects";
import { checkTimeLeft } from "./check-time-left";
import { updateProjectListDom } from "./dom-manipulator";


const storage = (() => {
    let projects = [];
    const update = () => {
        localStorage.clear;
        localStorage.setItem(`projects`, JSON.stringify(ProjectManager.projectList));
    }
    const load = () => {
        projects = JSON.parse(localStorage.getItem(`projects`));
        projects.forEach(element => {
            ProjectManager.addProject(element);
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