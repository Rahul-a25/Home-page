
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg)",height:"700px"}} className="App">
      <Navbar/>
      <h1 style={{fontSize:"50px",color:"black"}}>Home</h1>
      <footer style={{
        marginTop:"450px",
        fontSize:"30px",
        color:"white",
        fontWeight:"600"
      }}>Made by 🧡Rahul Arora 🧡</footer>
    </div>
  );
}

export default App;
