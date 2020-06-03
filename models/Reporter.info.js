const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReporterSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true

    },
    content: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    postid: {
        type: String,
        required: true,
        unique: true
    },
    report_by: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    total_views: {
        type: Number,
        required: true
    },
    updated_date:{
        type: Number,
        required: true
    },
    uploaded_by:{
        type: String,
        required: true
    },
    uploaded_date:{
        type: Number,
        required: true
    },
    total_claps:{
        type: Number,
        required: true
    },
    total_shares:{
        type: Number,
        required: true
    }
    
})

const Reporter = mongoose.model('reporter',ReporterSchema)

module.exports = Reporter