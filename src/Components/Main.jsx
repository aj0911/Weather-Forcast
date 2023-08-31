import React, { useEffect, useRef, useState } from 'react'
import './Main.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { getDayName } from './Helper/Helper'

const Main = () => {
  const date = new Date(Date.now());
  const dateString = `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}`;
  const [time,setTime] = useState(date);
  const dayOfWeek = getDayName(dateString)
  setInterval(()=>setTime(new Date(Date.now())),1000);
  useEffect(()=>{

  },[])
  return (
    <div className="main">
        <div className="left">
            <div className="search">
                <AiOutlineSearch/>
                <input type="text" placeholder='Search for places...' />
                <div className="icon">
                  <FaLocationCrosshairs className='icon'/>
                </div>
            </div>
            <div className="weather">
                <img src={require('../Assets/Weather/sunnyCloudy.png')} alt="" />
            </div>
            <div className="temp">
              <h3>12&deg;C</h3>
              <h5>{dayOfWeek},<span> {(time.getHours()>=0 && time.getHours()<=9)?`0${time.getHours()}`:time.getHours()}:{(time.getMinutes()>=0 && time.getMinutes()<=9)?`0${time.getMinutes()}`:time.getMinutes()}</span></h5>
            </div>
            <div className="content">
              <div className="box">
                <img src={require('../Assets/Weather/sunnyCloudy.png')} alt="" />
                <h3>Mostly Cloudy</h3>
              </div>
              <div className="box">
                <img src={require('../Assets/Weather/rain.png')} alt="" />
                <h3>Rain-30%</h3>
              </div>
            </div>
            <div className="city">
              <h3>New York, NY, USA</h3>
            </div>
        </div>
        <div className="right">
          <div className="header">
            <div className="box">
              <button className='active'>Today</button>
              <button>Week</button>
            </div>
            <div className="box">
              <button className='active'>&deg;C</button>
              <button>&deg;F</button>
            </div>
          </div>
          <div className="wrapper">
            
          </div>
        </div>
    </div>
  )
}

export default Main