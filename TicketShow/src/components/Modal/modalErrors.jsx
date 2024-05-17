import React, { useState } from 'react';
import './modals.css';

export const Modal = ({ show, message, onClose }) => {
    if (!show) {
        return null;
    }
    if(!message){
        return null;
    }

    return (
       
        <div  className={`modal-overlay-seion-errors ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <h2><i class="fa-solid fa-xmark"></i>{message}</h2>
               
            </div>
        </div>
    );
};