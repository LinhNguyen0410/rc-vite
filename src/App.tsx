import { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { DatePicker, message } from 'antd';
import Header from './components/Header';

function App({ num }: { num: number }) {
  const [date, setDate] = useState<any>(null);
  const handleChange = (value: any) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };

  return (
    <div className="App">
      <Header />
      <h1>Hello world React! Num: {num}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div>
    </div>
  );
}

export default App;
