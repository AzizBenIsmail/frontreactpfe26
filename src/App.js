import "./App.css";
import React , {useEffect , useState} from "react";
function App() {
  //logic
  //1/
  const name = "aziz";
  const age = 20;
  const isLoggedIn = false;
  const element = <div>hello {name}</div>;

  //2/
  const etudiant = {
    nom: "mohamed",
    prenom: "ben ismail",
  };
  //3/
  function getData(data) {
    return "hello " + data + " fi 9antra";
  }

  //4
  const listEtudiant = [
    { nom: "mohamed", prenom: "ben foulen", age: 20, ObjectId: 1 },
    { nom: "ines", prenom: "ben foulen", age: 22, ObjectId: 2 },
    { nom: "sami", prenom: "ben foulen", age: 21, ObjectId: 3 },
  ];

  const style = {
    color: "red",
    fontSize: "20px",
  };

  //const count = 0;
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello");
  return (
    <div className="App">
      {/* jsx => html + js */}
      <header className="App-header">
        1/
        <br />
        {name}
        <br />
        {age}
        {isLoggedIn && <p>You are logged in!</p>}
        {element}
        2/
        <br />
        {etudiant.nom} {etudiant.prenom}
        3/
        <br />
        {getData("ines")}
        4/
        <br />
        {/* <ul style={{ color: "pink", fontSize: "20px" }}> */}
        {/* <ul style={style}> */}
        <ul className="direction">
            {listEtudiant.map((etudiant) => (
            <li key={etudiant.ObjectId}>
              {etudiant.nom} {etudiant.prenom} {etudiant.age}
            </li>
          ))}
        </ul>
        {/* vue */}
        <table border={1}>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
          </tr>
          {listEtudiant.map((etudiant) => (
            <tr key={etudiant.ObjectId}>
              <td>{etudiant.nom}</td>
              <td>{etudiant.prenom}</td>
              <td>{etudiant.age}</td>
            </tr>
          ))}
        </table>

        count : {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <br />
        message : {message}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
      </header>
    </div>
  );
}

export default App;
