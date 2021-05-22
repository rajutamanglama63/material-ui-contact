import React,{useState} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'

import {createData} from '../redux/actions/contactActions'

const ContactForm = ({open, handleClose}) => {
    const contacts = useSelector(state => state.contacts)

    const dispatch = useDispatch()

    const initialState = {
        name : '',
        address : '',
        phoneNumber : '',
        email : ''
    }

    const[contactData, setContactData] = useState(initialState);

    const clear = () => {
        setContactData(initialState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        dispatch(createData(contactData));
        clear();
    }
    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title' style={{textAlign : 'center'}}>
                    Create contact
                </DialogTitle>

                <DialogContent>

                    <DialogContentText style={{textAlign : 'center'}}>
                        Add your details
                    </DialogContentText>

                    <TextField
                     type='text'
                     autoFocus 
                     margin='dense' 
                     id='name' 
                     label='enter name' 
                     fullWidth 
                     value={contactData.name} 
                     onChange={(e) => setContactData({...contactData, name : e.target.value})} 
                    />
                    <TextField 
                     type='text' 
                     autoFocus 
                     margin='dense' 
                     id='address' 
                     label='enter your address' 
                     fullWidth 
                     value={contactData.address}
                     onChange={(e) => setContactData({...contactData, address : e.target.value})}
                    />
                    <TextField 
                     type='number' 
                     autoFocus 
                     margin='dense' 
                     id='phone-number' 
                     label='enter phone number' 
                     fullWidth 
                     value={contactData.phoneNumber}
                     onChange={(e) => setContactData({...contactData, phoneNumber : e.target.value})}
                    />
                    <TextField 
                     type='email' 
                     autoFocus 
                     margin='dense' 
                     id='email' 
                     label='example@gmail.com' 
                     fullWidth 
                     value={contactData.email}
                     onChange={(e) => setContactData({...contactData, email : e.target.value})}  
                    />

                </DialogContent>

                <DialogActions>
                    <Button color='primary' onClick={handleSubmit}>
                        Add
                    </Button>
                    <Button color='secondary' onClick={handleClose}>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ContactForm
