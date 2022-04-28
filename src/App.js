import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/authentication/authentication.component';

const Shop = () => {
  return (
   <div>
    <h1>Hellu</h1>
    <h1 className="e">hellu</h1>
   </div>
   
  );

}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='/shop' element={<Shop />}/> 
        <Route path='/auth' element={<Signin />}/> 
      </Route>
    </Routes>
  );
};

export default App;
