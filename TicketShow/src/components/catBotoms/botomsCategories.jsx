import {useState} from 'react'
import React from 'react';
import './categories.css'
import '../carrucel/carrucel.css'

import CategireCast from '../../Api/search/categorieSearch/categories.jsx'

import {text} from '../header/Header.jsx'


export function BotomCategories(){

    const [valorAdicional, setValorAdicional] = useState(""); 

    const handleClick = (value) => {
        localStorage.setItem("categories",value);
    };


    return(
        <div className='categories'>

             <div className='promM'>
                <div className="logo text">
                    <div className='sep'></div>
                </div>
        
                <div className='MtC-Categories'>
                        <div className='container-bt'>

                        <a onClick={() => {handleClick("Funny")}} href="/search/category" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <i class="fa-solid fa-masks-theater icon"></i>
                            <p>1</p>
                            <h6>Funny</h6>
                        </div>
                    </a>

                    <a onClick={() => {handleClick("Higgest")}} href="/search/category" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <i class="fa-solid fa-gem icon"></i>
                            <p>2</p>
                            <h6>Higgest</h6>
                        </div>
                    </a>

                    <a  onClick={() => {handleClick("Conferences")}} href="/search/category" className='botomCategorie'>
                        <div className='btm-redictedCar'>
                        <i class="fa-solid fa-people-group icon"></i>
                            <p>3</p>
                            <h6>Conferences</h6>
                        </div>
                    </a>

                    <a  onClick={() => {handleClick("More")}}   href="/search/category" className='botomCategorie'>
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

