import  {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const DoctorVisit = () => {
  const [doctorCheckups, setDoctorCheckups] = useState(
    JSON.parse(localStorage.getItem('doctorCheckups')) || [],
  )

  const [newCheckup, setNewCheckup] = useState({
    date: '',
    doctorName: '',
    hospitalName: '',
    result: '',
  })

  const handleInputChange = event => {
    const {name, value} = event.target
    setNewCheckup(prevCheckup => ({
      ...prevCheckup,
      [name]: value,
    }))
  }

  const handleAddCheckup = () => {
    if (
      newCheckup.date &&
      newCheckup.doctorName &&
      newCheckup.hospitalName &&
      newCheckup.result
    ) {
      const updatedCheckups = [...doctorCheckups, {...newCheckup, id: uuidv4()}]
      setDoctorCheckups(updatedCheckups)
      localStorage.setItem('doctorCheckups', JSON.stringify(updatedCheckups))
      setNewCheckup({
        date: '',
        doctorName: '',
        hospitalName: '',
        result: '',
      })
    }
  }

  return (
    <div className="container">
      <h1>Doctor Appointments</h1>
      <div className="form-group">
        <h2> Checkup Detailss</h2>
        <label className="label">
          Date:
          <input
            type="date"
            name="date"
            value={newCheckup.date}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Doctor s Name:
          <input
            type="text"
            name="doctorName"
            value={newCheckup.doctorName}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Hospital Name:
          <input
            type="text"
            name="hospitalName"
            value={newCheckup.hospitalName}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Result:
          <input
            type="text"
            name="result"
            value={newCheckup.result}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <button className="button" type="button" onClick={handleAddCheckup}>
          Add Checkup
        </button>
      </div>
      <div>
        <h2>Added Checkups</h2>
        <ul className="checkup-list">
          {doctorCheckups.map(checkup => (
            <li key={checkup.id} className="checkup-item">
              <div className="checkup-details">
                <strong>Date:</strong> {checkup.date}, <strong>Doctor:</strong>{' '}
                {checkup.doctorName}, <strong>Hospital:</strong>{' '}
                {checkup.hospitalName}, <strong>Result:</strong>{' '}
                {checkup.result}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DoctorVisit
