import React, {useEffect, useState} from "react";
import axios from 'axios'
// import { properties } from "../data"

const Properties = () => {

    const [propertyData,setPropertyData] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect( () => {
        axios.get("https://girei.tech/api/user/property")
        .then( response => {
            console.log(response)
            setPropertyData(response.data.response)
            setLoading(false)
        })
        .catch(error => {
            console.log("Error Occured : ", error);
            setLoading(false);
        })
    },[])

    return (
        <section className="flex flex-col justify-center items-center my-20 gap-7 text-center">
            <h2 className="font-extrabold text-3xl">Find Your Perfect Home</h2>
            
            <div className="grid grid-cols-4 justify-center items-center gap-20">
                {loading ? (
                    <div> 
                        <h1> Loading.... </h1> 
                    </div>
                ) : (
                    propertyData && propertyData.map((property, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center border-solid border-2 items-center gap-3">
                                <h3 className="font-extrabold text-xl">${property.price}</h3>
                                <p className="font-bold text-md">{property.bedroom} beds | {property.bathroom} baths | {property.squareFeet} sqft</p>
                                <p className="font-bold text-md">{property.city}</p>
                            </div>
                        )
                    })
                )}
            </div>
        </section>
    )
    
}


export default Properties