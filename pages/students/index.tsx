import Layout from '../../layout/layout'
import TableData from '@/components/tableData'
export default function Student(){
    return(
        <Layout>
            <h1>Student List</h1>
            <div className='w-full flex justify-center'>
               <TableData/>
            </div>
        </Layout>
    )
}