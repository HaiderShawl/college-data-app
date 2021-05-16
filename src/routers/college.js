const express = require('express')
const College = require('../models/college')
const router = new express.Router()

router.post('/colleges', async (req,res) => {
    try {
        console.log(req.body)
        var features = {
            state:0,
            type: 0,
            total_intl_UG: 0,
            fin_aid: 0,
            aid_intl_UG:0,
            avg_aid:0,
            tuition:0
        }

        var labels = {
            state:'hidden',
            type: 'hidden',
            total_intl_UG: 'hidden',
            fin_aid: 'hidden',
            aid_intl_UG:'hidden',
            avg_aid:'hidden',
            tuition:'hidden'
        }
        
        req.body.features.forEach(i => {
            delete features[i]
            labels[i] = ''
        });

        console.log(features,labels)

        const colleges = await College.find({ name: ['Harvard College', 'Stanford University'] }, features)
        console.log(colleges)
        res.render('index', {
            colleges,
            labels
        })
    } catch (e) {
        res.status(400).send(e)
    }


})

module.exports = router