import React from 'react'
import Header from '../Components/Header/Header'
import mainImage from "../../public/Images/MainImage.png"
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="main">
        <div className="container">
            <div className="main-content">
              <div className="main-left">
                <h1>MyMentor təcrübə və inkişaf agentliyi</h1>
                <p>40 gün ərzində karyeranıza ilk addımı bizimlə atın!</p>
              </div>
              <div className="main-right">
                <div className="main-box">
                  <img src={mainImage} alt="" />
                  <div className="main-text">
                  <p className='mymentor'>MyMentorda </p>
                  <p className='career'>Karyera imkanı!</p>
                  <p className='remote'>Full remote </p>
                  <p className='hour'>Əməkhaqqı - hər saat üçün</p>
                  <span>#Gəncistedadlar</span>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home