import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Icon, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import SeparateHr from '../parts/SeparateHr'
import ScheduleInputPair from './ScheduleInputPair'

type Inputs = {
  example: string
  exampleRequired: string
}

const LearnSettingCardComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit = (data: unknown) => console.log(data)

  console.log(watch('example'))

  const [learnInfos, setLearnInfos] = useState<LearnInfo[]>([])

  const addLearnInfo = () => {
    setLearnInfos([...learnInfos, { name: '', message: '' }])
  }

  return (
    <>
      <Box
        w="100%"
        p={4}
        bg="gray.100"
        color="black.400"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="base"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>項目１</p>
          <SeparateHr />
          <ul className="space-y-5">
            {learnInfos.map((learnInfo, i) => {
              return <ScheduleInputPair key={i} learnInfo={learnInfo} />
            })}
            <li>
              <SeparateHr />
            </li>
            <li className="flex justify-end">
              <button
                className="p-2 rounded-full bg-yellow-400"
                onClick={addLearnInfo}
              >
                <AddIcon w={6} h={6} color={'white'} />
              </button>
            </li>
          </ul>

          <input type="submit" />
        </form>
      </Box>
    </>
  )
}

export default LearnSettingCardComponent

export interface LearnInfo {
  name: string
  message: string
}
