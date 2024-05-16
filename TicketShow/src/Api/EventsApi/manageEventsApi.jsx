import React from 'react';


const URL = 'http://localhost:8080/api/v1';


export async function getEvents(page , size){

    const getEventUrl = `/events/search/?page=${page}&size=${size}`;

    const response = await fetch(URL + getEventUrl);
    const data = await response.json();
    
    return data.content;

}


export async function getEvent(id){

    const getEventUrl = `/events/search/?event=${id}&size=${size}`;

    const response = await fetch(URL + getEventUrl);
    const data = await response.json();
    
    return data.content;

}

