export default function button({prop,submitType}){
    return(
        <button type={submitType} className={prop.classProp}>{prop.name}</button>
    )
}