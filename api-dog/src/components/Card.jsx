import React from 'react'

export const Card = (link) => {
    const hancleOnClick=()=>{
        window.location.reload()
    }
return (
    <div className='tarjeta'>
        <div className='titulo'>Una tarjeta básica</div>
            <div className='cuerpo'>
                <img className='imagen' src={link.link} alt="imagen " />
            </div>
                <div className='pie'>
                    <button className='boton' onClick={hancleOnClick}>next </button>
                </div>
    </div>

)
}
