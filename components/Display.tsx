import React from "react";
import Card from "./Card";
import Image from "next/image";

const Display = () => {
    return(
        <div className="border-b-[1px] border-b-zinc-600 py-10 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-12">
        <Card
        image={require("/Images/enquiry1.jpg")}
        title="Complete Fiber Solutions"
        btnText="Know More"
        />
       <Card
        image={require("/Images/enquiry2.jpg")}
        title="Complete Co-Axial Cabling Solution"
        btnText="Know More"
        />
        <Card
        image={require("/Images/enquiry3.jpg")}
        title="BNC & DC"
        btnText="Know More"
        />
        <Card
        image={require("/Images/enquiry4.jpg")}
        title="All Survilance Related Assesories"
        btnText="Know More"
        />
        <Card
        image={require("/Images/enquiry5.jpg")}
        title="All Networking Tools"
        btnText="Know More"
        />
        <Card
        image={require("/Images/enquiry6.jpg")}
        title="Total Networking Cable Solution"
        btnText="Know More"
        />
        </div>
    )
}

export default Display