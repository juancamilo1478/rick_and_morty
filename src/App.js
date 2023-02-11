import  estilo  from'./App.module.css'
import Cards from './components/card/Cards'
import SearchBar from './components/SearchBar.jsx'
import Portada from './components/Portada'
import { useState,useEffect } from 'react'
import { Routes,Route ,useLocation,useNavigate} from 'react-router-dom'
import Detail from './components/card/Detail'
import Form from './components/Form'
function App () {
  
let[character,setCharacters]=useState([])
const lugar=useLocation()


const onSearch=(character)=> {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

const borrar=(id)=>{
const nuevo= character.filter(character=>character.id!==id)
setCharacters(
  character=nuevo
)
}

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
    <Route path='/cartas' element={<Cards characters={character} borrar={borrar}/>} />  
    <Route path='/detail/:detailId'  element={<Detail/>}/>
    <Route path='/' element={<Form   login={login }/>} />
    </Routes> </ div >)
}






  else {return (<div className={estilo.contenido}>
   
        <SearchBar  onSearch={onSearch}/>
     
      <Routes>
      <Route path='/home' element={<Portada/>}/>
      <Route path='/cartas' element={<Cards characters={character} borrar={borrar}/>} />  
      <Route path='/detail/:detailId'  element={<Detail/>}/>
      </Routes> </ div >)
}}

export default App
