
import {Outlet, Route, Routes} from "react-router-dom";
import CardList from "./pages/CardList.jsx";
import CardInfo from "./components/CardInfo.jsx";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="/" element={<CardList/>}/>
           <Route path="/:id" element={<CardInfo />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
