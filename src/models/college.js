const mongoose = require('mongoose')


const College = mongoose.model('colleges', {
    name: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    total_intl_UG: {
        type: String,
        trim: Number
    },
    fin_aid: {
        type: String,
        trim: true
    },
    aid_intl_UG: {
        type: String,
        trim: true
    }, 
    avg_aid: {
        type: String,
        trim: true
    },
    tuition: {
        type: String,
        trim: true
    },
})


module.exports = College