const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")

const authMiddleware = require("./auth/authMiddleware");

const userRoutes = require("./routes/userRoutes");
const boardRoutes = require("./routes/boardRoutes")
router.use(bodyParser.urlencoded({extended: false}))

router.route("/").get((req, res)=>{
        res.status(200).json({location: "At Focused Kanban Root."})
    })



router.use("/account", userRoutes)
router.use("/boards", authMiddleware, boardRoutes)

module.exports = router;
