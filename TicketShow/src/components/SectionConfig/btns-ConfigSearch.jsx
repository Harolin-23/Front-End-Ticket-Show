import './btns-ConfigSearch.css'

export function SectionConfig(){
    return(
        <>
            <div className="bt-Cat-set">
                <div className='bontons'>
                    <a href="" className="categorieBt red">Ciudades</a>
                    <a href="" className="categorieBt blown">Categories</a>
                    <a href="" className="categorieBt pinks">Fechas</a>
                </div>
                <div className='settings'>
                    <a href=""><i class="fa-solid fa-bookmark"></i></a>
                    <a href=""><i class="fa-solid fa-sliders"></i></a>
                </div>
            </div>
        </>
    )
}