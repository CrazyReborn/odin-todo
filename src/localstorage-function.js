import { ProjectManager, Project, Task } from "./projects";


const storage = (() => {
    const projects = [];
    const update = () => {
        projects.splice(0, projects.length);
        ProjectManager.projectList.forEach(project => {
            projects.push(JSON.stringify(project));
        })
    }
    return {
        projects,
        update,
    }
})();

const checkStorage = () => {
    if (storage.projects) {
        const defaultProject = Project('Buy PS5', 'Add 100 dollars to a save account each month', '2022-11-11', '1');
        ProjectManager.addProject(defaultProject);
        const defaulTask = Task('Create Account', 'Create a saving accout', '2021-11-11', '1');
        defaultProject.addTask(defaulTask);
    }
    else {
        return false;
    }
};

export { storage, checkStorage };