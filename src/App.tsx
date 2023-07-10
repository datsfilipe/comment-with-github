import { useEffect } from "react";
import store, { type Comment, setItems } from "./store";

const item: Comment = {
  id: Math.random(),
  name: "John Doe",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec...",
};

function App() {
  useEffect(() => {
    store.subscribe(() => {
      console.log("Store value", store.getState());
    });

    store.dispatch(setItems(Array(10).fill(item)));
  }, []);

  return (
    <>
      {store.getState().data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
}

export default App;
