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
          name: "Jefferson",
        },
      };
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
        <span className="text">{state.number}</span>

        <button className="btn" onClick={() => exec({ type: "add2ToNumber" })}>
          +2
        </button>
      </div>

      <SectionTitle title={"Atividade 02"} />
    </div>
  );
};
export default UseReducer;
