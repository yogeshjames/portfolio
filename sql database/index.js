import express from "express";
import bodyParser from "body-parser";
import  pg  from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123456",
  port: 5432,
});


db.connect();
let quiz =[
];
db.query("SELECT * FROM capital", (err,res) => {
  if (err) {
    console.error("error executing query", err.stack);
  } else {
    quiz=res.rows;
    console.log(quiz[1].capital);
}
  db.end();
});

const app = express();
const port = 3000;

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect=0;
  await newt();
  res.render("index.ejs",{question : currentQuestion.name});
});
 

// POST a new post
app.post("/submit", async (req, res) => {
  let ans = req.body.answer;
  console.log(ans);
  if(ans === currentQuestion.capital){
    totalCorrect++;
    newt();
    res.render("index.ejs",{question : currentQuestion.name,totalScore : totalCorrect,wasCorrect : "True"});
  }
  else{
     newt();
    res.render("index.ejs",{question : currentQuestion.name,wasCorrect : "false"});
  }
});


  async function newt (){
    const bhg = quiz[Math.floor(Math.random() * quiz.length)];

    currentQuestion=bhg;
  }

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
