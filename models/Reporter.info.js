const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReporterSchema = new Schema({
    rname: {
        type: String,
        required: true
    },
    rnum: {
        type: String,
        required: true,
        unique: true
    },
    r_androidid: {
        type: String,
        required: true,
        unique: true
    },
    r_loc_lat: {
        type: String,
        required: true
    },
    r_loc_lon: {
        type: String,
        required: true
    },
    r_device: {
        type: String,
        required: true
    },
    r_carrier: {
        type: String,
        required: true
    },
    r_network: {
        type: String,
        required: true
    },
})

const Reporter = mongoose.model('reporter',ReporterSchema)

module.exports = Reporter