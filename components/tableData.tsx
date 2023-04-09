import {useState, useEffect} from 'react'




export default function TableData(){
    const [studentState, setStudentState] = useState([])
    useEffect(()=>{
        let studentState = [
            {id:1, name:'John Son',birthday:1998,address:'HN VN', phone:12},
            {id:2, name:'John Son',birthday:1998,address:'HCM VN', phone:12},
            {id:3, name:'John Son',birthday:1998,address:'Hai Phòng VN', phone:12},
            {id:4, name:'John Son',birthday:1998,address:'Cần Thơ VN', phone:12},
                ];
        const test = studentState.map((d)=>{
            return{"select":false,id:d.id,name:d.name,birthday:d.birthday,address:d.address,phone:d.phone}
        });
        setStudentState(test);
    },[]);
    return( 
        <>
            <table className='w-full'>
               <thead>
                <tr>
                 <th className='w-4'><input onChange={(e)=>{
                    let checked = e.target.checked;
                    setStudentState(studentState.map((d)=>{
                        d.select=checked;
                        return d;
                    }))
                 }} type="checkbox"/></th>
                 <th className='w-20'>Name</th>
                 <th className='w-50'>Năm sinh</th>
                 <th className='w-44'>Địa chỉ</th>
                 <th className='w-10'>Phone</th>
                </tr>
               </thead>
                <tbody>
                  {studentState.map((d,i)=>(
                    <tr key={i}>
                        <th><input onChange={(event)=>{
                            let checked=event.target.checked;
                            setStudentState(studentState.map((data)=>{
                                if(d.id === data.id){
                                    data.select=checked;
                                }
                                return data;
                            }))
                        }} type="checkbox" checked={d.select}/></th>
                        <td>{d.name}</td>
                        <td>{d.birthday}</td>
                        <td>{d.address}</td>
                        <td>{d.phone}</td>
                    </tr>

                  ))}
                </tbody>
            
            </table>
        </>
    )
}