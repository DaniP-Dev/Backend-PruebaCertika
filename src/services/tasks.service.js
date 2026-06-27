const tasksRepository = require("../repositories/tasks.repository");

const ALLOWED_STATUS = ["pending", "completed"];

function createHttpError(statusCode, name, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.name = name;
  return error;
}

function normalizeTaskId(id) {
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw createHttpError(400, "InvalidTaskId", "Task id must be a positive integer");
  }

  return parsedId;
}

function validateTitle(title) {
  if (typeof title !== "string" || title.trim() === "") {
    throw createHttpError(400, "InvalidTitle", "Title is required");
  }
}

function validateStatus(status) {
  if (!ALLOWED_STATUS.includes(status)) {
    throw createHttpError(
      400,
      "InvalidStatus",
      "Status must be pending or completed"
    );
  }
}

function getTaskByIdOrThrow(id) {
  const task = tasksRepository.getTaskById(id);

  if (!task) {
    throw createHttpError(404, "TaskNotFound", "Task not found");
  }

  return task;
}

function createTask(taskData) {
  validateTitle(taskData.title);

  if (taskData.status !== undefined) {
    validateStatus(taskData.status);
  }

  return tasksRepository.createTask({
    title: taskData.title.trim(),
    status: taskData.status !== undefined ? taskData.status : "pending",
  });
}

function listTasks() {
  return tasksRepository.getAllTasks();
}

function getTaskById(id) {
  const normalizedId = normalizeTaskId(id);
  return getTaskByIdOrThrow(normalizedId);
}

function updateTask(id, taskData) {
  const normalizedId = normalizeTaskId(id);
  const currentTask = getTaskByIdOrThrow(normalizedId);
  validateTitle(taskData.title);

  if (taskData.status !== undefined) {
    validateStatus(taskData.status);
  }

  return tasksRepository.updateTask(normalizedId, {
    title: taskData.title.trim(),
    status: taskData.status !== undefined ? taskData.status : currentTask.status,
  });
}

function completeTask(id) {
  const normalizedId = normalizeTaskId(id);
  const currentTask = getTaskByIdOrThrow(normalizedId);

  return tasksRepository.updateTask(normalizedId, {
    title: currentTask.title,
    status: "completed",
  });
}

function deleteTask(id) {
  const normalizedId = normalizeTaskId(id);
  getTaskByIdOrThrow(normalizedId);
  return tasksRepository.deleteTask(normalizedId);
}

module.exports = {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  completeTask,
  deleteTask,
};
