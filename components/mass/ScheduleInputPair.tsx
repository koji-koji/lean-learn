import { MinusIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { LearnInfo } from './LearnSettingCardComponent'

type Inputs = {
  example: string
  exampleRequired: string
}

interface Props {
  learnInfo: LearnInfo
}

const ScheduleInputPair: React.FC<Props> = ({ learnInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LearnInfo>()
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <>
      <div className="flex space-x-2">
        <Input
          placeholder="Basic usage"
          bg="white"
          {...(register('name'), { required: true })}
        />
        <Input placeholder="Basic usage" {...register('message')} />
        <button className="p-2 rounded-full bg-yellow-400">
          <MinusIcon w={6} h={6} color={'white'} />
        </button>
      </div>
      {/* <Input
              placeholder="Basic usage"
              {...register('exampleRequired', { required: true })}
            /> */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
    </>
  )
}

export default ScheduleInputPair
