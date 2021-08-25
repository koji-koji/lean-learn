import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

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

  return (
    <>
      <Box
        w="100%"
        p={4}
        bg="gray"
        color="white"
        borderWidth="1px"
        borderRadius="lg"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-10">
            <Input placeholder="Basic usage" {...register('example')} />
            <Input
              placeholder="Basic usage"
              {...register('exampleRequired', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <input type="submit" />
        </form>
      </Box>
    </>
  )
}

export default LearnSettingCardComponent
