import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Contact';
import FinalPage from './finalPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Contact/>}/>
      <Route path='/finalpage' element={<FinalPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
