import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import SingleEstate from "./Components/SingleEstate";
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
                    <SingleEstate propertyData={singlePropertyData} />
                ) : (
                    <p>No property data available.</p>
                )
            }
        </section>
    );
    
};

export default PropertySingle;
