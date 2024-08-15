import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import CreateProjecttView from "./views/projetcs/CreateProjectView"
import EditProjectView from "./views/projetcs/EditProjectView"
import ProjectDetailsView from "./views/projetcs/ProjectDetailsView"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<DashboardView/>} index/>
                <Route path="/projects/create" element={<CreateProjecttView/>}/>
                <Route path="/projects/:projectId" element={<ProjectDetailsView/>}/>
                <Route path="/projects/:projectId/edit" element={<EditProjectView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
export default Router