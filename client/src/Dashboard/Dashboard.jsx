import React,{useState} from "react";
import Sidebar from "./components/Sidebar"
import AddProperty from "./components/AddProperty";

const Dashboard = () => {

    const [currentComponent, setCurrentComponent] = useState(null);

    const changeComponent = (component) => {
        setCurrentComponent(component);
    }   

    return (
        <main className="flex items-center w-screen">
            <section>
                <Sidebar changeComponent = {changeComponent} />
            </section>

            <section className="bg-green-700">
                hello
                {currentComponent === 'addProperty' && <AddProperty />}
                {currentComponent === 'chats' && <Chats />}
                {currentComponent === 'viewProperty' && <ViewProperty />}
                {currentComponent === 'logout' && <Logout />}
            </section>
        </main>
    )
}

export default Dashboard

