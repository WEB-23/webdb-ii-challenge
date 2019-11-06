const express = require('express');

const db = require('./data/db-config.js');

const router = express();

router.get('/', (req, res) => {
	db('cars')
		.then((cars) => {
			res.status(200).json(cars);
		})
		.catch((err) => {
			console.log(err);
			res.status(200).json({ error: 'unable to get cars' });
		});
});

router.get('/:id', (req, res) => {
	db('cars')
		.where('id', '=', req.params.id)
		.first()
		.then((car) => {
			res.status(200).json(car);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: 'unable to get car with that id' });
		});
});

router.post('/', (req, res) => {
	db('cars')
		.insert(req.body, 'id')
		.into('cars')
		.then((ids) => {
			res.status(200).json(ids);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: 'unable to insert car' });
		});
});

module.exports = router;
