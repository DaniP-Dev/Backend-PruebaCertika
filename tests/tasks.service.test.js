jest.mock("../src/repositories/tasks.repository", () => ({
  createTask: jest.fn(),
  getAllTasks: jest.fn(),
  getTaskById: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}));

const tasksRepository = require("../src/repositories/tasks.repository");
const tasksService = require("../src/services/tasks.service");

function expectHttpError(executable, expected) {
  try {
    executable();
  } catch (error) {
    expect(error.statusCode).toBe(expected.statusCode);
    expect(error.name).toBe(expected.name);
    expect(error.message).toBe(expected.message);
    return;
  }

  throw new Error("Expected function to throw an HTTP error");
}

describe("tasks.service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createTask", () => {
    test("creates a task with default pending status", () => {
      tasksRepository.createTask.mockReturnValue({
        id: 1,
        title: "My task",
        status: "pending",
      });

      const result = tasksService.createTask({ title: "   My task   " });

      expect(tasksRepository.createTask).toHaveBeenCalledWith({
        title: "My task",
        status: "pending",
      });
      expect(result).toEqual({
        id: 1,
        title: "My task",
        status: "pending",
      });
    });

    test("fails with InvalidTitle when title is invalid", () => {
      expectHttpError(() => tasksService.createTask({ title: "   " }), {
        statusCode: 400,
        name: "InvalidTitle",
        message: "Title is required",
      });
      expect(tasksRepository.createTask).not.toHaveBeenCalled();
    });

    test("fails with InvalidStatus when status is invalid", () => {
      expectHttpError(
        () =>
          tasksService.createTask({
            title: "Task with wrong status",
            status: "in-progress",
          }),
        {
          statusCode: 400,
          name: "InvalidStatus",
          message: "Status must be pending or completed",
        }
      );
      expect(tasksRepository.createTask).not.toHaveBeenCalled();
    });
  });

  describe("getTaskById", () => {
    test("fails with InvalidTaskId when id is invalid", () => {
      expectHttpError(() => tasksService.getTaskById("abc"), {
        statusCode: 400,
        name: "InvalidTaskId",
        message: "Task id must be a positive integer",
      });
      expect(tasksRepository.getTaskById).not.toHaveBeenCalled();
    });

    test("fails with TaskNotFound when task does not exist", () => {
      tasksRepository.getTaskById.mockReturnValue(null);

      expectHttpError(() => tasksService.getTaskById(999), {
        statusCode: 404,
        name: "TaskNotFound",
        message: "Task not found",
      });
      expect(tasksRepository.getTaskById).toHaveBeenCalledWith(999);
    });
  });

  describe("completeTask", () => {
    test("changes task status to completed", () => {
      tasksRepository.getTaskById.mockReturnValue({
        id: 1,
        title: "Pending task",
        status: "pending",
      });
      tasksRepository.updateTask.mockReturnValue({
        id: 1,
        title: "Pending task",
        status: "completed",
      });

      const result = tasksService.completeTask(1);

      expect(tasksRepository.getTaskById).toHaveBeenCalledWith(1);
      expect(tasksRepository.updateTask).toHaveBeenCalledWith(1, {
        title: "Pending task",
        status: "completed",
      });
      expect(result).toEqual({
        id: 1,
        title: "Pending task",
        status: "completed",
      });
    });
  });
});
