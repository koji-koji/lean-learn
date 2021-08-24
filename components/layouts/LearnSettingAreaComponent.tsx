import React from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

const LearnSettingAreaComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button className="btn btn-primary">DaisyUI Button</button>
      <p className="text-gray-300 bg-gray-100">aaa</p>
      <div className="p-10">
        <input defaultValue="test" {...register('example')} />
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <input type="submit" />
    </form>
  )
}

export default LearnSettingAreaComponent
