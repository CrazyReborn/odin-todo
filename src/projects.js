const projectList = [];
const Project = (title, description, dueDate, priority) => {
    function add(){
        projectList.push(this);
    };
    function remove() {
        let index = projectList.indexOf(this);
        projectList.splice(index, 1);
    };
    return { title, description, dueDate, priority, add, remove };
};

const defaultProject = Project('Default', 'Defaul description', '11.11.2222', 4);
defaultProject.add();

export { Project, projectList, defaultProject }