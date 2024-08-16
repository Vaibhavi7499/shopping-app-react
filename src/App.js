import './App.css';
import BsicDetails from './form/BsicDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdditionalQuestion from './form/AdditionalQuestion';
import EnteredDetails from './form/EnteredDetails';
import Response from './form/Response';
import Layout from './Layout';
import Shopping from './shoppingApp/Shopping';
import Cart from './shoppingApp/Cart';
import All from './shoppingApp/All';
import Electronics from './shoppingApp/Electronics';
import Jwellary from './shoppingApp/Jwellary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout/>
      <Routes>
        {/* <Route path='/' element={<BsicDetails/>}/> */}
        <Route path='/additionalquestion' element={<AdditionalQuestion/>}/>
        <Route path='/entereddetails' element={<EnteredDetails/>}/>
        <Route path='/response' element={<Response/>}/>
        <Route path='/' element={<Shopping/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/jwellary' element={<Jwellary/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
