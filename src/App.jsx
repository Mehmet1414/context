import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "SET_BOOK":
      return {
        ...state,
        book: action.value,
      };
    case  "ADD_BOOK":
      return{
        ...state,
        books:[...state.books, action.value]
      }

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    books: [],
    book: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch({
      type:"ADD_BOOK",
      value:state.book
    })

    dispatch({
      type:"SET_BOOK",
      value:""
    })

  };
  const handleChange = (e) => {
    dispatch({
      type: "SET_BOOK",
      value: e.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Kitap Listesi</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.book} onChange={handleChange} />
        <button disabled={!state.book} type="submit">
          Gönder
        </button>
      </form>

      <ol>
        {state.books.map((kitap, index) => (
          <li key={index}>{kitap}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
