import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React from 'react'
import {
  Control,
  useFieldArray,
  useForm,
  UseFormRegister,
} from 'react-hook-form'
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
  control: Control<{
    learnInfos: LearnInfo[]
  }>
  topRemove: (index: number) => void
}

const ScheduleInputPair: React.FC<Props> = ({
  index,
  register,
  control,
  topRemove,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `learnInfos.${index}.cccc`,
    keyName: 'key', // デフォルトではidだが、keyに変更。
  })

  const addLearnInfoss = () => {
    append({ notifyDate: '' })
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
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
          <button
            className="p-2 rounded-full bg-yellow-400"
            onClick={() => topRemove(index)}
          >
            <MinusIcon w={6} h={6} color={'white'} />
          </button>
        </div>
        <div>
          <ul className="space-y-5">
            {fields.map((field, i) => (
              <li key={field.key} className="flex space-x-5">
                <Input
                  {...register(`learnInfos.${index}.cccc.${i}.notifyDate`)}
                  placeholder="cccc"
                  bg="white"
                />
                <button
                  className="p-2 rounded-full bg-yellow-400"
                  onClick={() => remove(index)}
                >
                  <MinusIcon w={6} h={6} color={'white'} />
                </button>
              </li>
            ))}
            <li className="flex justify-end">
              <button
                className="p-2 rounded-full bg-yellow-400"
                onClick={addLearnInfoss}
              >
                <AddIcon w={6} h={6} color={'white'} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ScheduleInputPair
