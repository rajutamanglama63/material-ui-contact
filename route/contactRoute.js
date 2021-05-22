const express = require("express");
const mongoose = require("mongoose");

const Contact = require("../model/contact");

const router = express.Router();


router.get('/allContacts', async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

router.post('/createContact', async(req, res) => {
    const {name, address, phoneNumber, email} = req.body;

    try {
        const newContact = new Contact({name, address, phoneNumber, email});

        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({msg : error.message});
    }
});

router.delete('/delete/:id', async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).send('incorrect id');
    }
    await Contact.findByIdAndDelete(id);
    res.status(200).json({msg : "contact delected successfully."});
});

module.exports = router;