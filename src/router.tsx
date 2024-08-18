import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import CreateProjecttView from "./views/projetcs/CreateProjectView"
import EditProjectView from "./views/projetcs/EditProjectView"
import ProjectDetailsView from "./views/projetcs/ProjectDetailsView"
import AuthLayout from "./layouts/AuthLayout"
import LoginView from "./views/auth/LoginView"
import RegisterView from "./views/auth/RegisterView"
import ConfirmAccountView from "./views/auth/ConfirmAccountView"
import RequestNewCodeView from "./views/auth/RequestNewCodeView"

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

            <Route element={<AuthLayout/>}>
              <Route path="/auth/login" element={<LoginView/>}/>
              <Route path="/auth/register" element={<RegisterView/>}/>
              <Route path="/auth/confirm-account" element={<ConfirmAccountView/>}/>
              <Route path="/auth/request-code" element={<RequestNewCodeView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
export default Router