const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Users = require('../models/user');

const router = express.Router();

router.use(bodyParser.json());

/* GET dives listing. */
router.route('/')
    .get((req, res, next) => {
        Users.find({})
        .then(users => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }, err => next(err))
        .catch(err => next(err));
    })
    .put((req, res, next) => {
        res.status(403)
        .end('PUT operation not supported on /users');
    })
    .post((req, res, next) => {
        Users.create(req.body)
        .then(user => {
            console.log('Dish Created ', user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, err => next(err))
        .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Users.remove({})
        .then(resp => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, err => next(err))
        .catch(err => next(err));
});

module.exports = router;
