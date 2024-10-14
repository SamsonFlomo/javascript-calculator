import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { buttonList } from "./buttons.js";
import { isOperator } from "./utils.js";

function App() {
    const buttons = buttonList;
    const [answer, setAnswer] = useState(" ");
    const [expression, setExpression] = useState("0");
    
    let et = expression.trim();
    const isOperator = (symbol) => {
           return /[-+*/]/.test(symbol);
        };
    
    function buttonPressed (symbol) {
        
        if (symbol === "clear") {
            setAnswer("");
            setExpression("0");
           } else if (symbol === "negative") {
              if(answer === "") return;
              setAnswer(
                answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
              )
           } else if (symbol === "percent") {
              if(answer === "") return;
              setAnswer((parseFloat(answer) / 100).toString());
           } else if (isOperator(symbol)) {
              setExpression(et + " " + symbol + " ");
           } else if (symbol === "=") {
              calculate();
           } else if (symbol === "0") {
              if(expression.charAt(0) === "0") return;
                setExpression( expression + symbol );
           } else if (symbol === ".") {
              const lastNumber = expression.split(/[-+/*]/g).pop();
              if (lastNumber?.includes(".")) return;
              setExpression(expression + symbol);
           } else {
               if (expression.charAt(0) === "0") {
                  setExpression(expression.slice(1) + symbol);
               } else {
                 setExpression(expression + symbol);
               }
               
           }
     };
     
     const calculate = () => {
        // If the last character is not an operator
        if(isOperator(et.charAt(et.length -1))) return;
        // Two operators in a row to use the last operator
        et = et.replace(/\s/g, "");
        const opts = et.match(/[-+/*]{2,}/g);
        let newExpression = "";
        
        if(opts){
          
          for (let i = 0; i < opts.length; i++) {
        
             if (et.includes(opts[i]) && opts[i]?.charAt(opts[i].length - 1) === "-" ) {
               newExpression = et.replace(opts[i], opts[i]?.slice(opts[i].length - 2));
               console.log(newExpression);
             } else if(et.includes(opts[i])){
               newExpression = et.replace(opts[i], opts[i]?.charAt(opts[i].length - 1));
             } 
           
           }
           
           } else {
             newExpression = et;
           }

        
        if(isOperator(newExpression.charAt(0)) && answer) {
          setAnswer(eval(answer + newExpression));
        } else {
          setAnswer(eval(newExpression));
        };
        
        setExpression("");
        
        };

          
          
  return (
    <div className="App  flex" >
      <h1>Javascript Calculator</h1>

      <div id="calculator" className="flex" >
        <div id="brand">SF</div>
      
        <div id="display">
            {answer}
            {expression}
        </div>

        <div id="buttons">
           {
        	buttons.map((button, index) => (
        		<button 
        			className={button.color} 
        			id={button.id} 
        			onClick={() => buttonPressed(button.input)}
        			key={index} >
        			  {button.data}
        	        </button>
        	))
            }
        </div>
      </div>

    </div>
  );
}

export default App;
