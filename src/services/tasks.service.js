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

module.exports = {
  createTask,
  listTasks,
  getTaskById,
};
