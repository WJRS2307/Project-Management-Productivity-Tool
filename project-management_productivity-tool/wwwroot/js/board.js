dragula([document.querySelector('#todocontent'), document.querySelector('#pendingcontent'), document.querySelector('#completedcontent')]);




function createTask() {
    var memberValue = $("#members").val();
    console.log(memberValue);
    var taskNameValue = $('#task-name').val();
    console.log(taskNameValue);
    var dueDateValue = $('#due').val();
    var dueDateValue = dueDateValue.split("-").reverse().join("/")
    console.log(dueDateValue);
    var descriptionValue = $('#description-text').val().replace(/\r?\n/g, "\r\n");
    console.log(descriptionValue);

    $('#todocol').append(`
    <div class="kanban-task" id="task" draggable="true" ondragstart="dragstart_handler(event)">
        <ul>
            <li>${taskNameValue}</li>
            <li>
                <div class="kanban-task-row">
                <div class="kanban-task-row2">
                    <div>Due Date: ${dueDateValue}</div>
                </div>
                <div><img src="./assets//icons/archive.svg" /></div>
                <div></div>
            </li>
            <li>
                <div class="kanban-task-row">
                <div class="kanban-task-row2">
                    <div><img src="./assets/icons/ellipseassign.svg"></div>
                </div>
                <div class="kanban-task-row3">
                    <div><img src="assets/icons/fork.svg"></div>
                    <div><img src="assets/icons/plus.svg"></div>
                    <div><img src="assets/icons/meatball.svg"></div>
                </div>
                <div></div>
            </li>
        </ul>
    </div>
    `)
    document.querySelectorAll('div[class=kanban-task]')
        .forEach((el, i) => el.id = `task-${i}`);
}

function createTask2() {
    var memberValue = $("#members-2").val();
    console.log(memberValue);
    var taskNameValue = $('#task-name-2').val();
    console.log(taskNameValue);
    var dueDateValue = $('#due-2').val();
    var dueDateValue = dueDateValue.split("-").reverse().join("/")
    console.log(dueDateValue);
    var descriptionValue = $('#description-text-2').val().replace(/\r?\n/g, "\r\n");
    console.log(descriptionValue);

    $('#pendingcol').append(`
    <div class="kanban-task-2" id="task" draggable="true" ondragstart="dragstart_handler(event)">
        <ul>
            <li>${taskNameValue}</li>
            <li>
                <div class="kanban-task-row">
                <div class="kanban-task-row2">
                    <div>Due Date: ${dueDateValue}</div>
                </div>
                <div><img src="./assets//icons/archive.svg" /></div>
                <div></div>
            </li>
            <li>
                <div class="kanban-task-row">
                <div class="kanban-task-row2">
                    <div><img src="./assets/icons/ellipseassign.svg"></div>
                </div>
                <div class="kanban-task-row3">
                    <div><img src="assets/icons/fork.svg"></div>
                    <div><img src="assets/icons/plus.svg"></div>
                    <div><img src="assets/icons/meatball.svg"></div>
                </div>
                <div></div>
            </li>
        </ul>
    </div>
    `)
    document.querySelectorAll('div[class=kanban-task-2]')
        .forEach((el, i) => el.id = `task-2-${i}`);
}

$('#create-task-button').click(function () {
    createTask();
})

$('#create-task-button-2').click(function () {
    createTask2();
})