var express = require("express");
const {
  getListings,
  addListings,
  getListItem,
  updateListItem,
  deleteListItem,
} = require("../controller/listings");
var router = express.Router();

/* get lsiting */
router.get("/", getListings);

/* post lsiting */
router.post("/", addListings);

// SingleLIstItem

/* get lsitItem */
router.get("/:id", getListItem);

/* update lsitItem */
router.patch("/:id", updateListItem);
/* delete lsitItem */
router.delete("/:id", deleteListItem);

module.exports = router;
