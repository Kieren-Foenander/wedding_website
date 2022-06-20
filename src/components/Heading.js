import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom"

export default function Heading() {
  return (
    <>
        <h1><Link to="/">The Foenander Wedding</Link></h1>
        <Navbar />
    </>
  )
}
