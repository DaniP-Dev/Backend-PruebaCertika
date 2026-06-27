const { Router } = require("express");
const tasksController = require("../controllers/tasks.controller");

const router = Router();

router.post("/", tasksController.createTask);
router.get("/", tasksController.listTasks);
router.get("/:id", tasksController.getTaskById);

module.exports = router;
