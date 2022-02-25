import React, { useState} from 'react';

const ItemListSlide = ({slide, changeSlide, arrayIndex}) => {

    return(
        <section className='new-slide'>
            <div className='new__bg'>
                <img
                    src={slide.img}
                    alt="Imagenes de Nuevos Ingresos"/>
            </div>
            <div className='new-slide__caption'>
                <h2>{slide.title}</h2>
            </div>
            <ul className='new-slide__controls'>
                {arrayIndex.map(id =>{
                    return(
                        <li
                            className={`controls__new ${ slide.id === id ? 'controls-selected' : null}`}
                            key ={id}
                            onClick={ () => {changeSlide(id - 1)}}
                        ></li>    
                    )}
                )}
            </ul>
        </section>   
    )
}