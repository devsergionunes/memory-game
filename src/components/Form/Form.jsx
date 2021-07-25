import React from 'react'
import './Formstyle.scss'

export function Form() {
  const [name, setName] = React.useState('')

  function hendleForm(event) {
    event.preventDefault()
    if (!name.trim()) return;
    
    console.log(name)
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