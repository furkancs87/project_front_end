import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUsers from './components/ViewUsers';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
//import { Delete } from 'react-axios';
import DeleteUser from './components/DeleteUser';
import Header from './components/Header';

function App() {
  return (
    <>
      <h1>PHONE DIRECTORY CRUD ReactJs App</h1>
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<ViewUsers/>} exact={true} />
          <Route path={"/viewusers"} element={<ViewUsers/>} exact={true} />
          <Route path={"/adduser"} element={<AddUser/>} exact={true} />
          <Route path={"/updateuser"} element={<UpdateUser/>} exact={true} />
          <Route path={"/deleteuser"} element={<DeleteUser/>} exact={true} />
      </Routes>
      
      </BrowserRouter>

    </>
  );
}

export default App;
