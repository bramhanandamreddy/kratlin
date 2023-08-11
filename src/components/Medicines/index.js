import {useState, useEffect} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
import './index.css'

const Medicines = () => {
  const {speak} = useSpeechSynthesis()

  const [showWaterAlert, setShowWaterAlert] = useState(false)
  const [showWalkAlert, setShowWalkAlert] = useState(false)
  const [medicationRemindersCount, setMedicationRemindersCount] = useState(0)
  const [drinkingReminderCount, setReminderCount] = useState(0)

  useEffect(() => {
    const waterTimer = setInterval(() => {
      setShowWaterAlert(true)
    }, 2 * 60 * 1000)

    const walkTimer = setTimeout(() => {
      setShowWalkAlert(true)
    }, 2 * 60 * 60 * 1000)

    return () => {
      clearTimeout(waterTimer)
      clearTimeout(walkTimer)
    }
  }, [])

  useEffect(() => {
    const now = new Date()
    const currentHour = now.getHours()

    if (currentHour === 8 && medicationRemindersCount < 3) {
      speak({text: "It's time for your morning medication."})
      setMedicationRemindersCount(count => count + 1)
    } else if (currentHour === 12 && medicationRemindersCount < 3) {
      speak({text: "It's time for your afternoon medication."})
      setMedicationRemindersCount(count => count + 1)
    } else if (currentHour === 18 && medicationRemindersCount < 3) {
      speak({text: "It's time for your evening medication."})
      setMedicationRemindersCount(count => count + 1)
    }

    if (showWaterAlert && drinkingReminderCount < 3) {
      speak({text: 'Remember to drink water!'})
      setReminderCount(count => count + 1)
      console.log(showWaterAlert)
    }

    if (showWalkAlert) {
      speak({text: "It's time for a short walk!"})
    }
  }, [
    showWaterAlert,
    showWalkAlert,
    speak,
    medicationRemindersCount,
    drinkingReminderCount,
  ])

  return (
    <div>
      <h1>Medicines</h1>
      <div>
        <h2>Medication time to take</h2>
        <ul>
          <li>Morning: 8 AM</li>
          <li>Afternoon: 12 PM</li>
          <li>Evening: 6 PM</li>
        </ul>
      </div>
      {showWaterAlert && <p>Remember to drink water!</p>}
      {showWalkAlert && <p>It s time for a short walk!</p>}
    </div>
  )
}

export default Medicines
