const express = require("express"); 
const path = require("path");
const bodyParser = require("body-parser");

const tasks = require("./routes/tasks"); // ini nanti akan deksekusi di http://localhost:3000/api/tasks
const cors = require("cors");

const port = 3000; //local host 3000

const app = express();
app.use(cors());

// Set Static untuk frondend
app.use(express.static(path.join(__dirname, "client")));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", tasks); //http://localhost:3000/api/

app.listen(port, function() {
  console.log("Server mulai di port " + port); // console port yang sedang berjalan
});
