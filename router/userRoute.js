const router = require('express').Router();

const controller = require("../controller/userController")

router
    .post("/", controller.createUser)
    .get("/", controller.getUsers)
    .get("/:id", controller.getUser)
    .put("/:id", controller.updateUser)
    .delete("/:id", controller.deleteUser);

module.exports = router;