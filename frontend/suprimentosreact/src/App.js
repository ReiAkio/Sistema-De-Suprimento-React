import { useState } from "react";
import ReactDOM from 'react-dom/client';

function App() {
  const [name, setName] = useState("");

  return (
    <><form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
    </form><div>
      <h1>Olá {name}</h1>

      </div></>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
