import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navar from "./Components/Navar";
import Home from "./Pages/Home";
import Sopermarket from "./Pages/Sopermarket";
import Carts from "./Pages/Carts";
import Porfrosh from "./Pages/Porfrosh";
import Takhfif from "./Pages/Takhfif";
import Soval from "./Pages/Soval";
import Sabad from "./Pages/Sabad";
import Profile from "./Pages/Profile";
import Margo from "./Pages/Margo";
import Plus from "./Pages/Plus";
import Porsesh from "./Pages/Porsesh";
import Adress from "./Pages/Adress";
import Hadey from "./Pages/Hadey";
import Payam from "./Pages/Payam";
import Leyout from "./Components/Leyout";
import List from "./Pages/List";
import Sefaresh from "./Pages/Sefaresh";
import Jar from "./Pages/Jar";
import Tah from "./Pages/Tah";
import Mar from "./Pages/Mar";
import Laq from "./Pages/Laq";
import Singelblog from "./Pages/Singelblog";

function App() {
  return (
    <>
      <Navar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs/:blogsId" element={<Singelblog />} />
        <Route path="/Sopermarket" element={<Sopermarket />} />
        <Route path="/Carts" element={<Carts />} />
        <Route path="/Porfrosh" element={<Porfrosh />} />
        <Route path="/Takhfif" element={<Takhfif />} />
        <Route path="/Soval" element={<Soval />} />
        <Route path="/Sabad" element={<Sabad />} />
        <Route path="/" element={<Leyout />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Margo" element={<Margo />} />
          <Route path="/Plus" element={<Plus />} />
          <Route path="/Porsesh" element={<Porsesh />} />
          <Route path="/Adress" element={<Adress />} />
          <Route path="/Hadey" element={<Hadey />} />
          <Route path="/Payam" element={<Payam />} />
          <Route path="/List" element={<List />} />
          <Route path="/Sefaresh" element={<Sefaresh />}>
            <Route path="Jar" element={<Jar />} />
            <Route path="Tah" element={<Tah />} />
            <Route path="Mar" element={<Mar />} />
            <Route path="Laq" element={<Laq />} />
          </Route>
        </Route>
     
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
