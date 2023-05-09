import { useState, useEffect } from 'react'
import moment from 'moment'

export default function Clock() {
  const [time, setTime] = useState(moment())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.format('ddd D MMM HH:mm')

  return <span>{formattedTime}</span>
}
