import { useState } from 'react'
import { useRouter, useLocation } from 'wouter'

import Button from './components/Button'
import SocialButtons from './components/SocialButtons'

const api = {
  room: {
    create: async () => {
      return '123'
    }
  }
}

export default function Lobby() {
  const [id, setId] = useState('')
  const [, setLocation] = useLocation()

  function handleJoin() {
    setLocation(`/${id}`)
  }

  async function handleCreate() {
    const room = await api.room.create(id)

    setLocation(`/${room}`)
  }

  return (
    <div className='App'>
      <div className='Container relative gap-8 '>
        <SocialButtons className={'absolute top-10 left-10'} />
        <h1>Multiplayer</h1>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type='text'
          placeholder='Nombre de la sala'
          className='bg-slate-500 shadow-slate-600 p-3'
        />
        <div className='flex gap-8'>
          <Button
            onClick={handleCreate}
            className='bg-slate-500 shadow-slate-600'
          >
            Crear una sala
          </Button>
          <Button
            onClick={handleJoin}
            className='bg-slate-500 shadow-slate-600'
          >
            Unirse una sala
          </Button>
        </div>
      </div>
    </div>
  )
}
