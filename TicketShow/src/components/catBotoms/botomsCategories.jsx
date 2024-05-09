import {useState} from 'react'
import React from 'react';
import './categories.css'
import '../carrucel/carrucel.css'

import {text} from '../header/Header.jsx'


export function BotomCategories(){
    return(
        <div className='categories'>
            <div className='promM'>
                <div className="logo text">
                    <a href="" className='logo'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
                    <p className='originalS'>Originals</p>
                </div>
                <div className='MtC-Categories'>


                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                            <box-icon name='wink-tongue' className='icon'></box-icon>
                            <p>1</p>
                            <h6>Funny</h6>
                        </div>
                    </a>

                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <box-icon name='world'></box-icon>
                            <p>2</p>
                            <h6>Funny</h6>
                        </div>
                    </a>

                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                            <box-icon name='group'></box-icon>
                            <p>3</p>
                            <h6>Funny</h6>
                        </div>
                    </a>

                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                            <box-icon name='dots-horizontal-rounded'></box-icon>
                            <p>4</p>
                            <h6>Funny</h6>
                        </div>
                    </a>
                </div>
            </div>


        </div>

    )
}
