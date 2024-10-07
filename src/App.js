import logo from './logo.svg';
import './App.css';
import { buttonList } from "./buttons.js";
import { buttonPressed } from "./utils.js";

function App() {
    const buttons = buttonList;

  return (
    <div className="App">
      <h1>Javascript Calculator</h1>

      <div id="calclator">
        <div id="display">
            <div id="answer"></div>
            <div id="expression"></div>
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
