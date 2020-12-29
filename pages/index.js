import { useState } from 'react'
import { Button } from '../components/Button'

export default function Home() {
  const [isBetUp, setIsBetUp] = useState(null)

  return (
    <div className="container">
      <div className="btn">{isBetUp ? 'up' : 'down'}</div>
      <Button name="up" setIsBetUp={setIsBetUp} />
      <Button name="down" setIsBetUp={setIsBetUp} />
    </div>
  )
}
