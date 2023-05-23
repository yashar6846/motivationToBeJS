
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Detail } from './components/pages/Detail';
import { Navbar } from './components/navFo/Navbar';
import { Footer } from './components/navFo/Footer';
import { PageContainer } from './components/containers/PageContainer';
import { useSelector } from 'react-redux';
import Caert from './components/pages/Caert';
function App() {
  const {drawer} =useSelector(state=> state.drawer)
 
  return (
    <div>
      <PageContainer>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
      </Routes>
      {drawer && <Caert />}
      <Footer />
      </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
