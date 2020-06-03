const express =require('express')
const router = express.Router()
const httperror = require('http-errors')
const Product = require('../models/Reporter.info')

router.get('/',async (req,res,next) => {

    try {
        const result = await Product.find({} , {__v: 0})
        if(!result){
            throw httperror(404, "Database is empty..")
        }
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }

})

router.post('/',async (req,res,next) => {

    try {
        const product = new Product(req.body)
        const result = await product.save()
        res.send(result)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})

router.get('/:id',async (req,res,next) => {

    const phone = req.params.id
    try {
        const result = await Product.find({rnum : phone})
        if(!result){
            throw httperror(404, "Invalid Id..")
        }
        res.send(result)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})


router.delete('/:id',async (req,res,next) => {
    const id = req.params.id
    try {
        const result = await Product.findByIdAndDelete(id)
        if(!result){
            throw httperror(404, "Invalid Id..")
        }
        res.send(result)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})


router.patch('/:id',async (req,res,next) => {
    try {
        const id = req.params.id
        const update = req.body
        const options = {new: true}
        const result = await Product.findByIdAndUpdate(id,update,options)
        if(!result){
            throw httperror(500, "Invalid Id..Can't update")
        }
        res.send(result)
    } catch (error) {
        console.log(error.message)
        next(error)
    }})

module.exports = router
