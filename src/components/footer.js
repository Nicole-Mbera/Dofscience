import React from "react";
import { InstagramOutlined, FacebookOutlined, TwitterOutlined , LinkedinOutlined, CopyrightOutlined} from "@ant-design/icons";
import "./footer.css"

const Footer = () => {
    return (

       
        <div className="footerContainer">
             {/* <div className="horizontal"/> */}
            <div className="flex">
            
           
            <div className="navbarList"> 
    
                <ul className="no-bullets">
                <h1 className="heading">DOFSCIENCE</h1>
                    <li><a href="/home"> Home </a></li>
                    <li><a href="#about-us"> About us </a></li>
                    <li><a href="#services"> Services</a></li>
                    <li><a href="#more-functionality">Innovations</a></li>
                    
                    </ul>
               
                    </div>

                 <div className="bullets">
    
                    <ul>
                    <li>Phone: +250784774445</li>
                    <li>Email: dofscience1@gmail.com</li>
                    <li>Address: Kigali special economic zone, 7th floor, Dofscience.</li>
                    
                  
                    </ul>
                    
    </div>
    
 
                
    </div>      
    <h1 className="heading2"><CopyrightOutlined /> 2024 by Dofscience</h1>
                <div className="social">
                
                <a href="https://www.facebook.com/anaclet.art/"><FacebookOutlined /></a>
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
            </div> 
       
    )
}
export default Footer