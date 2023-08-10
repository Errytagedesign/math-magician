import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <section className="screen">
        <span>0</span>
      </section>

      <Calculator />
    </div>
  );
}

export default App;
