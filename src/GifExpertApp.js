import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragin Ball']
    // const [categories, setCategories] = useState(['One Punch','Samurai X','Dragin Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(['HunterXHunter', ...categories])
    //     // setCategories( cats =>  [ ...cats, 'HunterXHunter'])
    //     setCategories([... categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    // categories.map(category => {
                    //     return <li key={ category }> { category } </li>
                    // }) 
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )) 
                    
                }
            </ol>
        </>
    )
}

export default GifExpertApp;