
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/PageNotFound';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
import React from 'react';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
