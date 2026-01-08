
import React from 'react'

interface Person {
    name : string,
    age : number,
    isHeStudying : boolean
}

function Person(props:Person) {
  return (
    <div>Person</div>
  )
}

export default Person