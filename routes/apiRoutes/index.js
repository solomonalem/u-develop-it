const express = require("express");
const router = express.Router();

const candidateRoutes = require("./candidateRoutes");
const partyRoutes = require("./partyRoutes");
const voterRouter = require("./voterRoutes");

router.use(candidateRoutes);
router.use(partyRoutes);
router.use(voterRouter);

module.exports = router;
