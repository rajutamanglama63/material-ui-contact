import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {deleteData} from '../redux/actions/contactActions'

import {Button, IconButton, Card, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    btn : {
        margin : theme.spacing(1),
    },
    thead : {
        color : '#fff'
    }
}))


const ContactTable = ({handleOpen}) => {
    // const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);
    console.log(contacts);

    // const getAllContactsData = () => {
    //     let response = contacts;
    //     setData(response.data);
    // }

    const deleteContact = (id) => {
        dispatch(deleteData(id));
    }

    // useEffect(() => {
    //     contacts;
    // }, []);

    const classes = useStyles();

    return (
        <>
            <div style={{textAlign: 'right'}}>
                <Button 
                 variant='contained' 
                 color='primary' 
                 className={classes.btn} 
                 size='large' 
                 startIcon={<AddIcon />} 
                 onClick={handleOpen}
                >
                    Add Contacts
                </Button>
            </div> 

            <div style={{marginTop: '1rem'}}>
                <Card>
                    <Table>
                        <TableHead>
                            <TableRow className={classes.thead}>
                                <TableCell>Name</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                contacts.map((x) => (
                                    <TableRow key={x._id}>
                                        <TableCell>{x.name}</TableCell>
                                        <TableCell>{x.address}</TableCell>
                                        <TableCell>{x.phoneNumber}</TableCell>
                                        <TableCell>{x.email}</TableCell>
                                        <TableCell>
                                            <Button 
                                             variant="contained"
                                             color="secondary"
                                             size="medium"
                                             className={classes.delBtn} 
                                             onClick={deleteContact(x._id)} 
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </>
    )
}

export default ContactTable
