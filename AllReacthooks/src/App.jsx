import "./App.css";
import HookUseCallback from "./components/HookuseCallback";
import HookuseEffect from "./components/HookuseEffect";
import HookuseMemo from "./components/HookuseMemo";
import useFetchApi from "./components/useFetchApi";
import UseState1 from "./components/useState1";
function App() {
  const { data, loading, error } = useFetchApi(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data);
  if (error) {
    return <p>Error!</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      {/* <HookuseMemo /> */}
      {/* <HookUseCallback /> */}
      <ul>
        {data?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
