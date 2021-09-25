
function deleteProjectDom() {
    document.querySelector('.delete-button').addEventListeners('click', e=> {
        projectList[e.target.parentElement.getAttribute('project-id')].remove();
        updateProjectListDom;
    })
}