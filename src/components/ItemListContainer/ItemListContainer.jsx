import React, { useEffect, useState} from 'react';

const ItemListContainer = () => {
    
    const url = 'https://run.mocky.io/v3/91deb17f-7c06-4ba8-aa30-1f4419c50820' 

    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        try {
            const resp = await fetch (url);
            setProducts(resp.json());

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()         
    }, [])


    return(
        <section>
            {
                products.length ? (
                    products.map( product => {
                        return (
                            <p> {product.name }</p>
                        )
                    })
                )
                :<p>Cargando Productos</p>
            }
            
        </section>
    )
}