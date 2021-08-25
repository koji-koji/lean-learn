import React from 'react'

import LearnSettingCardComponent from '../mass/LearnSettingCardComponent'

type Inputs = {
  example: string
  exampleRequired: string
}

const LearnSettingAreaComponent: React.FC = () => {
  return (
    <section>
      <LearnSettingCardComponent />
    </section>
  )
}

export default LearnSettingAreaComponent
