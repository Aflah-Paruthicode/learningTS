import React from "react";

interface Person {
  name: string;
  about: string;
  place: string;
  img: string;
}

function Person(props: Person) {
  return (
    <section className="card">
      <img src={props.img} alt="" />
      <h3 id="name">{props.name}</h3>
      <p id="about">{props.about}</p>
      <h3 id="place">- {props.place}</h3>
    </section>
  );
}

export default Person;
