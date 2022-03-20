import React from 'react';

function Formulary() {
  return (
    <div align="center">
      <h1>SIGN IN</h1>
      <br/>
      <br/>
      <form name="signin" encType="multipart/form-data" method="POST" action="http://localhost:3002">
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name"></input>
        <br/>
        <label htmlFor="tipdoc">Tipo de Documento: </label>
        <select id="tipdoc">
          <option id="0" value="CC">Cedula de ciudadania</option>
          <option id="1" value="TI">Tarjeta de identidad</option>
          <option id="2" value="PP">Pasaporte</option>
          <option id="3" value="Other">Otro</option>
        </select>
        <br/>
        <label htmlFor="document">No. Documento: </label>
        <input type="text" id="doc"></input>
        <br/>
        <label htmlFor="gender">Genero: </label>
        <select id="gender">
          <option id="00" value="Hombre">Hombre</option>
          <option id="01" value="Mujer">Mujer</option>
          <option id="02" value="Other">Otro</option>
        </select>
        <br/>
        <label htmlFor="hooby">Hobbies: </label>
        <textarea name="hobb" rows="4" cols="40" placeholder="Indique sus hobbies" id="hobby"></textarea>
        <br/>
        <label htmlFor="img">Adjuntar Imagen: </label>
        <input type="file" id="imagen" accept=".jpg,.jpeg" multiple image="imagen"></input>
        <br/>
        <label htmlFor="passw">Contraseña: </label>
        <input type="password" id="passw"></input>
        <br/>
        <br/>
        <input type="submit" id="signup" value="Registrarse"></input>
        <input type="reset" value="Limpiar"></input>
      </form>

      <br/>
      <br/>

      <h1>LOGIN</h1>
      <br/>
      <br/>
      <form name="log" action="" method="GET">
        <label htmlFor="user">Usuario: </label>
        <input type="text" id="user"></input>
        <br/>
        <label htmlFor="passw">Contraseña: </label>
        <input type="password" id="passwd"></input>
        <br/>
        <br/>
        <input type="submit" id="send" value="Ingresar"></input>
        <input type="reset" id="reset" value="Limpiar"></input>
      </form>
    </div>
  );
}



export default Formulary;
