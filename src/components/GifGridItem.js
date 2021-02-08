import React from 'react'

export const GifGridItem = ({title,url}) => {

    // console.log({title,url})

    return (
        <div className="imagenes animate__animated animate__flipInX" >
            <p> {title} </p>
            <img src={ url } alt= {title} />
        </div>
    )
}
