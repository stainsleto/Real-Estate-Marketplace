import React from "react";
import { MdAddChart } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = ({changeComponent}) => {
    return(

        <section>
            <div className="flex flex-col base-font p-5 gap-10">
                <h3 className='text-2xl font-bold'>GIREI</h3>
                <button onClick={() => changeComponent('addproperty')} className="flex gap-2 items-center"> <MdAddChart className="w-6 h-6" /> Add Property</button>
                <button onClick={() => changeComponent('chats')} className="flex gap-2 items-center"><IoChatbubblesOutline className="w-6 h-6" /> Chats</button>
                <button onClick={() => changeComponent('ViewProperty')} className="flex gap-2 items-center"><BsBuildings className="w-6 h-6" />All Properties</button>
                <button onClick={() => changeComponent('logout')} className="flex gap-2 items-center"><RiLogoutCircleLine className="w-6 h-6" />Logout</button>
            </div>
        </section>

    )

}

export default Sidebar