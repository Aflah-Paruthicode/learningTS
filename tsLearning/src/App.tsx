import { useEffect, useState } from 'react';
import './App.css';
import Person from './Person';
import { usersArr } from './utils/constants';

function App() {

  let [isUser, setIsUser] = useState<object[]>([]);

  const fetchUser =  () => {
    let res: object[] = usersArr;
    setIsUser(res);
  }

  useEffect( ()  => {
    fetchUser()
  },[])

  return (
    <div id='theRoot'>
    <div id='main'>
    { isUser &&
      isUser.map((ele : any) => (

        <Person name={ele.name} about={ele.about} place={ele.place} img={ele.photoUrl} />
      ))
    }
    </div>
    </div>
  )
}

export default App
