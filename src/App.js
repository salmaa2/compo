import Adresse from './components/adress.js';
import Name from './components/FullName.js';
import Photo from './components/ProfilePhoto.js';
import './App.css';

function App() {
  return (
   <div>
     <Name></Name>
     <Adresse></Adresse>
     <Photo></Photo>  
   </div>
  );
}

export default App;