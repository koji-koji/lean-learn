import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Icon, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import SeparateHr from '../parts/SeparateHr'
import ScheduleInputPair, { ScheduleInput } from './ScheduleInputPair'

// interface Inputs {
//   example: string
//   exampleRequired: string
// }

// const LearnSettingCardComponent: React.FC = () => {
//   const { control, register, handleSubmit, getValues } =
//     useForm<{ test: LearnInfo[] }>()

//   const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
//     {
//       control, // control props comes from useForm (optional: if you are using FormContext)
//       name: 'test', // unique name for your Field Array
//       keyName: 'keyName',
//       // keyName: "id", default to "id", you can change the key name
//     }
//   )

//   // const { control, register, watch, handleSubmit, getValues } =
//   //   useForm<{ learnInfoArray: LearnInfo[] }>()
//   // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
//   //   {
//   //     control, // control props comes from useForm (optional: if you are using FormContext)
//   //     name: `learnInfoArray`, // unique name for your Field Array
//   //     // keyName: "id", default to "id", you can change the key name
//   //   }
//   // )

//   // const defaultValues = {
//   //   test: [
//   //     {
//   //       name: 'useFieldArray1',
//   //       message: 'hoge',
//   //       nestedArray: [{ field1: 'field1', field2: 'field2' }],
//   //     },
//   //     {
//   //       name: 'useFieldArray2',
//   //       message: 'hoge',
//   //       nestedArray: [{ field1: 'field1', field2: 'field2' }],
//   //     },
//   //   ],
//   // }

//   // const {
//   //   control,
//   //   register,
//   //   handleSubmit,
//   //   getValues,
//   //   errors,
//   //   reset,
//   //   setValue,
//   // } = useForm({
//   //   defaultValues,
//   // })

//   // const { fields, append, remove, prepend } = useFieldArray({
//   //   control,
//   //   name: 'test',
//   // })

//   const onSubmit = (data: unknown) => {
//     debugger
//     console.log(data)
//   }

//   // console.log(watch('example'))

//   const [learnInfos, setLearnInfos] = useState<LearnInfo[]>([])

//   const addLearnInfo = () => {
//     append({ name: '', message: '' })
//   }

//   return (
//     <>
//       <Box
//         w="100%"
//         p={4}
//         bg="gray.100"
//         color="black.400"
//         borderWidth="1px"
//         borderRadius="lg"
//         boxShadow="base"
//       >
//         {/* <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="p-10">
//             <Input placeholder="Basic usage" {...register('example')} />
//             <Input
//               placeholder="Basic usage"
//               {...register('exampleRequired', { required: true })}
//             />
//             {errors.exampleRequired && <span>This field is required</span>}
//           </div>
//           <input type="submit" />
//         </form> */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <p>項目１</p>
//           <SeparateHr />
//           <ul className="space-y-5">
//             {/* <Input
//               placeholder="Basic usage"
//               {...register('test.', { required: true })}
//             /> */}
//             {fields.map((field, index) => (
//               <>
//                 <div key={field.name} className="flex space-x-5">
//                   {/* <input
//                     key={field.keyName} // important to include key with field's id
//                     {...register(`test.${index}.name`)}
//                     defaultValue={field.name} // make sure to include defaultValue
//                   />
//                   <input
//                     key={field.keyName} // important to include key with field's id
//                     {...register(`test.${index}.message`)}
//                     defaultValue={field.message} // make sure to include defaultValue
//                   /> */}
//                   <Input
//                     key={field.keyName} // important to include key with field's id
//                     {...register(`test.${index}.name`)}
//                     placeholder="苗字"
//                     bg="white"
//                     // {...(register(`learnInfoArray[${index}].name`), { required: true })}
//                   />
//                   <Input
//                     key={field.keyName} // important to include key with field's id
//                     {...register(`test.${index}.message`)}
//                     placeholder="名前"
//                     bg="white"
//                     // {...(register(`learnInfoArray[${index}].name`), { required: true })}
//                   />
//                 </div>
//                 <SeparateHr />
//               </>
//             ))}
//             {/* {fields.map((learnInfo, i) => {
//               return (
//                 <ScheduleInputPair
//                   key={i}
//                   learnInfo={learnInfo}
//                   control={control}
//                   register={register}
//                   field={learnInfo}
//                   index={i}
//                 />
//               )
//             })} */}
//             <li>
//               <SeparateHr />
//             </li>
//             <li className="flex justify-end">
//               <button
//                 className="p-2 rounded-full bg-yellow-400"
//                 onClick={addLearnInfo}
//               >
//                 <AddIcon w={6} h={6} color={'white'} />
//               </button>
//             </li>
//           </ul>
//           <content>
//             <div style={{ background: 'yellow' }}>
//               <div>デバッグ用記述 debugger discription</div>
//               <pre>{JSON.stringify(getValues(), null, 4)}</pre>
//               <div>デバッグ用記述 debugger discription</div>
//               <pre>{JSON.stringify(learnInfos, null, 4)}</pre>
//               <div>デバッグ用記述 debugger discription</div>
//             </div>
//           </content>

//           <input type="submit" />
//         </form>
//       </Box>
//     </>
//   )
// }

// export default LearnSettingCardComponent

// export interface LearnInfo {
//   name: string
//   message: string
// }

export interface LearnInfo {
  firstName: string
  lastName: string
}

const SampleCardComponent: React.FC = () => {
  const { control, register, handleSubmit, getValues } =
    useForm<{ sampleForm: LearnInfo[] }>()

  const { fields, append } = useFieldArray({
    control,
    name: 'sampleForm',
    keyName: 'key', // デフォルトではidだが、keyに変更。
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  const addSampleForms = () => {
    append({ firstName: '', lastName: '' })
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
          <p>氏名</p>
          <SeparateHr />
          <ul className="space-y-5">
            {fields.map((field, index) => (
              <li key={field.key} className="flex space-x-5">
                <Input
                  {...register(`sampleForm.${index}.firstName`)}
                  placeholder="苗字"
                  bg="white"
                />
                <Input
                  {...register(`sampleForm.${index}.lastName`)}
                  placeholder="名前"
                  bg="white"
                />
              </li>
            ))}
            <li className="flex justify-end">
              <button
                className="p-2 rounded-full bg-yellow-400"
                onClick={addSampleForms}
              >
                <AddIcon w={6} h={6} color={'white'} />
              </button>
            </li>
          </ul>
          {/* <SeparateHr /> */}
          {/* <input
            type="submit"
            value="コンソールに表示"
            className="flex justify-end m-10"
          /> */}
        </form>
      </Box>
    </>
  )
}

export default SampleCardComponent
