
import {useForm} from 'react-hook-form'
import {useState,useEffect} from 'react'
import { HiOutlineXMark } from "react-icons/hi2";

type FormValues ={
    firstName:string;
    lastName:string;
    age:string;
}

export default function InputForm({propClass}){
  
    const {register,setFocus,reset ,handleSubmit,formState:{errors},watch} = useForm<FormValues>({
        defaultValues:{
            firstName:"",
            lastName:"",
            age:""
        }
    })
    useEffect(() => {
        setFocus("firstName");
      }, [setFocus]);

      const onSubmit = (data) => console.log(data);
    return(
        <div className='flex'>
        <form className='flex space-x-4'  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className=" flex justify-end items-center relative">
                <input 
                    {...register('firstName',
                        {   required: "Nhập tên." ,
                            minLength:{
                                value:2,
                                message:'Tối thiểu 2 kí tự'
                            }
                        })
                    } 
                    placeholder="First name" className='px-1 h-8 border border-blue-400 rounded-md -mr-6'
                />
                <HiOutlineXMark size={20}
                    onClick={()=>{
                        reset({firstName:''})}}
                />
                </div>
                <p>{watch('firstName')}</p> <p className='text-red-600 text-xs'>(*)<span className='text-red-700 text-sm'>{errors.firstName?.message}</span></p>
            </div>
            <div>                                              
            </div>
            <div >
                <input {...register('lastName',{
                                                required:true,
                                                minLength:{
                                                    value:4,
                                                    message:'Tối thiểu thiểu 4 kí tự'
                                                }
                                                }
                                    )} 
                    placeholder="Last name" className='px-1 h-8 border border-blue-400 rounded-md'
                />
                <p className='text-red-600 text-xs'>(*) <span className='text-red-700 text-sm'>{errors.lastName?.message}</span></p>
            </div>
            <div>
                <input className='h-8 border border-blue-900 rounded-lg'
                    type="number"
                    {...register('age',
                    {   required:{
                        value:true,
                        message:'không để trốngs'
                    },
                        minLength:{
                            value:2,
                            message:'Tối thiểu 2 kí tự'
                        }
                    })}
                />
                <p className='text-red-600 text-xs h-4 '>(*) <span className='text-red-700 text-sm'>{errors.age?.message}</span></p>
            </div>
            <button onClick={()=>{
                reset()}} 
                type="button" className='bg-blue-800 h-8 text-white cursor-pointer rounded-md px-2'>Reset All</button>         
            <input type="submit" className='bg-blue-800 h-8 text-white cursor-pointer rounded-md px-2'/>
        </form>

    </div>
    )
}