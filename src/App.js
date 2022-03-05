import logo from './logo.svg';
import './App.css';
import Navbar from'./Navbar';

import Livre from './Livre';
import Home from './Home';

function App() {
  var firstname="Oumayma";
  let lastname="Aouidet";
  var fullname=firstname+' '+lastname;

  console.log('hello')
  console.log("votre prenom", firstname);
  return (
    <div >
      <Navbar/>
      <Home/>
      <Livre/>
      
      
    </div>
  );
}

export default App;
