const app = require("./app");

require("./config/database");


app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
