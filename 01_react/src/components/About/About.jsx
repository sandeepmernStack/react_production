import React from 'react'
import { useParams } from 'react-router'
function About() {
    const {user} = useParams()
  return (
    <div>About{user}</div>
  )
}

export default About