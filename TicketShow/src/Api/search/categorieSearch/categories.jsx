import {HeaderGen} from '../../../components/header/Header.jsx'
import './categories.css'
import '../../../Css-Gen/global.css'


function CategireCast(){

    const value = localStorage.getItem("categories")

    return(
        <>
        <HeaderGen />
        <div className='infoSec-categories'>
            <h1>{value}</h1>
            <a href=""><i class="fa-solid fa-sliders"></i></a>
        </div>






        </>
    )
}


export default CategireCast;