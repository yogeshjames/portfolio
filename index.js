import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "Failed to make request",
    });
  }
  
});

app.post("/", async (req, res) => {
  const c= req.body.type;
  const v = req.body.participants;
  try {
    const response = await axios.get('https://bored-api.appbrewery.com/filter?type='+c +'&participants='+v);
    const result = response.data;
    res.render("index.ejs", { data: result[Math.floor(Math.random() * result.length)] });
  } catch (error) {
    console.error("No activities that match your criteria:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria:"
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
