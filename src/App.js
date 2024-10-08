import logo from './logo.svg';
import './App.css';
import { buttonList } from "./buttons.js";
import { buttonPressed } from "./utils.js";

function App() {
    const buttons = buttonList;

  return (
    <div className="App  flex" >
      <h1>Javascript Calculator</h1>

      <div id="calculator" className="flex" >
        <div id="brand">SF</div>
      
        <div id="display" className="flex">
            <div id="answer">24</div>
            <div id="expression">10 + 14</div>
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
