import React from "react";

const Banner = ()=>{

    return(
        <section className="bg-red-500 flex flex-col gap-5 text-white font-bold text-center mx-40 rounded-xl p-10">
            <h3 className="text-3xl">List your property with your ownership status.</h3>
            <p className="text-md mx-60">Here is a compilation of the most memorable real estate company ever created. These engaging catchphrases are paired with the title "Greatest Real-Estate of All Time”.</p>
            <div className="font-bold bg-white rounded-3xl flex justify-between px-2 p-2 mx-64  gap-3">
                <input type="email" className="text-black p-2 rounded-md w-full focus:outline-none" placeholder="Enter email address" />
                <button className="bg-black text-white p-2 rounded-3xl px-5">Subscribe</button>
            </div>
        </section>
    )
}

export default Banner   