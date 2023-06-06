const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer')
        const data = jwt.verify(token, 'secret')
        const user = await User.findOne({ _id: data._id })
        if (!user) {
            throw new Error()
        }
        req.user = user 
        next()
    } catch (error) {
        res.status(401).send('Not authorized user')
    }
}

exports.createUser = async (req, res) => {
    exports.createUser = async (req,res) => {
        try{
            const user = new User(req.body)
            await user.save()
            const token = await user.generateAuthToken()
            res.json({user, token})
        }catch(error){
            res.status(400).json({message: error.message})
        }
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            res.status(400).send('Invalid login credentials looser')
        } else {
            const token = await user.generateAuthToken()
            res.json({ user, token})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


exports.updateUser = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const user = await User.findOne({ _id: req.params.id })
        updates.forEach(update => user[update] = req.body[update])
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUser = async (res, res) => {
    try {
        await req.user.deleteOne()
        res.json({ message: 'User Deleted'})
    } catch (error) {
        res.status(400).jason({message: error.message})
    }
}

exports.logoutUser = async (req, res) => {
    try {
        if (err) { return next(err) }
        res.redirect('/')
        const token = null
        res.json({ user, token })
    } catch (error) {
        res.status(421).json({ message: error.message })
    }
}

exports.listUsers = async (req, res) => {
    try {
        const listUsers = await User.find({})
        res.render('/Index', {
            user: listUsers
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}