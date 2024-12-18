import React from 'react'
import { useTheme } from '../../context/MyTheme'
import Button from './Button'


function Card() {
    const {theme, setTheme} = useTheme()
    const cardClass = `card mx-auto bg-${theme} text-${theme==="dark" ? "light": "dark"}`
  return (
    <div className= {cardClass} style={{width: '18rem'}}>
        <img src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=2048x2048&w=is&k=20&c=95BgS0lojrWD3QEmbec0nJv2DOHvUO4G6QoXF80S_9Y=" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <Button/>
    </div>
  )
}

export default Card