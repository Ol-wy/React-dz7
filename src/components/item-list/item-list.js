import React, { useEffect, useState} from 'react';
import './item-list.css';
// import SwapiService from './../../services/swapi-service';
// import { Consumer } from '../swapi-context';



const ItemList = ({setItemId, swapi}) => {
  const [state, setState] = useState({data: []})
  // const swapi = new SwapiService()
  // const swapi = useContext(Consumer)


  useEffect(() => {
    swapi.getAllPeople()
    .then(data => setState({data: data}))
  }, [])

  const content = state.data.map(item => {
    return(
       <li key={item.id} onClick={() => setItemId(item.id)} className="list-group-item">{item.name}</li> 
    )
  })
  console.log(content);
  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}


console.log(useEffect);


export default ItemList    