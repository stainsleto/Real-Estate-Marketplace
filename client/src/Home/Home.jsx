import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import Properties from "./Components/Properties";


const Home = () => {
    return (
        <section className="base-font">
        <Header  />
        <Hero />
        <Featured />
        <Properties />

        <Footer />
        </section>
    );1
}

export default Home;