import axios from 'axios';

import {FETCH_ALL_DATA, DELETE_DATA, CREATE_DATA} from '../actionsTypes/constants';

export const getData = () => async(dispatch) => {
    try {
        const {data} = await axios.get("/allContacts");
        dispatch({
            type : FETCH_ALL_DATA,
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
}

export const createData = (inputData) => async(dispatch) => {
    try {
        const {data} = await axios.post("/createContact", inputData);
        dispatch({
            type : CREATE_DATA,
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
} 

export const deleteData = (id) => async(dispatch) => {
    try {
        await axios.delete(`/delete/${id}` )
        dispatch({
            type : DELETE_DATA,
            payload : id
        });
    } catch (error) {
        console.log(error);
    }
}