import React from 'react'
import "./home.css"
import Slogan from "../../assets/img/Logo-Name.png"

const Home = () => {
    return (
        <div className='home-div'>
            <img className='slogan-title' src={Slogan} alt="Legends Archives, Where Legends Echo Through Time !" />
            <div>Welcome into the world of League of Legends !</div>
        </div>
    )
}

export default Home