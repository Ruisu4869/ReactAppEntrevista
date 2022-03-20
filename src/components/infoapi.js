import React, {useState, useEffect} from 'react';

function Datos() {
  const url = 'http://localhost:3000/posts';
  const [consume, setConsume] = useState();
  const fetchApi = async() => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setConsume(responseJSON)
  };

  useEffect(() => {
    fetchApi()
  }, []);

  return (
    <div>
      <ol>
        { !consume ? 'Cargando...' :
          consume.map( (todo,index)=>{
            return <div><li key={index}>Nombre: <strong>{todo.name}</strong>
            <br/>Tipo de Documento: {todo.tipdoc} No. {todo.doc}
            <br/>Genero: {todo.gender}
            <br/>Hobbies: {todo.hobby}
            <br/>Contraseña: {todo.passw}
            <br/>Imagen: <br/> <div align="left">{todo.imagen}</div></li>
            <br/>
            <br/></div>
          })
        }
      </ol>
    </div>
  );
}

export default Datos;
