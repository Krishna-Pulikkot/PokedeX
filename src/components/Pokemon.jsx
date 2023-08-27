import React,{useState} from 'react';
import useFetch from './useFetch';

const Pokemon = () => {
    const [num,setNum] = useState(Math.floor(Math.random() * 650));
    const {data , loading} = useFetch('https://pokeapi.co/api/v2/pokemon/'+num);

    return (
        <>
        <div className="pokemon-div">
            {loading && <p className="pokemon-loading">Loading...</p>}
            {data && <div className="pokemon-image"><img className="pokemon-img" src={data.sprites.other["official-artwork"].front_default} alt={data.forms[0].name} /></div>}
            {data && <div className="pokemon-name">{data.forms[0].name.toUpperCase()}</div>}
            {data && <div className="pokemon-type">Type : {data.types[0].type.name}</div>}
        </div>
        <div className="pokemon-arrows">
            <img onClick={()=>setNum(Math.max(0,num-1))}  className="arrow-left" src={require('../img/left.png')} alt="Click left"/>
            <button className="explore-button" onClick={()=>setNum(Math.floor(Math.random() * 650))}>Change Me!</button>
            <img onClick={()=>setNum(Math.min(649,num+1))} className="arrow-right" src={require('../img/right.png')} alt="Click right"/>
        </div>
        
        </>
    );
}

export default Pokemon;