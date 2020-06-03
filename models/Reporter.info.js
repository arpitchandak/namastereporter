const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReporterSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true

    },
    ng_address: {
        type: String,
        required: true,
    },
    ng_district:{
        type: String,
        required: true
    },
    ng_email: {
        type: String,
        required: true,
        unique: true
    },
    ng_name: {
        type: String,
        required: true
    },
    ng_pageviews:{
        type: Object
    },
    ng_phone_number: {
        type: String,
        required: true
    },
    ng_schedular: {
        type: String,
        required: true
    },
    ng_start_date: {
        type: String,
        required: true
    },
    ng_state: {
        type: String,
        required: true
    },
    ng_town:{
        type: String,
        required: true
    },
    ng_town_pin:{
        type: String,
        required: true
    },
    ng_type:{
        type: String,
        required: true
    },
    ng_updated_date:{
        type: Number,
        required: true
    },

    
})

const Reporter = mongoose.model('reporter',ReporterSchema)

module.exports = Reporter