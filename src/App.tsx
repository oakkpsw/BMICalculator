import { useState, useRef } from "react"
import "./App.css"
import BmiResult from "./components/BmiResult"
import UserInput from "./components/UserInput"
import { Button } from "react-bootstrap"
import ThemeSwitcher from "./components/ThemeSwitcher"
function App() {
  const [bmi, setBmi] = useState(0)
  const heightRef = useRef(null)
  const weightRef = useRef(null)
  const calculateBMI = () => {
    const weight = weightRef.current?.value || 0
    const height = heightRef.current?.value || 0
    if (weight <= 0 || height <= 0) {
      alert("Weight and height must be greater than or equal to zero.")
      setBmi(0)
    } else {
      const bmi = Number(weight) / (Number(height) / 100) ** 2

      setBmi(bmi)
    }
  }

  const clearInputs = () => {
    weightRef.current.value = 0
    heightRef.current.value = 0
    setBmi(0)
  }

  return (
    <>
      <h1 className="text-center">BMI Calculator</h1>

      <div className="container py-4 px-3 mx-auto">
        <div className="col-lg-12">
          <UserInput ref={weightRef} type="weight" />
          <UserInput ref={heightRef} type="height" />
        </div>
      </div>
      <div className="col-lg-12">
        <Button className="btn btn-primary me-2" onClick={calculateBMI}>
          Calculate
        </Button>
        <Button className="btn btn-danger" onClick={clearInputs}>
          Clear Inputs
        </Button>
      </div>
      <BmiResult bmi={bmi} />
    </>
  )
}

export default App
