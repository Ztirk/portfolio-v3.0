import React from 'react'
import './Nav.css'
import log from '../assets/logo/z-high-resolution-logo-color-on-transparent-background.png'
import { Link } from 'react-router-dom'

function Nav() {
    const [toggle, setToggle] = React.useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
        <div className='container'>
            <img className='logo' src={log}></img>
            <div className={toggle ? 'toggle-container toggle-containered' : 'toggle-container'}>
                <div className='nav'>
                    <ul>
                        <li><Link className='link' to="/portfolio-v3.0/">Home</Link>
                            <div className='underline'></div>
                        </li>
                        <li><Link className='link' to="/portfolio-v3.0/works">Works</Link>
                            <div className='underline'></div>
                        </li>
                        <li><Link className='link' to="/portfolio-v3.0/contact">Contact</Link>
                            <div className='underline'></div>
                        </li>
                    </ul>
                </div>
                <div className='icon'>
                    <ul>
                        <li><a target='_blank' href='https://www.linkedin.com/in/tanakrit-promwungkwa-511997244/?originalSubdomain=th'><i class="fa-brands fa-linkedin"></i> Linkedin
                            <div className='underline'></div></a>
                        </li>
                        <li><a target='_blank' href="https://github.com/Ztirk"><i class="fa-brands fa-square-github"></i> Github
                            <div className='underline'></div></a>
                        </li>
                        <li><a target='_blank' href="mailto:tanakrit.promwungkwa@gmail.com"><i class="fa-solid fa-envelope"></i> Mail
                            <div className='underline'></div></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='toggle' onClick={handleToggle}>
                {toggle ? <icon class='xmark fa-xmark fa-solid fa-2x'></icon> : <icon className='bars fa-bars fa-solid fa-2x'></icon>}
            </div>
        </div>
  )
}

export default Nav