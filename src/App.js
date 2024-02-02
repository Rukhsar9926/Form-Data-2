import './App.css';
import { Form } from './Components/Form';
import { Navbar } from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      <Navbar />

      <div className='container mt-5' >
        <Form />
       

      </div>




    </>
  );
}

export default App;
