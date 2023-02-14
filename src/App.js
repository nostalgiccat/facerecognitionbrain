import './App.css';
import ParticlesBg from 'particles-bg'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Navigation from './components/Naviation/Navigation';
import Logo from './components/Logo/Logo'; 
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm />
    
      {/* 
      <FaceRecognition />
      */}
    </div>
  );
}

export default App;
