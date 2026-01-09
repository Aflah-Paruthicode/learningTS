import React from "react";

interface Person {
  name: string;
  about: string;
  place: string;
  img: string;
}

function Person(props: Person) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <h2>{props.place}</h2>
    </div>
  );
}

export default Person;
