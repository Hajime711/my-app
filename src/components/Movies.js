import React from "react";
import CardList from "./CardList";
import { movies } from "../data";

export default function Movies(){
    return(
        <><div><h1>Movies</h1></div><CardList movies={movies}></CardList></>
    );
}