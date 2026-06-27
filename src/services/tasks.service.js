const tasksRepository = require("../repositories/tasks.repository");

function createTask(taskData) {
  return tasksRepository.createTask({
    title: taskData.title,
    status: "pending",
  });
}

function listTasks() {
  return tasksRepository.getAllTasks();
}

function getTaskById(id) {
  return tasksRepository.getTaskById(id);
}

function updateTask(id, taskData) {
  const currentTask = tasksRepository.getTaskById(id);

  if (!currentTask) {
    return null;
  }

  return tasksRepository.updateTask(id, {
    title: taskData.title !== undefined ? taskData.title : currentTask.title,
    status: taskData.status !== undefined ? taskData.status : currentTask.status,
  });
}

function completeTask(id) {
  const currentTask = tasksRepository.getTaskById(id);

  if (!currentTask) {
    return null;
  }

  return tasksRepository.updateTask(id, {
    title: currentTask.title,
    status: "completed",
  });
}

function deleteTask(id) {
  return tasksRepository.deleteTask(id);
}

module.exports = {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  completeTask,
  deleteTask,
};
