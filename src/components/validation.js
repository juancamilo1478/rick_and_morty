const regUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regPass = /^(?=.*\d)[a-zA-Z\d]{6,10}$/;


const validation = (user)=>{

    const errors = {};
    if (user.username==='') {
        errors.username= 'Espacio vacío'; 
    }
    if (user.username.length>35) {
        errors.username= 'Correo muy grande'; 
    }
    if (!regUser.test(user.username)) {
        errors.username= 'No es un correo';
    }
    if (!regPass.test(user.password)) {
        errors.password= 'Necesita almenos 1# y 6-10 caracteres';
    }

    return errors;
}

export default validation;