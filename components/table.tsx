export default function Table({columns,data}){
    return (
        <>
        <table>
            <thead>
                <tr>
                    {columns.map((column,index)=>(   
                        <th key={index} className={column.classTh}>{column.name}</th> 
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}                
                
            </tbody>
        </table>
        </>
    )
}