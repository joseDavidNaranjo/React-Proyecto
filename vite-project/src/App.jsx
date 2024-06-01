
import './App.css'
import Text from './components/Text/Text'
function App() {
  
  let datos= {
    
    nombre:"",
    apellido:"",
    fechaNacimiento: "",
    email:"",
    user:"",
    photo:"",
    sobreti:"",
}
function registro(){
  datos.apellido= document.querySelector(".apellidos").value;
  datos.nombre= document.querySelector(".nombre").value;
  datos.fechaNacimiento= document.querySelector(".fechaNacimiento").value;
  datos.email= document.querySelector(".email").value;
  datos.user= document.querySelector(".user").value;
  datos.photo= document.querySelector(".photo").value;
  datos.sobreti= document.querySelector("#sobreti").value;
  
  console.log(datos)
  }
  document.getElementById("sub").onclick= function(){
    registro()
}
  return (
    
  
    <div className="fond">
        <div className="titulo">
     <h1>Registro de usuario nuevo</h1>
   </div>
    <div className="sec1">
    <Text tipo="text" texto ="Nombre" clase="apellidos"/>
    <Text tipo="text" texto ="Apellido" clase="nombre"/>
    </div>
    <div className="sec1">
    <Text tipo="date" texto= "Fecha de Nacimiento" clase="fechaNacimiento"/>
    <Text tipo="email"texto= "Email" clase="email"/>
        
      </div>
      <div className="sec1">
      <Text tipo="text" texto="User name" clase="user"/>
      
      <Text tipo="text" texto="User Photo URL" clase="photo"/> 
    </div>
    <div className="sec3">
        <p>sobre ti</p>
       
        <textarea  id="sobreti" className="int2" name="comentarios" rows="10" cols="40"></textarea>
      </div>

      <button id="sub" className="sub" type="submit">enviar</button>       
    </div>
 
   
  )

}


export default App
