import {FETCH_ALL_DATA, DELETE_DATA, CREATE_DATA} from '../actionsTypes/constants';

export const getDataReducers = (contacts = [], action) => {
    switch(action.type) {
        case FETCH_ALL_DATA:
            return action.payload;
        case CREATE_DATA:
            return [...contacts, action.payload];
        case DELETE_DATA:
            return contacts.filter((contact) => contact._id !== action.payload);
        default:
            return contacts;
    }
}