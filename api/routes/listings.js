var express = require("express");
const {
  addListings,
  getListItem,
  updateListItem,
  deleteListItem,
  uploadListItem,
  getListItemId,
} = require("../controller/listings");
const verifyToken = require("../middleware/jwt");
const upload = require("../middleware/multer.js");
var router = express.Router();

/* get lsiting */
router.get("/", getListItem);

/* post lsiting */
router.post("/", verifyToken, addListings);

// SingleLIstItem

/* get lsitItem */
router.get("/:id", getListItemId);

/* update lsitItem */
router.patch("/:id", updateListItem);
/* delete lsitItem */
router.delete("/:id", deleteListItem);

// Posting property Images
router.post(
  "/upload/:id",
  verifyToken,
  upload.array("images", 12),
  uploadListItem
);

module.exports = router;
