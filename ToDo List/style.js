function deleteTask(index) {
    const listItem = document.querySelectorAll('#taskList li')[index];
    listItem.classList.add('fade-out');
    setTimeout(() => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }, 300); // Match duration with fadeOut animation
  }