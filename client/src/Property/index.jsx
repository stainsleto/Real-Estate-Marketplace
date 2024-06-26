import React, {useState, useEffect} from "react";
import Header from '../Components/Header'
import axios from "axios";
import EstateImage from "../assets/sampleEstate.jpg";
import { FaBed, FaShower } from "react-icons/fa";
import { BiShapeTriangle, BiCurrentLocation } from "react-icons/bi";
import {useNavigate} from 'react-router-dom'


const Property = () => {

    const navigate = useNavigate();

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

    const handleProductClick = (id) => {
        console.log(id)
        navigate(`/property/${id}`, {replace: true})
    }



    return (
        <main className="base-font">
        <Header />
        <section className="flex flex-col justify-center items-center my-20 gap-10 text-center">
            <h2 className="font-extrabold text-3xl">Properties to look over</h2>
            
            <div className="grid grid-cols-4 grid-rows-2 justify-center items-center gap-10 mx-20">
                {loading ? (
                    // load screen skeleton 
                    
                    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                        <div className="flex items-center w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[400px]">
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[440px]">
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                        </div>
                        <div className="flex items-center w-full max-w-[360px]">
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
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
        </section>
</main>
    )
    
}


export default Property