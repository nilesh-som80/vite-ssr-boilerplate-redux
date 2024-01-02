import { Route, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";

export const Routes = createRoutesFromElements(
    <Route path={'/'} element={<App />}>
        <Route index element={<Home />}/>
        <Route path={'detail'} element={<Detail />} />
    </Route>
)