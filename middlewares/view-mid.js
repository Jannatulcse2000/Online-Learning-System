const exphbs = require("express-handlebars");
const hbs_sections = require("express-handlebars-sections");
module.exports = (app)=> {
  app.engine(
    "hbs",
    exphbs.engine({
      defaultLayout: "main.hbs",
      extname: ".hbs",
      layoutsDir: "views/layouts",
      partialsDir: "views/_partials",
      helpers: {
        section: hbs_sections(),      
      },
    })
  );
  app.set("view engine", "hbs");
};