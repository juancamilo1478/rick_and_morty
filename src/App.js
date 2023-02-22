import  estilo  from'./App.module.css'
import Cards from './components/card/Cards'
import SearchBar from './components/searchBar/SearchBar'
import Portada from './components/Portada'
import { useState,useEffect } from 'react'
import { Routes,Route ,useLocation,useNavigate} from 'react-router-dom'
import Detail from './components/card/Detail'
import Form from './components/Form'
import Favorites from './components/favorites/favorites'

function App () {
const lugar=useLocation()
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';


function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

if(lugar.pathname==='/' || lugar.pathname==='/home')
{
   return(<div className={estilo.contenido}>
    <Routes>
    <Route path='/home' element={<Portada/>}/>
    <Route path='/cartas' element={<Cards />} />  
    <Route path='/detail/:detailId'  element={<Detail/>}/>
    <Route path='/' element={<Form   login={login }/>} />
    </Routes> </ div >)
}
  else {return (<div className={estilo.contenido}>
   
      <SearchBar />   
      <Routes>
      <Route path='/home' element={<Portada />}/>
      <Route path='/cartas' element={<Cards />} />  
      <Route path='/detail/:detailId'  element={<Detail/>}/>
      <Route path='/favorites' element={<Favorites/>} />
      </Routes> </ div >)
}}

export default App
