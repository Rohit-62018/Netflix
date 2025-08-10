import React from "react";
import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Title from "../../component/TitleCards/Title";
import Footer from "../../component/Footer/footer";

export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} alt="" className="banner-img"/>
                <div className="hero-caption">
                    <img src={hero_title} alt="" className="caption-img"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Inventore tempore doloremque
                        dolores repellat quibusdam, quaerat velit a architecto reprehenderit.</p>
                     <div className="hero-btns">
                        <button className="btn"><img src={play_icon} alt="" />Play</button>
                        <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
                     </div>
                     <Title/>
                </div>
            </div>
            <div className="more-cards">
                <Title title={"Blockbuster Movies"} category={"top_rated"}/>
                <Title title={"Only on Netflix"} category={"popular"}/>
                <Title title={"Upcomming"} category={"upcoming"}/>
                <Title title={"Top Pics for You"} category={"now_playing"}/>
            </div>
            <Footer/>
        </div>
    )
}