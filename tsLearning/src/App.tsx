import { useEffect, useState } from "react";
import "./App.css";
import Person from "./Person";
import { usersArr } from "./utils/constants";
import Navbar from "./Navbar";

function App() {
  let [isUser, setIsUser] = useState<object[]>([]);
  let [searchText, setSearch] = useState<string>("");

  const fetchUser = (): void => {
    let res: object[] = usersArr;
    if (searchText !== "") {
      const filteredPersons: object[] = res.filter((person) => {
        if (person?.name.toLowerCase().includes(searchText.toLocaleLowerCase())) return person;
      });
      setIsUser(filteredPersons);
    } else {
      setIsUser(res);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [searchText]);

  return (
    <div id="theRoot">
      <section id="navId">{isUser && <Navbar setSearch={setSearch} searchText={searchText} />}</section>
      <main id="main">
        {isUser && isUser.map((ele: any) => <Person key={ele.name} name={ele.name} about={ele.about} place={ele.place} img={ele.photoUrl} />)}

        {isUser.length == 0 && <h3>No Charecter Found!!</h3>}
      </main>
    </div>
  );
}

export default App;
