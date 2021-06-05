document.addEventListener("DOMContentLoaded", () => {


    const todos = []
      // "laundry": {
      //   name: "",
      //   priority: "",
      //   dueDate: ""
      // }

    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      todos.push({
        name: document.getElementById("new-task-description").value,
        priority: document.getElementById('new-task-priority').value,
        dueDate: document.getElementById('new-task-date').value,
      })
      newTaskForm.reset()


      renderTodos(todos)

      // const elem = document.createElement('li')
      // elem.textContent = document.getElementById("new-task-description").value
      // elem.contentEditable = true
      // elem.style.color = getBackgroundColorBasedOnPriority(document.getElementById('new-task-priority').value)

      // document.getElementById('new-task-date').value

      // // add delete button
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'X'
      deleteBtn.addEventListener('click', () => {
        elem.remove()
      })

      // elem.appendChild(deleteBtn)
      // document.getElementById("tasks").appendChild(elem)

      // newTaskForm.reset()
    });
});

function getBackgroundColorBasedOnPriority(priority) {
  switch (priority.toLowerCase()) {
    case "high":
      return "red"
    case "medium":
      return "yellow"
    case "low":
      return "green"
  }
}

function renderTodos(todos) {
  const parent = document.getElementById('tasks')
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild)
  }

  todos.sort((a, b) => {
    return a.dueDate.localeCompare(b.dueDate)
  })

  todos.forEach(todo => {
    const elem = document.createElement('li')
    elem.textContent = todo.name + ` - ${todo.dueDate}`
    elem.contentEditable = true
    elem.style.color = getBackgroundColorBasedOnPriority(todo.priority)

    // // add delete button
    // const deleteBtn = document.createElement('button')
    // deleteBtn.textContent = 'X'
    // deleteBtn.addEventListener('click', () => {
    //   elem.remove()
    // })
    // elem.appendChild(deleteBtn)

    document.getElementById("tasks").appendChild(elem)
  })
}
