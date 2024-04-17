import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './Components/Navbar';
import Botnet from './Components/Botnet';
import Skills from './pages/Skills';

function App() {
  return (
<BrowserRouter>
<Navbar/>

<Botnet/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/experience" element={<Experience />} />
 <Route path="/projects" element={<Projects />} />
 <Route path="/skills" element={<Skills />} />
</Routes>
</BrowserRouter>
  );
}

export default App;