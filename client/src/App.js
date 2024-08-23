import logo from './logo.svg';
import './App.css';
import Form from "../src/modules/Form/index";
import Dashborad from './modules/dashboard';
import {Routes, Route, Navigate} from 'react-router-dom';


const ProtectedRoute = ({children})=>{
  const isLoggedIn = localStorage.getItem('user:token') !==null || true;
  console.log(isLoggedIn);
  if(!isLoggedIn){
    return <Navigate to={'/user/sign_in'}/>
  } 
  // else if(isLoggedIn && ['/user/sign_in','/user/sign_up'].includes(window.location.pathname)){
  //   return <Navigate to='/' />
  // }
  return children;
}

function App() {
  return (
 <Routes>
    <Route path="/" element={
        <ProtectedRoute>
      <Dashborad/>
      </ProtectedRoute>
      }/>
  <Route path="/user/sign_in" element={
    <ProtectedRoute>
    <Form isSignInPage={true}/>
    </ProtectedRoute>
    } />
  <Route path="/user/sign_up" element={
  <ProtectedRoute>
  <Form isSignInPage={false}/>
  </ProtectedRoute>
    }  />
 </Routes>
  );
}

export default App;
