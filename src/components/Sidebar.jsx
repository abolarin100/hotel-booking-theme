import React from "react";
import "../css/Sidebar.css";
import Me from "../images/Jeremiah.jpeg"

function Sidebar() {



    return (

        <>

            <div className="sidebar">

            <div className="sidebar-header">
                 <h4>MimaBooking</h4>
                 <img src={Me} alt="" className='home__img' width='60' height='60px' />
                 <p>Jerry Ato</p>
              </div>


            <div className="sidebar-menu">
                <a href="#"><ion-icon name="home-outline"></ion-icon>Dashboard</a>
                <a href="#"><ion-icon name="car-outline"></ion-icon>Explore City</a>
                <a href="#"><ion-icon name="wallet-outline"></ion-icon>Ticket</a>
                <a href="#"><ion-icon name="heart-outline"></ion-icon>Favourites</a>
                <a href="#"><ion-icon name="settings-outline"></ion-icon>Settings</a>
            </div>

            <div className="sidebar-logout">
                <a href="#"><ion-icon name="log-out-outline"></ion-icon>Logout</a>
            </div>
            </div>


            

        </>




      
    );
}

export default Sidebar;
