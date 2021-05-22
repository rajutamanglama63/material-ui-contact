import React, { useState } from 'react'

import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import ContactTable from '../components/ContactTable'

const Contact = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    } 

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <Header />
            <ContactTable open={open} handleClose={handleClose} handleOpen={handleOpen}/>
            <ContactForm open={open} handleClose={handleClose} />
        </div>
    )
}

export default Contact
