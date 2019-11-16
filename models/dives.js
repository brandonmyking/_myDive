const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diveSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    totalTime: {
        type: Number,
        required: true
    },
    letter: {
        type: String,
        required: true
    },
    ndl: {
        type: Boolean,
        required: true
    },
    ndlExplain: {
        type: String,
    },
    purpose: {
        type: String,
        required: true
    }

});

const Dives = mongoose.model('Dive', diveSchema);

module.exports = Dives;