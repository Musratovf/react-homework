import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

function Section() {
    return (
        <>
            <section className="sectioon">
                <div className="container">
                  <Header/>
                  <Hero/>
                </div>
            </section>
        </>
    )
}
export default Section;