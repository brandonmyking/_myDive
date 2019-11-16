const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dives = require('../models/dives');

const router = express.Router();

router.use(bodyParser.json());

// Admin privileges only to access dives of all members
router.route('/')
    .get((req, res, next) => {
        Dives.find({})
        .then(dives => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dives);
        }, err => next(err))
        .catch(err => next(err));
    })
    .put((req, res, next) => {
        res.status(403)
        .end('PUT operation not supported on /dives');
    })
    .post((req, res, next) => {
        Dives.create(req.body)
        .then(dive => {
            console.log('Dish Created ', dive);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dive);
        }, err => next(err))
        .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Dives.remove({})
        .then(resp => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, err => next(err))
        .catch(err => next(err));
});

    
router.route('/:userId')
    .get((req,res,next) => {
        Dives.findById(req.params.userId)
        .then(dive => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dive);
        }, err => next(err))
        .catch(err => next(err));
    })

    .post((req,res,next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /dives/${req.params.id}`);
    })

    .put((req,res,next) => {
        Dives.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, { new: true })
        .then(dive => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dive);
        }, err => next(err))
        .catch(err => next(err));
    })
    .delete((req,res,next) => {
        Dives.findByIdAndRemove(req.params.userId)
        .then(resp => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, err => next(err))
        .catch(err => next(err));
});


router.route('/:userId/diveId')
    .get((req,res,next) => {
        Dives.findById(req.params.userId)
        .then(dive => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dive);
        }, err => next(err))
        .catch(err => next(err));
    })
    
    .post((req,res,next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /dives/${req.params.id}`);
    })
    
    .put((req,res,next) => {
        Dives.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, { new: true })
        .then(dive => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dive);
        }, err => next(err))
        .catch(err => next(err));
    })
    .delete((req,res,next) => {
        Dives.findByIdAndRemove(req.params.userId)
        .then(resp => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, err => next(err))
        .catch(err => next(err));
});

module.exports = router;