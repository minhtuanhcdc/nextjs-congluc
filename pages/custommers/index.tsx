import Layout from '../../layout/layout'
export default function custommers(){
    return(
        <Layout>
            <h1>Bệnh nhân List</h1>
            <div className='flex justify-center px-10 mt-4'>
            <table className="w-full">
                <thead className='border border-gray-800 bg-slate-400'>
                    <tr className='py-1'>
                        <th className='border-r border-gray-800 w-4 py-0'><span className='leading-3'>Select</span><input className='leading-3' type="checkbox"/></th>
                        <th className='border-r border-gray-800'>Song</th>
                        <th className='border-r border-gray-800'>Artist</th>
                        <th className='w-32'>Year</th>
                        <th className='w-32'>Action</th>
                    </tr>
                </thead>
            <tbody className='border border-gray-800'>
                <tr className='hover:bg-green-200'>
                    <td className='border-r border-gray-800 px-2 text-center'><input type="checkbox"/></td>
                    <td className='border-r border-gray-800 px-2 text-center'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className='border-r border-gray-800 text-center'>Malcolm Lockyer</td>
                    <td className='border-r border-gray-800 text-center'>1961</td>
                    <td className='border-r border-gray-800 text-center'>-</td>
                </tr>
                
            </tbody>
            </table>
            </div>
        </Layout>
    )
}