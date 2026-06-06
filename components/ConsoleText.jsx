'use client'

import { useState } from 'react'
import UseWrite from './UseWrite'
import UseInput from './UseInput'

const ConsoleText = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep((s) => s + 1)
  }

  return (
    <div className="console-container">
      {step === 1 && (
        <UseWrite nextStep={nextStep} words={['Hello, world!']} />
      )}
      {step === 2 && (
        <UseWrite nextStep={nextStep} words={['Hello, papi!']} />
      )}
      {step === 3 && (
        <UseWrite nextStep={nextStep} words={['Hello, noggi!']} />
      )}
      {step === 4 && <UseInput nextStep={nextStep} />}
    </div>
  )
}

export default ConsoleText
