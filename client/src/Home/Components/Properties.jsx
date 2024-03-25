import React, {useEffect, useState} from "react";
import axios from 'axios'
import EstateImage from "../../assets/estate.png";
import { FaBed, FaShower } from "react-icons/fa";
import { BiShapeTriangle, BiCurrentLocation } from "react-icons/bi";
import {useNavigate, Link} from 'react-router-dom'
// import { properties } from "../data"

const Properties = () => {

    const [propertyData,setPropertyData] = useState(null);
    const [loading,setLoading] = useState(true)

    const navigate = useNavigate();

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

    const handleProductClick = (id) => {
        console.log(id)
        navigate(`/property/${id}`, {replace: true})
    }

    return (
        <section className="flex flex-col justify-center items-center my-20 gap-10 text-center">
            <h2 className="font-extrabold text-3xl">Find Your Perfect Home</h2>
            
            <div className="grid grid-cols-5 grid-rows-2 justify-center items-center gap-10 mx-20">
                {loading ? (
                    <div> 
                        <h1> Loading.... </h1> 
                    </div>
                ) : (
                    propertyData && propertyData.slice(0,10).map((property, index) => {
                        return (
                            <div key={index}  onClick={ () => handleProductClick(property._id)} className="flex flex-col hover:cursor-pointer bg-red-200 text-left  border-solid rounded-3xl border-2 gap-3 p-5">
                                <img src={EstateImage} alt="Estate" className="w-30 h-40 object-cover rounded-md" />
                                <h3 className="font-extrabold text-xl">₹{property.price}</h3>
                                <p className="font-bold text-xs flex gap-2 items-center"> <FaBed />{property.bedroom} bed <FaShower />{property.bathroom} bath</p>
                                <p className="font-bold text-xs flex gap-2 items-center"> <BiShapeTriangle />{property.squareFeet} sqft <BiCurrentLocation />{property.city}</p>
                            </div>
                        )
                    })
                )}
            </div>

            <Link to='/property' className="bg-red-600 font-bold rounded-3xl p-2 px-4 text-white">Explore More</Link>
        </section>
    )
    
}


export default Properties