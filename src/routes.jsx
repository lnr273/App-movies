import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Watch from "./pages/Watch/Watch.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import Search from "./pages/Search/Search.jsx";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/watch/:id" element={ <Watch/> }></Route>
                <Route path="/search" element={ <Search/>}></Route>
                <Route path="*" element={ <Page404/> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
