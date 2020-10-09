const express = require("express");
const router = express.Router();

const candidateRoutes = require("./candidateRoutes");
const partyRoutes = require("./partyRoutes");
const voterRouter = require("./voterRoutes");
const voteRoutes = require("./voteRoutes");

router.use(candidateRoutes);
router.use(partyRoutes);
router.use(voterRouter);
router.use(voteRoutes);
module.exports = router;
