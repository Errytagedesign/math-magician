import { useEffect, useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Qoutes from './components/Qoutes';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const category = 'learning';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const myKey = 'AUj4hMwj4zZWOLjZ1Z9NOQ==F4PGbcfkNTtQOc23';

    const fetchQoutes = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': `${myKey}`,
          },
        });
        const qoutes = await response.json();
        setData(qoutes);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchQoutes();
  }, [setData, setIsLoading]);

  return (
    <div className="App">
      <Calculator />
      <Qoutes data={data} loading={isLoading} error={hasError} />
    </div>
  );
}

export default App;
