import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Watch from "./pages/Watch/Watch.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import Search from "./pages/Search/Search.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import FavoritesProvider from "./contexts/Favorites.jsx";

function AppRoutes() {
    return(
        <BrowserRouter>
        <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/watch/:id" element={ <Watch/> }></Route>
                    <Route path="/search" element={ <Search/>}></Route>
                    <Route path="/favorites" element={ <Favorites/>}></Route>
                    <Route path="*" element={ <Page404/> }></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;
