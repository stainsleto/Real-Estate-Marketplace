import React, {useEffect, useState} from "react";
import axios from 'axios'
import EstateImage from "../../assets/sampleEstate.jpg";
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
            
            <div className="grid grid-cols-4 grid-rows-2 justify-center items-center gap-10 mx-40">
                {loading ? (
                    <div> 
                        <h1> Loading.... </h1> 
                    </div>
                ) : (
                    propertyData && propertyData.map((property, index) => {
                        return (
                            <div key={index} onClick={ () => handleProductClick(property._id)} className="flex flex-col hover:cursor-pointer  text-left  border-solid rounded-xl border-2 gap-3 p-5">
                                <img src={EstateImage} alt="Estate" className="rounded-md" />
                                <h3 className="font-extrabold text-lg">{property.propertyName}</h3>
                                <h3 className="font-bold text-base">₹{parseInt(property.price).toLocaleString('en-IN')}</h3>
                                <p className="font-bold text-xs flex gap-4 items-center"> <span className="flex gap-2 items-center"><FaBed />{property.bhk} bhk</span> <span className="flex gap-2 items-center"> <FaShower />{property.bath} bath </span></p>
                                <p className="font-bold text-xs flex gap-2 items-center"><span className="flex gap-2 items-center"><BiShapeTriangle />{property.squareFoot} sqft </span> <span className="flex gap-2 items-center"> <BiCurrentLocation />{property.location} </span> </p>
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