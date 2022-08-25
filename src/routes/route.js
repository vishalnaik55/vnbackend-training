const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController");
const { newAuthorModel } = require('../controllers/newAuthorController');
const {oldPublisher} = ("../controllers/publisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/oldPublisher", publisherController.oldPublisher)

router.post("/newAuthor", newAuthorController.newAuthor)

router.post("/newBookModelvs", newBookController.newBookModelvs)

module.exports = router;