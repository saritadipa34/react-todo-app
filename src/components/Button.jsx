
const Button=({text,onClick})=>{
    return(
        <button className="h-12 w-20 bg-green-300 cursor-pointer" onClick={onClick} >
{text}
        </button>
    )
}
export default Button;