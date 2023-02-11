import {useState} from "react";
 import {Link}     from "react-router-dom";
 import validation from "./validation";

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


    return(
    <div>
        <form onSubmit={handelsubmit}>
            <Link to='/home' >
            <button>salir</button>
            </Link>
            <label htmlFor="username" >user name: </label>
            <input type='text' name="username"   value={user.username} onChange={handleInput}/>
            <p>{errors.username}</p>




            <label htmlFor="password">Password: </label>
            <input type='password' name="password" value={user.password}   onChange={handleInput}/>
            <p>{errors.password}</p>
            <button type="submit">Login</button>
        </form>
    </div>)
}
export default Form;