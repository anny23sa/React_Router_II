import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const navigate = useNavigate()
	//Crear estado para almacenar los pokemones
	const [pokemones, setPokemones] = useState([]);
  const [pokemonSelect, setPokemonSelect] = useState("")




  
  
	//Guardar la URL en constante de la API
	const URL_API = "https://pokeapi.co/api/v2/pokemon/";
	//Hacer la consulta a la API , hacer función y usar useEfect
	
    
    const getPokemon = async () => {
		const res = await fetch(URL_API);
		const data = await res.json();
		setPokemones(data.results);
	};

	useEffect(() => {
		getPokemon();
	}, []);

  const detalle = () => {
    if(pokemonSelect) {
      navigate(`/pokemones/${pokemonSelect}`)
    }else{
      alert("Debes seleccionar un Pokemon")
    }
  }

	console.log(pokemones);
	return (
		<div>
			<div className="mt-5 text-center">
				<h1>Selecciona un pokemon</h1>
				<div className="col-5 col-sm-3  col-lg-2 mx-auto ">
					<select onChange={(e)=>setPokemonSelect(e.target.value)} value={pokemonSelect}>
						<option disabled value="" >Pokemones</option>
						{pokemones.map((pokemon) => (
							<option key={pokemones.name} value={pokemon.name}>{pokemon.name}</option>
						))}
					</select>
                    <br />
          <Button onClick={detalle} >Ver detalle</Button>
				</div>
			</div>
		</div>
	);
};

export default Pokemones;










