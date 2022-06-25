import React from 'react'; 
import Card from './Card'; 
const Cardlist = ({movies})=> { 
    const cardcomponent=movies.map((movie, index) =>{ 
        return(
        <Card 
        key={index}
        title={movies[index].title} 
        starring={movies[index].starring}
        description = {movies[index].description}  />) } )
        return( 
        <div> {cardcomponent} </div>
        )
    }
        
export default Cardlist;