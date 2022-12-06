import { useReducer } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";

const initialState = {
  other: "...",
  cart: [],
  products: [],
  //foco
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return {
        ...state,
        user: {
          name: action.payload,
        },
      };
    case "multiply7":
      return { ...state, number: state.number * 7 };

    case "divider25":
      return { ...state, number: state.number / 25 };
    case "parseInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <Title
        title={"UseReducer"}
        subtitle={"Uma outra forma de ter estado em componentes funcionais"}
      />
      <SectionTitle title={"Atividade 01"} />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}
        <button
          className="btn"
          onClick={() => exec({ type: "login", payload: "Maria" })}
        >
          Login
        </button>
        <span className="text">{state.number}</span>

        <button className="btn" onClick={() => exec({ type: "add2ToNumber" })}>
          +2
        </button>
      </div>

      <SectionTitle title={"Desafio"} />
      <div className="">
        <button className="btn" onClick={() => exec({ type: "multiply7" })}>
          *7
        </button>
        <button className="btn" onClick={() => exec({ type: "divider25" })}>
          /25
        </button>
        <button className="btn" onClick={() => exec({ type: "parseInt" })}>
          Mudar para inteiro
        </button>

        <button
          className="btn"
          onClick={() => exec({ type: "numberAddN", payload: 11 })}
        >
          +11
        </button>
        <button
          className="btn"
          onClick={() => exec({ type: "numberAddN", payload: 50 })}
        >
          +50
        </button>
      </div>
    </div>
  );
};
export default UseReducer;
