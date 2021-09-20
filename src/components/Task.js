import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onToggle,editTasksText,onDelete }) => {
    const [editable,setEditable]=useState(false)
    const [val,setValue]=useState(task.text)
    //const random= {task.id,...val}
    
    
    const handleChange=(e)=>{
       //set( e.target.value)
       setValue(e.target.value)
    }

    
    const handleClick=()=>{
        setEditable(true)
    }
    const handleKeyPress=(e)=>{
        if (e.key === 13 || e.key === "Enter") {
            setEditable(false)
            editTasksText(task.id,val)
            //console.log(val);

            // valChange({})
        }
    }
      
    return (
        <div 
            className={`task 
            ${task.reminder ? 'reminder' : ''}`}
            onClick={() =>onToggle(task.id)}
        > 

           {editable? (
              <input 
                value={val} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}
              />)
                :
                (<div onDoubleClick={handleClick}>{val}</div>)}
                {/* <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                /> */}
            
            <p>{task.day}</p>
        </div>
    )
}

export default Task

{/* {<FaTimes style={    
                    { color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                /> }  */}

