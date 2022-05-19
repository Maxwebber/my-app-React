import React, { useEffect, useState }from "react";
import '../App.css'; //Aqui diz para procurar um style.css na pasta atual
import api from "./api";

const [photos, setPhotos] = useState([])

useEffect(() => {
  api.get("/photos/")
   .then((response) => {
     setPhotos(response.data)
   })
   .catch(() => {
     console.log("Deu errado")
   })
 }, [])


function Blog() {
  const sidebar = (
    <ul>
      {photos.map((photo) =>
        <li key={photo.id}>
          {photo.title}
        </li>
      )}
    </ul>
  );
  const content = photos.map((photo) =>
    <div key={photo.id}>
      <h3>{photo.title}</h3>
      <p>{photo.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {
     photos.map((photo) =>(
        <p>{photo.id}</p> 
) )

  }
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog photos={photos} />);