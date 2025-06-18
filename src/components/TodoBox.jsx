import { useEffect, useState } from "react";
import Button from "./Button";
import Task from "./Task";

const TodoBox=()=>{
const [tasks,setTasks]=useState(() => {
  const saved = localStorage.getItem("todoTasks");
  return saved ? JSON.parse(saved) : [];
});

const [inputValue,setInputValue]=useState("");

useEffect(()=>{
    localStorage.setItem('todoTasks',JSON.stringify(tasks));
},[tasks]);

const handleInput=(e)=>{
const inputText=e.target.value;
setInputValue(inputText);
};

    const handleAdd=()=>{
        if(inputValue.trim() === "") return;
        setTasks((prev)=>[...prev,inputValue]);
        setInputValue("");
    }
 
    return(
        <div className="max-h-[600px] w-[520px] bg-blue-400 px-8 py-10">
        <h1 className="font-bold text-center text-xl mb-5">To-do app</h1>
        <div className="flex gap-2">
        <input type="text" onChange={handleInput} value={inputValue} className="h-12 w-[400px] bg-pink-200 mb-5"/>
        <Button text={"Add"} onClick={handleAdd} />
        </div>
<div className="flex gap-2 flex-col">
    {
        tasks.map((task,i)=>{
            return <Task  task={task} key={i} /> 
        })
    }
</div>

            </div>
    )
}
export default TodoBox;