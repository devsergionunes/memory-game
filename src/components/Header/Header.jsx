import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assests/imagens/logo.png'
import './Headerstyle.scss'

export function Header() {
  return (
    <header className='header'>
      <NavLink className="logo" to='/'>
        <img src={logoImg} alt="memory game" />
        <h1>Memory Game</h1>
      </NavLink>
  </header>
  )
}