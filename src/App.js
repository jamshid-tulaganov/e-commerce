import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from './pages/homepage/homepage';

const HatPage = (props) => {
    console.log(props)
    return (
        <>
            
        </>
    )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/hat' element={<HatPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
