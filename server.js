const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, "public/index.html"));
})

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
