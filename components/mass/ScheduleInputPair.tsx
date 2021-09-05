import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, Input } from '@chakra-ui/react'
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
    name: `learnInfos.${index}.notification`,
    keyName: 'key', // デフォルトではidだが、keyに変更。
  })

  const addLearnInfos = () => {
    append({ notifyDate: '' })
  }

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-full space-y-4">
          <div>
            <p>学習項目</p>
            <Input
              {...register(`learnInfos.${index}.firstName`)}
              placeholder="学習項目"
              bg="white"
            />
          </div>
          <div>
            <p>詳細</p>
            <Input
              {...register(`learnInfos.${index}.lastName`)}
              placeholder="詳細"
              bg="white"
            />
          </div>
          <div>
            <p>復習日</p>
            <ul className="space-y-5 pb-10">
              {fields.map((field, i) => (
                <li key={field.key} className="flex space-x-5">
                  <div className="w-28 flex">
                    <Input
                      {...register(
                        `learnInfos.${index}.notification.${i}.notifyDate`
                      )}
                      placeholder="1"
                      bg="white"
                    />
                    <p className="pl-2 pt-3 w-28">日後</p>
                  </div>

                  <Input
                    {...register(
                      `learnInfos.${index}.notification.${i}.notificationText`
                    )}
                    placeholder="復習コメント"
                    bg="white"
                  />

                  <button
                    className="p-2 rounded-full bg-yellow-400"
                    onClick={() => remove(i)}
                  >
                    <MinusIcon w={6} h={6} color={'white'} />
                  </button>
                </li>
              ))}
              <li className="flex justify-end">
                <button
                  className="p-2 rounded-full bg-yellow-400"
                  onClick={addLearnInfos}
                >
                  <AddIcon w={6} h={6} color={'white'} />
                </button>
              </li>
            </ul>
            <div className="flex justify-between space-x-4">
              <Button
                colorScheme="pink"
                size="md"
                onClick={() => topRemove(index)}
              >
                削除
              </Button>
              <Button colorScheme="teal" size="md">
                保存
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default ScheduleInputPair
