import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

let posts = [
    { id: '0', title: 'First Post', content: 'This is the content of the first post.' },
    { id: '1', title: 'Second Post', content: 'This is the content of the second post.' },
];

app.get('/', (req, res) => {
    res.render('html', { posts });
});

app.get('/edit', (req, res) => {

    const id = req.query.id;
    const p = posts[id];
    res.render('edit', {p});
});


app.get('/delete', (req, res) => {
    const id = req.query.id;
    posts.splice(id,1);
    res.redirect('/');
});

app.post('/create', (req, res) => {
    const { title, content } = req.body;

    const newPost = {
        id: (posts.length).toString(),
        title,
        content,
    };
    posts.push(newPost);
    res.redirect('/');
});
app.post('/edit', (req, res) => {
    const { title, content } = req.body;

    const newPost = {
        id: (posts.length).toString(),
        title,
        content,
    };
    posts.push(newPost);
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  