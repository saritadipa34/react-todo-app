import Button from "./Button";

const Task=({task,handleEdit,handleDelete})=>{

    return(
        <div className="flex gap-2">
       <div className="h-12 w-[300px] bg-pink-200">{task} </div>            
<div className="flex gap-2">
    <Button text={"Edit"} onClick={handleEdit} /> 
    <Button text={"Delete"}  onClick={handleDelete}/> 
       </div>
       </div>
    )
}
export default Task;