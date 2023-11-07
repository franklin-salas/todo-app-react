const LocalStorageRepository = {
    saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    loadTasks() {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    },
  };

  export default LocalStorageRepository;