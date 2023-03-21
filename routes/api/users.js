import express from "express";
const router = express.Router(); // router object

router.get("/test", (req, res) => {
  res.json({msg: "This is test route"});
});

export const users = router;