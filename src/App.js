import logo from './logo.svg';
import './App.css';
import BsicDetails from './form/BsicDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdditionalQuestion from './form/AdditionalQuestion';
import EnteredDetails from './form/EnteredDetails';
import Response from './form/Response';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/' element={<BsicDetails/>}/>
        <Route path='/additionalquestion' element={<AdditionalQuestion/>}/>
        <Route path='/entereddetails' element={<EnteredDetails/>}/>
        <Route path='/response' element={<Response/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
