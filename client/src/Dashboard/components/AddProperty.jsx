import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AddProperty = () => {

    const [property, setProperty] = useState({
        propertyName : "",
        squareFoot : 0,
        location : "",
        bhk : 0,
        bath : 0,
        description:"",
        price:0
    })

    const [locationNames, setLocationNames] = useState([])
    const [propertyId, setPropertyId] = useState("")

    const token = localStorage.getItem('token')

    const handleChange = (e) => {
        const {name, value } = e.target
        const updatedValue = name === 'bhk' || name === "bath" || name === "squareFoot" || name === "price" ? Number(value) : value
        setProperty({...property, [name] : updatedValue})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(property)
        console.log(token)
        axios.post('https://girei.tech/api/user/addproperty',property, {
            headers: {
                authorization : token,
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => {
            setPropertyId(response.data.propertyId)
            setProperty({
                propertyName : "",
                squareFoot : 0,
                location : "",
                bhk : 0,
                bath : 0,
                description:"",
                price:0
            })

            const propertyDetails = {
                total_sqft : property.squareFoot,
                location : property.location,
                bhk : property.bhk,
                bath : property.bath,
                id : response.data.propertyId
            }
            axios.post('https://realestate-model-2d3a1be66d6f.herokuapp.com/predict_home_price',propertyDetails,{ 
                headers : {
                    'Content-Type' : 'application/json'
                }}    
            )
        })

        
    }

    useEffect(() => {
        axios.get('https://realestate-model-2d3a1be66d6f.herokuapp.com/get_location_names')
        .then(response => {
            setLocationNames(response.data.locations)
            console.log(locationNames)
        })
    }, [])

    return ( 
        <main className='flex flex-col items-start border-2 border-solid rounded-md border-gray-500 m-10 p-5'>
            <h1 className='font-bold text-left text-xl py-5'>Add Property</h1>

            <section>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

                    <div className='flex flex-wrap gap-10 font-semibold'>

                        <div>
                            <label>Enter Your Property Name</label>
                            <input type='text' value={property.propertyName} onChange={handleChange} name="propertyName" placeholder='Property Name' className='block w-72 p-2 px-3 my-2 rounded-lg' />

                        </div>
                        <div>
                            <label>Total Sqare Foot</label>
                            <input type='number' value={property.squareFoot} onChange={handleChange} name="squareFoot" placeholder='Total Square foot' className='block w-72 p-2 px-3 my-2 rounded-lg' />
                        </div>
                        <div>
                            <label>Number of Bath</label>
                            <input type='number' value={property.bath} onChange={handleChange} name="bath" placeholder='Bath' className='block w-72 p-2 px-3 my-2 rounded-lg' />
                        </div>

                        <div>
                            <label>Bedroom, Hall, and Kitchen ( BHK ) </label>
                            <input type='number' value={property.bhk} onChange={handleChange} name="bhk" placeholder='BHK' className='block w-72 p-2 px-3 my-2 rounded-lg' />

                        </div>
                        
                        <div>
                            <label>Location </label>
                            <select name="location" onChange={handleChange} className='block w-72 p-2 px-3 my-2 rounded-lg' >
                                {locationNames.length > 0 ? (
                                    locationNames.map((location, index) => (
                                        <option value={location} key={index}>{location}</option>
                                    ))
                                ) : (
                                    <option disabled>Loading...</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <label> Price (INR) </label>
                            <input type='number' value={property.price} onChange={handleChange} name="price" placeholder='Price in USD' className='block w-72 p-2 px-3 my-2 rounded-lg' />

                        </div>

                        <div>
                            <label htmlFor="description"> Property description </label>
                            <textarea name="description" id="description" value={property.description} onChange={handleChange} placeholder='Property Description' className='block w-72 p-2 px-3 my-2 rounded-lg' />

                        </div>


                    </div>

                    <div>
                        <input type='submit' value='Add Property' className='block p-2 px-3 my-2 rounded-lg bg-red-500 text-white font-bold cursor-pointer' />
                    </div>

                </form>
            </section>
        </main>
     );
}


export default AddProperty