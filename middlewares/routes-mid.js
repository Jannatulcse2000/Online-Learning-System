const restrict = require("../middlewares/auth-mid");
const controller = require("../controller/homepage-controller");


module.exports = function (app) {
  app.get("/", restrict.isGuestOrUser,controller.getHomepage);
  app.use("/account", require("../routes/account-route"));
  app.use("/admin", restrict.isAdmin, require("../routes/admin/admin-route"));
  app.use("/teacher",restrict.isTeacher,require("../routes/teacher/teacher-route"));
};