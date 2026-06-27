const tasks = [];
let nextTaskId = 1;

function createTask(taskData) {
  const task = {
    id: nextTaskId,
    title: taskData.title,
    status: taskData.status,
  };

  nextTaskId += 1;
  tasks.push(task);

  return task;
}

function getAllTasks() {
  return [...tasks];
}

function getTaskById(id) {
  return tasks.find((task) => task.id === id) || null;
}

function updateTask(id, updates) {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...updates,
  };

  return tasks[taskIndex];
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  const [deletedTask] = tasks.splice(taskIndex, 1);
  return deletedTask;
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
