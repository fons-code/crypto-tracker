import React from 'react'
import './styles.css'
interface Props {
    name: string
    state: string
    setState: React.Dispatch<React.SetStateAction<string>> | ((name: string) => void)
    icon?:string
}

const Input : React.FC<Props> = ({name,state, setState, icon}) => {
  return (
      <div className='input_container'>
        <label htmlFor={name}>{name}</label>
        <input type="text" id='search' placeholder={name} value={state} onChange={(e) => setState(e.target.value)} />
        {icon && <img src={icon} alt=""/>}
      </div>
  )
}
export default Input
