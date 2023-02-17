import {useState}  from "react";
 import {Link}     from "react-router-dom";
 import validation from "./validation";
import estilo      from "./Form.module.css";
import  pantalla        from   "../img/portada.jpg"
import loginfont  from "../img/login.png"

function  Form (props){

    const[user,setUser]=useState({
        username:'',
        password:'',
    })

    const[errors,seterrors]=useState({
        username:'',
        password:'',
    })



    const handleInput =(e)=>{
        setUser({
             ...user,
            [e.target.name]: e.target.value
        })

        seterrors(
            validation({
                ...user,
                [e.target.name]:e.target.value
            })
            );

    }


const handelsubmit=(e)=>{
        e.preventDefault()
        props.login(user)
    
}


    return(  <div>
    <img src={pantalla} alt="foto" className={estilo.foto}/>
    <div className={estilo.contenido}>
        <img src={loginfont} alt="fot" className={estilo.fondol}/>
        <form onSubmit={handelsubmit}>
            <Link to='/home' className={estilo.lin}>
            <button className={estilo.salir}>Salir</button>
            </Link>
            
            <div className={estilo.contenidoI}>
            <label htmlFor="username" >User name: </label>
            <input type='text' name="username"   value={user.username} onChange={handleInput} className={estilo.buscador}/>
            </div>
            <p className={estilo.alerta}>{errors.username}</p>
         


            <div className={estilo.contenidoI}>
            <label htmlFor="password">Password: </label>
            <input type='password' name="password" value={user.password}   onChange={handleInput} className={estilo.buscador}/>
            </div>



            <p className={estilo.alerta}>{errors.password}</p>
            <button type="submit" className={estilo.login}>Login</button>
        </form>
    </div></div>)
}
export default Form;