import ListGroup from "./components/ListGroup";

const apiUrl = import.meta.env.VITE_API_URL;

fetch(`${apiUrl}/auth/me`)
  .then(res => res.json())
  .then(data => console.log("Получено: ", data));


function App() {
  return (
    <div>
      <ListGroup />
    </div>
  );
}

export default App;
