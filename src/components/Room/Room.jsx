import React from 'react'
import { useDates } from '../../hooks/useDates';
import { ImgsGame } from '../ImgsGame/ImgsGame';

import './Roomstyle.scss'

export function Room() {
  const { user } = useDates()
  const [isReset , setIsReset] = React.useState(false)
  const [isCronometro, setIsCronometro] = React.useState(false)
  const cronometro = React.useRef(null)
  const timerSpan = React.useRef(null)

  React.useEffect(() => {
    let secondes = 0
    let minutes = 0
    if (isCronometro) {
      cronometro.current = setInterval(() => {
        if (!timerSpan.current) clearInterval(cronometro.current);
        if (secondes === 60) {
          secondes = 0
          minutes++
        } else {
          secondes++
        }
        timerSpan.current.innerText = `00:${minutes < 10 ? `0${minutes}` : minutes }:${secondes < 10 ?  `0${secondes}` : secondes }`
      }, 1000)
    }
    else {
      clearInterval(cronometro.current)
    }
  }, [isCronometro])
  
  function hendleReset() {
    timerSpan.current.innerText = '00:00:00'
    setIsReset(true)
  }

  return (
    <div className='room-container'>
      <section className='details'>
        <h2>{user}</h2>
        <div>
          <span ref={timerSpan}>00:00:00</span>
          <button onClick={hendleReset}>Reiniciar</button>
        </div>
      </section>
      <ImgsGame
        setIsCronometro={setIsCronometro}
        timeSpan={timerSpan.current?.innerText}
        isReset={isReset}
        setIsReset={setIsReset}
      />
    </div>
  )
}