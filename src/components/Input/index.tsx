import React from 'react'

interface Props {
    name: string
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Input : React.FC<Props> = ({name,state, setState}) => {
  return (
      <div className='input_container'>
        <label htmlFor={name}>{name}</label>
        <input type="text" id='search' placeholder={name} value={state} onChange={(e) => setState(e.target.value)} />
      </div>
  )
}
export default Input
