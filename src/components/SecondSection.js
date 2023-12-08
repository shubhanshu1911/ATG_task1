import React from "react";
import SubHeading from "./SubHeading";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";

import img1 from "./images/img1.png";
import per1 from "./images/p1.png";

import img2 from "./images/img2.png";
import per2 from "./images/p2.png";

import img3 from "./images/img3.png";
import per3 from "./images/p3.png";

import per4 from "./images/p4.png";


function SecondSection() {
    return (
        <div className="seccontainer">
            <SubHeading />
            <Post1 
                image = {img1}
                type =  "✍️ Article"
                title = "What if famous brands had regular fonts? Meet RegulaBrands!"
                text = "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                name = "Sarthak Kamra"
                person_img = {per1}
            />
            <Post1 
                image = {img2}
                type =  "🔬️ Education"
                title = "Tax Benefits for Investment under National Pension Scheme launched by Government"
                text = "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                name = "Sarah West"
                person_img = {per2}
            />
            <Post2 
                image = {img3}
                type =  "🗓️ Meetup"
                title = "Finance & Investment Elite Social Mixer @Lujiazui"
                text = "📅Fri, 12 Oct, 2018 📍Ahmedabad, India"
                link = "Visit Website"
                name = "Ronal Jones"
                person_img = {per3}
            />
            <Post3 
             
                type =  "💼️ Job"
                title = "Software Developer"
                text = "💼Innovaccer Analytics Private Ltd.  📍Noida, India"
                link = "Apply on Timesjobs"
                name = "Joseph Gray"
                person_img = {per4}
            />
        </div>
    )
}

export default SecondSection;