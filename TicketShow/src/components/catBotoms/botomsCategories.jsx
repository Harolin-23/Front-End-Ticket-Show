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
                    <div className='sep'></div>
                </div>
                <div className='MtC-Categories'>
                        <div className='container-bt'>

                        <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <i class="fa-solid fa-masks-theater icon"></i>
                            <p>1</p>
                            <h6>Funny</h6>
                        </div>
                    </a>

                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <i class="fa-solid fa-gem icon"></i>
                            <p>2</p>
                            <h6>Higgest</h6>
                        </div>
                    </a>

                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <i class="fa-solid fa-people-group icon"></i>
                            <p>3</p>
                            <h6>Conferences</h6>
                        </div>
                    </a>

                    <a href="" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                            <i class="fa-solid fa-ellipsis icon"></i>
                            <p>4</p>
                            <h6>More</h6>
                        </div>

                    </a>
                </div>
                </div>
                

            </div>
        </div>

    )
}

