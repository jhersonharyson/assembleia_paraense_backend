const router = require("express").Router();

router.get  ("/register-push-notification", require('./../controller/registerPushNotification.js').getTokens);
router.post ("/register-push-notification", require('./../controller/registerPushNotification.js').postToken);

export default router;
