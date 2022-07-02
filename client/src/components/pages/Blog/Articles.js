import React from 'react'
import './styles/articles.scss'
import { Data1 } from './data'
import { AiOutlineMinus, AiOutlineCalendar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const Articles = () => {
  return (
    <div className='articles-container'>
      <div className='items'>
        {Data1.map((props) => {
          return (
            <div className={`item ${props.cls}`}>
              <div className='img-container'>
                <div className='img' style={{content: `url(${props.image})`}}></div>
              </div>

              <div className='content'>
                <h5><AiOutlineMinus /> {props.title}</h5>
                <p>{props.text}</p>
                <div className='bottom'>
                  <div className='inline'>
                    <div className='profile' style={{content: `url(${props.profile})`}}></div>
                    <h6>{props.user}</h6>
                  </div>
                  <small className='date-time'>
                    <div className='small1'>
                      <AiOutlineCalendar /> {props.date}
                      <BsDot className='dot'/>
                    </div>
                    <div className='small2'>
                      <BiTimeFive /> {props.time}
                    </div>
                  </small>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Articles;