import React, {useEffect, useState} from 'react'
import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);
    
    // useEffect(() => {
    //     getGif( category )
    //     .then( setImages ); //si solo se pone el metodo recibe como parametro la lista de gifs
    // }, [ category ])


    
    return (
        <>
            <h3 className="animate__animated animate__wobble">{ category }</h3>

            {/* {loading ? 'Cargando...' : 'Data cargada'} */}

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">            
                    {
                        // images.map( ({ id, title }) => (
                        //     <li key={id}> { title } </li>
                        // ))

                        // images.map( (img) => (
                        //     <GifGridItem 
                        //         key={img.id}
                        //         img={img} 
                        //     />
                        // ))

                        images.map( (img) => (
                            <GifGridItem 
                                key={img.id}
                                {...img} 
                            />
                        ))
                    }
            </div>
        </>
    )
}
