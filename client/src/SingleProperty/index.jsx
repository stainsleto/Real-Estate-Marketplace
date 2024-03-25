import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const PropertySingle = () => {
    const [singlePropertyData, setSinglePropertyData] = useState(null);
    let { propertyId } = useParams();

    useEffect(() => {
        axios.get(`https://girei.tech/api/user/property/${propertyId}`)
            .then((response) => {
                console.log(response.data.response);
                setSinglePropertyData(response.data.response);
            })
            .catch((error) => {
                console.error("Error fetching property data:", error);
            });
    }, [propertyId]); // Include propertyId in dependencies array

    return (
        <section>
            {
                singlePropertyData ? (
                    <div className="flex flex-col bg-gray-100 hover:bg-red-200 justify-center border-solid rounded-md border-2 items-center gap-3 p-5">
                        <img src={singlePropertyData.imageLink} alt="Estate" className="w-60 h-40 object-cover rounded-md" />
                        <h3 className="font-extrabold text-xl">${singlePropertyData.price}</h3>
                        <p className="font-bold text-md">{singlePropertyData.bedroom} beds | {singlePropertyData.bathroom} baths | {singlePropertyData.squareFeet} sqft</p>
                        <p className="font-bold text-md">{singlePropertyData.city}</p>
                    </div>
                ) : (
                    <p>No property data available.</p>
                )
            }
        </section>
    );
    
};

export default PropertySingle;
