import { Global } from "@emotion/react";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import InputSample from "./pages/InputSample/InputSample";
import NumberCounter from "./pages/NumberCounter/NumberCounter";
import Todo from "./pages/Todo/Todo";
import UserList from "./pages/UserList/UserList";
import { reset } from "./styles/Global/reset";

function Test1() {
  return (<h1>test1</h1>)
}
function Test2() {
  return (<h1>test2</h1>)
}
function App() {
  return(
    <>
      <Global styles={reset}/>
      <MainAside />
      <Routes>
        <Route path="/t1" Component={Test1}/>
        <Route path="/t2" Component={Test2}/>
        <Route path="/sample/input/1" Component={InputSample}/>
        <Route path="/users" Component={UserList}/>
        <Route path="/todo" Component={Todo}/>
        <Route path="/number/counter" Component={NumberCounter} />
      </Routes>
    </>
  );
}

export default App;


//React사용이유
//1. 전체 렌더링을 하지않음 (innerHTML은 재렌더링) ////props 개념정리,리덕스,라우터
//2.  
//3.