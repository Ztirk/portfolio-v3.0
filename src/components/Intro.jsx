import React from 'react'
import vid from '../assets/videos/video.mp4'
import './Intro.css'
import me from '../assets/images/me1.png'
import css from '../assets/images/css-3.png'
import html from '../assets/images/html.png'
import js from '../assets/images/js.png'

function Intro() {
  const [toggleText, setToggleText] = React.useState({
    text1: "Hi, My name is",
    text2: 'Tana',
    text3: 'Promwungkwa',
    text4: 'Krit',
    active: false
  })

  const handleToggleText = () => {
    if (toggleText.active == false) {
      setToggleText({
        text1: "I'm a",
        text2: '',
        text3: 'Developer',
        text4: 'Website',
        active: !toggleText.active})
    } else {
      setToggleText({
        text1: "Hi, My name is",
        text2: 'Tana',
        text3: 'Promwungkwa',
        text4: 'Krit',
        active: !toggleText.active
      })
    }
    
  }

  return (
    <>
        <div className='vid-container'>
          <video className='vid' autoPlay loop muted>
            <source src={vid} type='video/mp4'></source>
          </video>
        </div>
        <div className='main-container white'> 
          <div className='text-container'>
            <div className={toggleText.active ? 'text1 texted' : 'text1'}>{toggleText.text1}</div>
            <div className={toggleText.active ? 'text2 texted' : 'text2'}>{toggleText.text2}<span className={toggleText.active ? 'text4 texted' : 'text4'}>{toggleText.text4}</span></div>
            <div className={toggleText.active ? 'text3 texted' : 'text3'}>{toggleText.text3}</div>
            <div className='btn-container'>
              <div onClick={handleToggleText} className='btn'>Click Here!</div>
            </div>
          </div>
          <div className='hover'>
            <img className='me' src={me}></img>
            <img className='png1' src={html}></img>
            <img className='png2' src={css}></img>
            <img className='png3' src={js}></img>
          </div>
        </div>
    </> 

  )
}

export default Intro