import React from 'react'

import LearnSettingCardComponent from '../mass/LearnSettingCardComponent'

type Inputs = {
  example: string
  exampleRequired: string
}

const LearnSettingAreaComponent: React.FC = () => {
  return (
    <section className="p-10 w-1/2">
      <p>学習設定</p>
      <LearnSettingCardComponent />
    </section>
  )
}

export default LearnSettingAreaComponent
