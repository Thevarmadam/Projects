const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const homeList = [];
const workList = [];
const day = date.getDate();

let listTitled = '';

app.get("/", function(req, res) {
  listTitled = "Home";
  res.render("list", {
    kindofday: day,
    ListArray: homeList,
    listTitle: "Home"
  })
});


app.post("/", function(req, res) {

  const item = req.body.ListItem;
  if (item !== '') {
    let typeOfList = req.body.item
    if (typeOfList === "Work") {
      workList.push(item);
      res.redirect("/work");
    } else {
      homeList.push(item);
      res.redirect("/");
    }
  } else {
    console.log("nothing is Entered");
    if (listTitled == "Work") {
      res.redirect("/work")
    } else {
      res.redirect("/")
    }
  }
});

app.get("/work", function(req, res) {
  listTitled = "Work";
  res.render("list", {
    kindofday: day,
    ListArray: workList,
    listTitle: "Work"
  });
});




app.listen(8000, function() {
  console.log("Server Started at 8000");
})
