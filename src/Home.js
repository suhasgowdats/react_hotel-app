import React from "react";
import "./Home.css"
import Card from "./Card";
import Banner from "./Banner";



function Home(){
    return(
        <>
        <Banner/>       
        <div className="home-section">
        <Card src="https://thumbs.dreamstime.com/z/hotel-room-13225019.jpg" title="Villa" discriptiom="Romm is the place where the real  peace is found and the place of comfort" price="$300" />
        <Card src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" title="Villa" discriptiom="Romm is the place where the real  peace is found and the place of comfort" price="$260" />
        <Card src="https://media.cntraveler.com/photos/56799015c2ebbef23e7d927b/master/pass/Hotelroom-Alamy.jpg" title="Villa" discriptiom="Romm is the place where the real  peace is found and the place of comfort" price="$400" />
        </div>
        <div className="home-section">
        <Card src="https://insights.ehotelier.com/wp-content/uploads/sites/6/2020/01/hotel-room-300x300.jpg" title="Villa" discriptiom="Romm is the place where the real  peace is found and the place of comfort" price="$230" />
        <Card src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" title="Villa" discriptiom="Romm is the place where the real  peace is found and the place of comfort" price="$200" />
        <Card src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg   " title="Villa" discriptiom="Romm is the place where the real  peace is found and the place of comfort" price="$500" />
        </div>
        </>
    )
}
export default Home