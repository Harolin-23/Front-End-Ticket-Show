import React from 'react';
import axios from "axios";

const URL = 'http://localhost:8080/api/v1/';


export async function getEvents(page , size){

    const getEventUrl = `events/auth/search?page=${page}&size=${size}`;

    const response = await fetch(URL + getEventUrl);
    const data = await response.json();
    
    return data.content;

}


export async function getEventByID(id){

    const getEventUrl = `events/auth/${id}`;

    const response = await fetch(URL + getEventUrl);
    const data = await response.json();
    
    return data;
    

}


export async function GetAllEvnts(){

    const UrlSet = `events/auth/search`
    const response = await fetch(URL + UrlSet);
    const data = await response.json();

    return data.content;
}






export const saveEvents = async (dataEvent) => {
    const UrlSet = `events/add`;

    try {
        const response = await axios.post(`${URL}${UrlSet}`, dataEvent, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (e) {
        console.log(e);
    }
};









