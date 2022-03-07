import axios from './config';
// import instance from "./config";
import Cookies from "js-cookie";

export const getEquips = async () => {
    try {
        return await axios.get('/api/equipment');
    } catch(error) {
        console.log('Error while calling getEquips API', error);
    }
}

export const getEquip = async (id) => {
    try {
        return await axios.get(`/api/equipment/${id}`);
    } catch(error) {
        console.log('Error while calling getEquip API', error);
    }
}

export const getEquipsList = async () => {
    try {
        return await axios.get('/api/equipment_type');
    } catch(error) {
        console.log('Error while calling getEquipsList API', error);
    }
}



// Booking api


export const getBookings = async () => {
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `"Bearer ${Cookies.get('access-token')}`
        };
        return await axios.get('/api/booking' , { headers });
    } catch(error) {
        console.log('Error while calling getBookings API', error);
    }
}


export const getBookingDetail = async (id) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `"Bearer ${Cookies.get('access-token')}`
        };
        return await axios.get(`/api/booking/detail/${id}` , { headers });
    } catch(error) {
        console.log('Error while calling getBookingDetail API', error);
    }
}


export const updateBooking = async (data, id) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `"Bearer ${Cookies.get('access-token')}`
        };
        return await axios.get(`/api/booking/update/${id}` , { data }, { headers });
    } catch(error) {
        console.log('Error while calling getBookingDetail API', error);
    }
}



//  Feedback
export const submitFeedback = async (data) => {
    try {
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('phone_number', data.phone_number);
        formData.append('description', data.description);
        return await axios.post(`/enquiry/feedback` , { formData });
    } catch(error) {
        console.log('Error while calling submitFeedback API', error);
    }
}