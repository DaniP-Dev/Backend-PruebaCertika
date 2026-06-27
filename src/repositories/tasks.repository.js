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

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
