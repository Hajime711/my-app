import React from 'react';
const Card = (props) => { 
    return (
        <div class="col-lg-4 mt-4">
        <div class="card servicesText">
            <div class="card-body">
                <h4 class="card-title mt-3">{props.title}</h4>
                <p class="card-text mt-3">{props.starring}</p>
                <p class="card-text mt-3">{props.description}</p>
            </div>
        </div>  
    </div>
        );
    }
export default Card;