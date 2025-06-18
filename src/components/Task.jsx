import Button from "./Button";

const Task=({task})=>{

    return(
        <div className="flex gap-2">
       <div className="h-12 w-[300px] bg-pink-200">{task} </div>            
<div className="flex gap-2">
    <Button text={"Edit"}/> 
    <Button text={"Delete"}/> 
       </div>
       </div >
    )
}
export default Task;