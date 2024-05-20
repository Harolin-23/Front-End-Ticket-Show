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

    const UrlSet = `events/auth/search?page=1&size=10000`
    const response = await fetch(URL + UrlSet);
    const data = await response.json();

    return data.content;
}

export const deleteEvents = async (id) =>{
    const url = `http://localhost:8080/api/v1/events/delete/${id}` ;

    const options = {
      method: 'Delete',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    
    };
    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with your fetch operation:', error));
}


export const UpdateEvents = async (id,data) =>{
    const url = `http://localhost:8080/api/v1/events/update/${id}` ;

    const options = {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with your fetch operation:', error));

}


export const SeatsSelect = async (id,arraySelect) =>{
  const url = `http://localhost:8080/api/v1/seat/selectSeat/${id}` ;

  const options = {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(arraySelect)
  };
  fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with your fetch operation:', error));

}







export const saveEvents = async (dataEvent) => {
    const url = 'http://localhost:8080/api/v1/events/add';

    const options = {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataEvent)
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('There was a problem with your fetch operation:', error));
 
};



export const SendEmail = async (id,email) => {
  const url = `http://localhost:8080/api/v1/sendEmail/${id}?email=${email}`;

  const options = {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
  };
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with your fetch operation:', error));

};












