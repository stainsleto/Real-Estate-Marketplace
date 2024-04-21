import React,{useState} from "react";
import Sidebar from "./components/Sidebar"
import AddProperty from "./components/AddProperty";
import Property from "../Property";
import Logout from "./components/Logout";

const Dashboard = () => {

    const [currentComponent, setCurrentComponent] = useState(null);

    const changeComponent = (component) => {
        setCurrentComponent(component);
    }   

    return (
        <main className="flex items-start w-screen">
            <section className=" w-2/12">
                <Sidebar changeComponent = {changeComponent} />
            </section>

            <section className="w-10/12 bg-gray-100 h-auto">

                {currentComponent === null && <h1 className="text-2xl text-center mt-10">Welcome to Dashboard</h1>}
                
                {currentComponent === 'addproperty' && <AddProperty />}
                {currentComponent === 'chats' && <Chats />}
                {currentComponent === 'allProperty' && <Property />}
                {currentComponent === 'logout' && <Logout />}

            </section>
        </main>
    )
}

export default Dashboard

