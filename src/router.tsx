import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import CreateProjcetView from "./views/projetcs/CreateProjcetView"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<DashboardView/>} index/>
                <Route path="/projects/create" element={<CreateProjcetView/>}/>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
export default Router