const { Router } = require("express");
const tasksController = require("../controllers/tasks.controller");

const router = Router();

router.post("/", tasksController.createTask);
router.get("/", tasksController.listTasks);
router.get("/:id", tasksController.getTaskById);
router.put("/:id", tasksController.updateTask);
router.patch("/:id", tasksController.updateTask);
router.patch("/:id/complete", tasksController.completeTask);
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
