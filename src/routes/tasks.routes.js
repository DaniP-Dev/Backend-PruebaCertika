const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    message: "Tasks endpoints scaffolded. CRUD implementation pending.",
  });
});

module.exports = router;
