import Layout from '../../layout/layout'
import Button from '../../components/button'
import {useState,useEffect} from 'react'
import Table from '../../components/table'
import InputForm from '../../components/inputForm'
import {useForm} from 'react-hook-form'

import { HiOutlineXMark } from "react-icons/hi2";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


 
const columns=[
    {
        name:"#", 
        classTh:'bg-red-900' 
    },
    {  
        name:'Name',
        classTh:'bg-blue-900 w-44' 
    },
    {
        name:"Email",
        classTh:'bg-green-900'
    } 
]
const data = [
    {
        name:'Nguyễn Xuân phú',
        email:'ngsphuc@gmail.com',
    },
    {
        name:'Lê Bá Nha',
        email:'lbnha@gmail.com'
    },
    {
        name:'Trần Xuân Đán',
        email:'txdan@gmail.com'
    }
]
    const propClassInput="h-8 bg-blue-200 rounded-lg text-white text-sm"
    type FormValues ={
        firstName:string;
        lastName:string;
        age:string;
    }
export default function Test(){ 
    const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
    const [data, setData] = useState<string>("");
    useEffect(() => {
        setEditorLoaded(true);
      }, []);
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
        <Layout>
            <div className='px-10 flex space-x-3 py-4'>
                <h1>Table</h1>
            </div>
            <div className='w-full flex justify-center'>
              {/* <Table  columns = {columns} data={data}/> */}
            </div>
            <div className=' w-full h-1 bg-fuchsia-500'></div>
            <div>
                <h1>Form Input</h1>
                <div className='flex'>
                    <form className='flex space-x-4'  onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className=" flex justify-end items-center relative">
                            <input 
                                {...register('firstName',
                                    {   required:'Tên không để trống',
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
                {/* <div className='flex space-x-4'>
                    <InputForm propClass={propClassInput}/>
                    <InputForm/>
                </div> */}

            </div>
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                editor={ClassicEditor}
                data="<p> Hello from CKeditor 5</p>"
                config={{
                    toolbar: [
                            'undo', 'redo',
                            '|', 'heading',
                            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                            '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                            '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                            '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
                        ],
                       
                }}
                />
            </div>
            
        </Layout>
    )
}

