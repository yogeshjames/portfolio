import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/fuckyou", (req, res) => {
  res.render("about.ejs");
});
app.get("/mff", (req, res) => {
  res.render("contact.ejs");
});

app.use(express.static("public"));

app.post("/contact", (req, res) => {
  res.render("index.ejs", { san : req.body.name});
 // console.log(req.body);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
