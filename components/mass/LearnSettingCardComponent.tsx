import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Icon, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import SeparateHr from '../parts/SeparateHr'
import ScheduleInputPair from './ScheduleInputPair'

type Inputs = {
  example: string
  exampleRequired: string
}

const LearnSettingCardComponent: React.FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>()
  const { control, register, watch, handleSubmit } = useForm()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'test', // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  )
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
              return (
                <ScheduleInputPair
                  key={i}
                  learnInfo={learnInfo}
                  register={register}
                />
              )
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
