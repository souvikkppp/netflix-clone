// eslint-disable-next-line
import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { Route, Switch} from "wouter";
import LoginScreen from './components/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector  } from 'react-redux';
import { login, logout, selectUser} from './features/userSlice';
import ErrorBoundary from './errorBoundary';
import ProfileScreen from './components/ProfileScreen';


function App() {

 const user =  useSelector(selectUser);//null;//
 const dispatch = useDispatch();

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    if (userAuth){
      console.log(userAuth);
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email,
      }));
    } else {
      dispatch(logout());
    }
  });
  return unsubscribe;
}, [dispatch]); //}, []); <--- dependency array is removed because of error //this unsubscribe will triger is user is not looged in

  return (
    <ErrorBoundary>
    <div className="App">
      {user === null ? (
       <LoginScreen/>) : (
       <Switch>
         <Route path="/">
          <HomeScreen />
         </Route>
         <Route path='/profile'>
          <ProfileScreen/>
         </Route>
       </Switch>
        )
       }
    </div>
    </ErrorBoundary>
  );
}

export default App;
