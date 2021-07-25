import logoImg from '../../assests/imagens/logo.png'
import './Headerstyle.scss'

export function Header() {

  return (
    <header className='header'>
      <div className="logo">
        <img src={logoImg} alt="memory game" />
        <h1>Memory Game</h1>
      </div>
  </header>
  )
}