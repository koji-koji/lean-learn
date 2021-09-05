import { MinusIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React from 'react'
import { useFieldArray, useForm, UseFormRegister } from 'react-hook-form'
import { LearnInfo } from './LearnSettingCardComponent'

export type ScheduleInput = {
  example: string
  exampleRequired: string
}

interface Props {
  index: number
  register: UseFormRegister<{
    learnInfos: LearnInfo[]
  }>
}

const ScheduleInputPair: React.FC<Props> = ({ index, register }) => {
  return (
    <>
      <Input
        {...register(`learnInfos.${index}.firstName`)}
        placeholder="苗字"
        bg="white"
      />
      <Input
        {...register(`learnInfos.${index}.lastName`)}
        placeholder="名前"
        bg="white"
      />
    </>
  )
}

export default ScheduleInputPair
