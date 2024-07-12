import { useEffect, useState } from 'react'
import './App.css'
import { List } from './components/List'

const INITIAL_STATE = [
  {
    nick: "menikmati",
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=menikmati',
    description: 'menikmati hace de moderador a veces'
  },
  {
    nick: "elmeromero",
    subMonths: 12,
    avatar: 'https://i.pravatar.cc/150?u=elmeromero',
  }
]

interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className='App'>
      <h1>meniKmati</h1>
      <List subs={subs} />

    </div>
  )

}

export default App
