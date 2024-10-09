import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { buttonList } from "./buttons.js";

function App() {
    const buttons = buttonList;
    const [answer, setAnswer] = useState("0");
    const [expression, setExpression] = useState(" 0 ");
    
    const et = expression.trim();
    const isOperator = (symbol) => {
           return /[-+*/]/.test(symbol);
        };
    
    function buttonPressed (symbol) {
        
        if (symbol === "clear") {
            setAnswer("0");
            setExpression("");
           } else if (symbol === "negative") {
              if(answer === "") return;
              setAnswer(
                answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
              )
           } else if (symbol === "percentage") {
              if(answer === "") return;
              setAnswer((parseFloat(answer) / 100).toString());
           } else if (isOperator(symbol)) {
              setExpression(et + " " + symbol + " ");
           } else if (symbol === "=") {
              calculate();
           } else if (symbol === "0") {
              if(expression.charAt(0) !== "0") {
                setExpression( expression + symbol );
              };
           } else if (symbol === ".") {
              const lastNumber = expression.split(/[-+*/]/g).pop();
              if (lastNumber?.includes(".")) return;
              setExpression(expression + symbol);
           } else {
             if (expression.charAt(0) === "0") {
               setExpression(expression.split(1) + symbol);
             } else {
               setExpression( expression + symbol);
             };
           }
     };
     
     const calculate = (input) => {
        // If the last character is not an operator
        if(isOperator(et.charAt(et.length -1))) return;
        // Two operators in a row to use the last operator
        let dec = 3;
        input = input.toString();
        while( dec > 0){
          const take = input.match(/[-+/*]{2,}/g);
          console.log("Result: ", take);
          console.log("Result: ", take[0]);
          if(input.includes(take[1])) {
             console.log(true);
          }
          dec = dec -1;
        }
        
        console.log("Result: ", input);
        };
        
        calculate("12--3+-4*-*");
          
          
  return (
    <div className="App  flex" >
      <h1>Javascript Calculator</h1>

      <div id="calculator" className="flex" >
        <div id="brand">SF</div>
      
        <div id="display" className="flex">
            <div id="answer">{answer}</div>
            <div id="expression">{expression}</div>
        </div>

        <div id="buttons">
           {
        	buttons.map((button) => (
        		<button 
        			className={button.color} 
        			id={button.id} 
        			onClick={() => buttonPressed(button.input)} >
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
