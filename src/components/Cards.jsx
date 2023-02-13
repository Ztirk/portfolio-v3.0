import React from 'react'
import './Cards.css'
import img1 from '../assets/images/web/random.png'
import img2 from '../assets/images/web/mark.png'
import img3 from '../assets/images/web/drum.png'
import img4 from '../assets/images/web/calculator.png'
import img5 from '../assets/images/web/Untitled2.png'
import img6 from '../assets/images/web/Untitled.png'

function Cards() {
  const data = [
    {
      title: 'Company Homepage',
      image: img6,
      link: 'https://ztirk.github.io/intro-section/',
      tool: 'Vite React, CSS'
    },
    {
      title: 'News Homepage',
      image: img5,
      link: 'https://ztirk.github.io/news-homepage-main/',
      tool: 'Vite React, CSS'
    },
    {
      title: 'Random Quote Machine',
      image: img1,
      link: 'https://ztirk.github.io/random-quote-machine/',
      tool: 'React, Bootstrap'
    },
    {
      title: 'Markdown Previewer',
      image: img2,
      link: 'https://ztirk.github.io/markdown-previewer/',
      tool: 'React, Bootstrap'
    },
    {
      title: 'Drum Machine',
      image: img3,
      link: 'https://ztirk.github.io/drum-machine/',
      tool: 'React, Bootstrap'
    },
    {
      title: 'Javascripte Calculator',
      image: img4,
      link: 'https://ztirk.github.io/Javascript-Calculator/',
      tool: 'React, Bootstrap'
    }
  ]

  return (
      <div className='background'>
        <div className='topic red'>Here's some of my works</div>
        <div className='cards-container white'>
          <ul>
            {data.map((d) => 
            <li className='card'>
              <div className='title'>{d.title}</div>
              <a href={d.link} target='_blank'><img className='web-img' src={d.image}></img></a>
              <div className='tool'>Build by: {d.tool}</div>
            </li>)}
          </ul>
        </div>
      </div>
  )
}

export default Cards