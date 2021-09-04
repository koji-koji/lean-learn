import { MinusIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { LearnInfo } from './LearnSettingCardComponent'

export type ScheduleInput = {
  example: string
  exampleRequired: string
}

interface Props {
  learnInfo: LearnInfo
  register: any
  control: any
  index: number
  field: LearnInfo
}

const ScheduleInputPair: React.FC<Props> = ({
  learnInfo,
  register,
  control,
  index,
}) => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<LearnInfo>()
  const onSubmit = (data: unknown) => console.log(data)

  const { fields, remove, append } = useFieldArray({
    control,
    name: `test.${index}.nestedArray`,
  })

  return (
    <>
      <div className="flex space-x-2">
        <input
          {...register(`test.${index}.nestedArray.field1`, {
            required: true,
          })}
          style={{ marginRight: '25px' }}
        />
        {/* <input
          name={`test.${index}.nestedArray.field1`}
          placeholder="Basic usage"
          // bg="white"
          // {...(register(`learnInfoArray[${index}].name`), { required: true })}
        />
        <Input
          name={`test.${index}.nestedArray.field2`}
          placeholder="Basic usage"
          bg="white"
          // {...(register(`learnInfoArray[${index}].name`), { required: true })}
        />
        <Input
          placeholder="Basic usage"
          {...(register(`learnInfoArray${index}.message`), { required: true })}
        />
        <button className="p-2 rounded-full bg-yellow-400">
          <MinusIcon w={6} h={6} color={'white'} />
        </button> */}
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
