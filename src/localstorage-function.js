import { ProjectManager, Project, Task } from "./projects";
import { checkTimeLeft } from "./check-time-left";


const storage = (() => {
    const projects = [];
    const update = () => {
        projects.splice(0, projects.length);
        ProjectManager.projectList.forEach(project => {
            projects.push(JSON.stringify(project));
        })
        localStorage.setItem(`projects`, `${projects}`);
        console.log(`projects array: ${projects}`);
    }

    /*
    const load = () => {
        const a = localStorage.getItem(`projects`);
        projects.push = JSON.parse(a);
        }
        */
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
    }
};

export { storage, checkStorage };