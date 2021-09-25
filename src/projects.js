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

const defPro = Project('aaaa', 'bbbbb', 'ccccc', '3');
defPro.add();

export { Project, projectList, defPro }