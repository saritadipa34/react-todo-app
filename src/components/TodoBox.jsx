import { useEffect, useState } from "react";
import Button from "./Button";
import Task from "./Task";

const TodoBox=()=>{
const [tasks,setTasks]=useState(() => {
  const saved = localStorage.getItem("todoTasks" || []);
  return saved ? JSON.parse(saved) : [];
});

const [inputValue,setInputValue]=useState("");

useEffect(()=>{
    localStorage.setItem('todoTasks',JSON.stringify(tasks));
},[tasks]);

 const handleEdit=(index)=>{
 const editTask=tasks[index];
 console.log(editTask);
 const newTask=prompt("edit todo",editTask);
 if(newTask === null || newTask === ""){
    alert("Invalid input");
    return;
 };
const updatedTasks=[...tasks];
updatedTasks[index]=newTask;
setTasks(updatedTasks);
 console.log(newTask);
 console.log("EDIT");
}

 const handleAdd=()=>{
        if(inputValue.trim() === "") return;
        setTasks((prev)=>[...prev,inputValue]);
        setInputValue("");
    }

const handleInput=(e)=>{
const inputText=e.target.value;
setInputValue(inputText);
};
 
    return(
        <div className="max-h-[600px] w-[520px] bg-blue-400 px-8 py-10">
        <h1 className="font-bold text-center text-xl mb-5">To-do app</h1>
        <div className="flex gap-2">
        <input type="text" onChange={handleInput} value={inputValue} className="h-12 w-[400px] bg-pink-200 mb-5"/>
        <Button text={"Add"} onClick={handleAdd} />
        </div>
<div className="flex gap-2 flex-col">
    {
        tasks.map((task,index)=>{
             return <Task  task={task} key={index} handleEdit={()=>handleEdit(index)} /> 
        })
    }
</div>

            </div>
    )
}
export default TodoBox;