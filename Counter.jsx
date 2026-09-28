import { useState } from "react";
import "./Counter.css"
function Counter (){
const [count ,setCount] = useState (0)





const decrease = () =>{
if (count > 0){
    setCount(count - 1);
}

}

const reset = () =>{
setCount(0)

}




return(

<div>

<h1>counter app</h1>
<h1>{count}</h1>

<button onClick={() => setCount(count + 1)}>increase</button>
<button onClick={ decrease}>decrease</button>
<button onClick={reset}>reset</button>

</div>




);


}








export default Counter;

