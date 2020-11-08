import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import "./App.css";
import Imessage from "./Imessage";
import Login from "./Login";
import { auth } from "./features/firebase";
import Loading from "./Loading";

function App() {
  const [loader, setLoader] = useState(true);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            name: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      {loader ? <Loading /> : user.user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
