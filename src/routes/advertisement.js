const router = require("express").Router();

router.get ("/advertisement/:id",        require('./../controller/advertisement.js').getAdvertisement);
router.get ("/advertisements",           require('./../controller/advertisement.js').getAdvertisements);
router.post("/advertisements",           require('./../controller/advertisement.js').postAdvertisements);
router.post("/advertisements/search",    require('./../controller/advertisement.js').searchAdvertisements);

export default router;
