import Button from "./Button";

const Task=()=>{
    return(
        <div className="flex gap-2">
       <input type="text"  className="h-12 w-[300px] bg-pink-200" />            
<div className="flex gap-2">
    <Button text={"Edit"}/> 
    <Button text={"Delete"}/> 
       </div>
       </div >
    )
}
export default Task;