import React from 'react'
import {useHistory} from 'react-router-dom'
import { useDates } from '../../hooks/useDates'
import './Formstyle.scss'

export function Form() {
  const history = useHistory()
  const [name, setName] = React.useState('')
  const {setUser} = useDates()

  function hendleForm(event) {
    event.preventDefault()
    if (!name.trim()) return;
    setUser(name)
    history.push('/gameroom')
  }
  return (
    <form onSubmit={hendleForm}>
      <label htmlFor="name">
        Digite seu nome
        <input
          type="text"
          id='name'
          placeholder='nome'
          value={name}
          onChange={({target}) => setName(target.value)}
        />
      </label>
      <button type="submit">
        Iniciar
      </button>
    </form>
  )
}