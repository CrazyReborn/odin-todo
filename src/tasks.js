import { defPro } from "./projects";

const Task = (title, description) => {
    function add() {
        taskList.push(this);
    }
    function remove() {
        let index = taskList.indexOf(this);
        taskList.splice(index, 1);
    }
    return {title, description, add, remove}
};

const defTask = Task('Test Title', 'Test Description');
defPro.addToTaskList(defTask);
export { Task }