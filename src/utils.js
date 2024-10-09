import { useState } from "react";

export function buttonPressed (symbol) {
        
        
        switch (symbol) {
          case "clear":
            setAnswer("0");
            setExpression("");
            break;
          case "negative":
            console.log(symbol)
            break;
          case "percentage":
            console.log(symbol)
            break;
          default: 
          console.log("Default Effect");
        };
    };
    
