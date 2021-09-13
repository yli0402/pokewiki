import './Pokemon.css';

function Pokemon(props) {
    return (
      <div className="Pokemon">
        <p>{props.name}</p>
        <img src={props.img} />
      </div>
    );
  }
  
  
  export default Pokemon;