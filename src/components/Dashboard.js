import './Dashboard.css';
import Pokemon from './Pokemon';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function Dashboard() {

    const row1 = [];
    const row2 = [];
    const row3 = [];
    const row4 = [];
    let myPokeRandom = Math.floor(Math.random() * 1000)
    const apiResult = httpGet(`https://pokeapi.co/api/v2/pokemon/?offset=${myPokeRandom}&limit=20`)['results'];
    for (const [index, pokemon] of apiResult.entries()) {
        var temp = pokemon['name'];
        var pokemonName = temp[0].toUpperCase() + temp.slice(1);
        var pokemonImg = httpGet(pokemon['url'])['sprites']['front_default'];

        if (index >= 0 && index <= 4) {
            row1.push(<Pokemon name={pokemonName} img={pokemonImg} />);
        } else if (index >= 5 && index <= 9) {
            row2.push(<Pokemon name={pokemonName} img={pokemonImg} />);
        } else if (index >= 10 && index <= 14) {
            row3.push(<Pokemon name={pokemonName} img={pokemonImg} />);
        } else {
            row4.push(<Pokemon name={pokemonName} img={pokemonImg} />);
        }
    }
    
    return (
      <div className="Dashboard">
          <div className="Dashboard-row">
            {row1}   
          </div>
          <div className="Dashboard-row">
            {row2}   
          </div>
          <div className="Dashboard-row">
            {row3}   
          </div>
          <div className="Dashboard-row">
            {row4}   
          </div>
      </div>
    );
  }
  
  
  export default Dashboard;