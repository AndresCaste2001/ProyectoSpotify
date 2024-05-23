const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-Host':'spotify23.p.rapidapi.com',
        'x-rapidapi-Key': 'ace8e72b70msh1b9228100d116b3p1b1f0ejsn045e20c6254c'
    }
}

try{
    const response = await fetch(url, options);
    result = await response.json();
}catch(error){
    console.error(error);
}

export const ordenarCancionPorPopularidad = ()=>{
    const data = result
    const cancionesOrdenadas = data.tracks
    cancionesOrdenadas.sort((a,b)=>
         b.popularity - a.popularity
    )
    return cancionesOrdenadas
}