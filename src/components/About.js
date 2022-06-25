import React from "react";
import sherlock from '../sherlock.jpg';

export default function About() {
  return (
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src={sherlock} class= "imageAboutPage" alt=""></img>
                </div>
                    <div class="row mt-3">
                        <h3> Holmes has essentially an obsessive personality. 
                            He works compulsively on all his cases and his deductive powers are phenomenal. 
                            He can get engulfed in periods of depression between cases and is known to take cocaine when he cannot stand the lack of activity.
                        </h3>
                    </div>
                </div>
            </div>
    </section>
  );
}