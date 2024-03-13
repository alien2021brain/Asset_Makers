var express = require("express");
const {
  getComments,
  addComment,

  updateComment,
  deleteComment,
} = require("../controller/comments");
var router = express.Router();

/* get comments */
router.get("/", getComments);

// SingleComment

/* update lsitItem */
router.post("/:listId", addComment);

/* update lsitItem */
router.patch("/:listId", updateComment);
/* delete lsitItem */
router.delete("/:listId", deleteComment);

module.exports = router;
