import React from "react";
import { properties } from "../data"

const Properties = () => {
    return (
        <section className="flex flex-col justify-center items-center my-20 gap-7 text-center">
            <h2 className="font-extrabold text-3xl">Find Your Perfect Home</h2>
            
            <div className="grid grid-cols-4 justify-center items-center gap-20">

                {properties.map((property, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center border-solid border-2 items-center gap-3">
                            {/* <img src={property.image} alt="property" className="w-64 h-48 object-cover rounded-md" /> */}
                            <h3 className="font-extrabold text-xl">${property.price}</h3>
                            <p className="font-bold text-md">{property.bed} beds | {property.bath} baths | {property.sqft} sqft</p>
                            <p className="font-bold text-md">{property.address}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}


export default Properties