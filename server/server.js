let express = require("express");
let bodyParser = require("body-parser");

let users = require("./routes/users");
let cors = require("cors");

let port = 5000;

let app = express();
app.use(cors());

// Body Parser MW
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// User Routes
app.use("/users", users);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
