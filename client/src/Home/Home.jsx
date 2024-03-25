import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import Properties from "./Components/Properties";
import Banner from "./Components/Banner";


const Home = () => {
    return (
        <section className="base-font pb-20">
            <Header  />
            <Hero />
            <Featured />
            <Properties />
            <Banner />
            <Footer />
        </section>
    );1
}

export default Home;