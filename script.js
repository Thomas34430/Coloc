document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    // Simulons des tâches existantes
    const tasks = [
        { task: "Nettoyer la cuisine", assignee: "person1" },
        { task: "Passer l'aspirateur", assignee: "person2" },
        { task: "Faire les courses", assignee: "person3" },
    ];

    const taskList = document.getElementById("task-list");

    tasks.forEach((t) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${t.task} - Assignée à ${getAssigneeName(t.assignee)}`;
        taskList.appendChild(listItem);
    });
}

function assignTask() {
    const taskInput = document.getElementById("task");
    const assigneeSelect = document.getElementById("assignee");
    const taskList = document.getElementById("task-list");

    if (taskInput.value && assigneeSelect.value) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskInput.value} - Assignée à ${getAssigneeName(assigneeSelect.value)}`;
        taskList.appendChild(listItem);

        // Réinitialise les champs après avoir ajouté une tâche
        taskInput.value = "";
        assigneeSelect.selectedIndex = 0;
    }
}

function getAssigneeName(assignee) {
    switch (assignee) {
        case "person1":
            return "Personne 1";
        case "person2":
            return "Personne 2";
        case "person3":
            return "Personne 3";
        default:
            return "Non assignée";
    }
}
