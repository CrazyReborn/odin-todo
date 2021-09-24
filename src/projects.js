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

const defaulProject = Project('aaaa', 'bbbb', 'cccc', 'ddddd');
defaulProject.add();

export {Project, projectList};