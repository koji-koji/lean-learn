import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Icon, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import SeparateHr from '../parts/SeparateHr'
import ScheduleInputPair, { ScheduleInput } from './ScheduleInputPair'

export interface LearnInfo {
  firstName: string
  lastName: string
  notification: { notifyDate: string; notificationText: string }[]
}

const LearnSettingCardComponent: React.FC = () => {
  const { control, register, handleSubmit, getValues } =
    useForm<{ learnInfos: LearnInfo[] }>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'learnInfos',
    keyName: 'key', // デフォルトではidだが、keyに変更。
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  const addLearnInfoss = () => {
    append({
      firstName: '',
      lastName: '',
      notification: [{ notifyDate: '', notificationText: '' }],
    })
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
          <p>学習項目</p>
          <SeparateHr />
          <ul className="space-y-5">
            {fields.map((field, index) => (
              <>
                <li key={field.key} className="flex pt-8">
                  <ScheduleInputPair
                    index={index}
                    register={register}
                    control={control}
                    topRemove={remove}
                    getValues={getValues}
                  />
                </li>
                <SeparateHr key={field.key + index} />
              </>
            ))}
            <li className="flex justify-end">
              <button
                className="p-2 rounded-full bg-yellow-400"
                onClick={addLearnInfoss}
              >
                <AddIcon
                  w={6}
                  h={6}
                  color={'white'}
                  data-testid="addLearnInfoIcon"
                />
              </button>
            </li>
          </ul>
          <SeparateHr />
          <div className="text-right space-x-4">
            <Button colorScheme="teal" size="md">
              一括保存
            </Button>
          </div>
        </form>
      </Box>
    </>
  )
}

export default LearnSettingCardComponent
