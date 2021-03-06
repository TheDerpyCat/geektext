const pool = require('./connection.js')
const db = require('./connection')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () =>
{
	console.log("Server is now listening at port 3000")
})

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API' })
});
  
app.get('/users', db.getUsers);
app.get('/users/:object_id', db.getUserById);

app.post('/users/new', db.postUser);


/*
  Book Browsing and Sorting Features
*/
pool.connect();

//filters books in database by user chosen genre
app.get('/book', (req, res) => {
	pool.query(`Select * from book`, (err, result) => {
		if (!err) {
			res.send(result.rows);
		}
		else {
			res.send(err);
		}
	});
	pool.end;
})

//filters books in database by user chosen genre
app.get('/book/genre/:bookgenre', (req, res) => {
	pool.query(`Select * from book where bookgenre ='${req.params.bookgenre}'`, (err, result) => {
		if (!err) {
			res.send(result.rows);
		}
		else {
			res.send(err);
		}
	});
	pool.end;
})

//filters books by top 10 most sold in descending order
app.get('/book/copiessold', (req, res) => {
	pool.query(`Select * from book order by copiessold desc limit 10`, (err, result) => {
		if (!err) {
			res.send(result.rows);
		}
		else {
			res.send(err);
		}
	});
	pool.end;
})

//retrieves all books from database in pages of x books at a time
app.get('/book/:numofbook/:pagenum', (req, res) => {
	pool.query(`Select * from book limit '${req.params.numofbook}' offset'${(req.params.pagenum * req.params.numofbook) - req.params.numofbook}'`, (err, result) => {
		if (!err) {
			res.send(result.rows);
		}
		else {
			res.send(err);
		}
	});
	pool.end;
})
