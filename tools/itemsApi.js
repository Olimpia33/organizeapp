let express = require('express');
let router = express.Router();
let parser = require('body-parser');

let tasks  = [
  {id: 1, item: 'item 1'},
  {id: 2, item: 'item 2'},
  {id: 3, item: 'item 3'},
  {id: 4, item: 'item 4'}
];

let notes = [
  {id: 1, item: 'item 1'},
  {id: 2, item: 'item 2'},
  {id: 3, item: 'item 3'},
  {id: 4, item: 'item 4'}
];

router.get('/tasks', function(req, res) {
	res.json(tasks);
});

router.get('/notes', function(req, res) {
  res.json(notes);
});

module.exports = router;
