import React,{useState} from "react";
import Sidebar from "./components/Sidebar"
import AddProperty from "./components/AddProperty";
import Property from "../Property";

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

            <section className="w-10/12 bg-gray-100 h-screen">
                
                {currentComponent === 'addproperty' && <AddProperty />}
                {currentComponent === 'chats' && <Chats />}
                {currentComponent === 'allProperty' && <Property />}
                {currentComponent === 'logout' && <Logout />}

            </section>
        </main>
    )
}

export default Dashboard

