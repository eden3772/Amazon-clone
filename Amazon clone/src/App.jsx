import { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Routing";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utilis/action.type";
import { auth } from "./Utilis/firbase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
