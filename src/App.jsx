import { use, useState } from 'react'
import axios from "axios"


function App() {

  const [people, setPeople] = useState([]);

  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
      console.log(resp);
      setPeople(resp.data);
    });
  };

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      console.log(resp)
      setPeople(resp.data);
    });
  };

  /* 
  id, name, birth_year, nationality, known_for
  */

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <button className='btn btn-primary me-2' onClick={fetchActors}>Load Actors</button>
            <button className='btn btn-primary' onClick={fetchActresses}>Load Actresses</button>
          </div>
          <div className="row g-3">

            {people.map((char) => {
              return (

                <div className="col-12 col-md-4 mb-3" key={char.id}>

                  <div className="card h-100">

                    <img className='card-img-top card-img-style' src={char.image} alt={char.name} />

                    <div className="card-body d-flex flex-column">


                      <h4 className='card-title'>{char.name}</h4>
                      <p className='card-text mt-auto'>
                        <div>Date of birth: {char.birth_year || "unknown"}</div>
                        <div>Nationality: {char.nationality || "unknown"}</div>
                        <div>known for: {char.known_for ? char.known_for.join(", ") : "N/A"}</div>
                      </p>
                    </div>
                  </div>
                </div>



              );

            })}
          </div>
        </div>
      </div >
    </>
  )
}

export default App
