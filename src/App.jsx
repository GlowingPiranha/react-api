import { use, useState } from 'react'
import axios from "axios"


function App() {

  const [actors, setActors] = useState([]);

  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
      setActors(resp.data.results);
    });
  };

  /* 
  id, name, birth_year, nationality, known_for
  */

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button className='btn btn-primary' onClick={fetchActors}>Carica attori</button>
          </div>
          {actors.map((char) => {
            return (

              <div className="col-12 col-md-6" key={char.id}>
                <div className="d-flex">
                  <img src={char.image} alt={char.name} />
                  <div>
                    <h4>{char.name}</h4>
                    <div><span>{char.birth_year}</span></div>
                  </div>
                </div>
              </div>

            );

          })}
        </div>
      </div>
    </>
  )
}

export default App
