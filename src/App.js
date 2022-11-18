import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },30000);
  }

  return (
    <>
  <div>
    <Navbar title="E-PATRAKAAR"/>
  </div>
  <Alert alert={alert}/>
  <div className="container">
    <Form showAlert={showAlert}/>
  </div>
  </>
  );
}

export default App;