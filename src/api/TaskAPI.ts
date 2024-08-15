import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, TaskFormData } from "../types";

type TaskApi = {
    formData : TaskFormData;
    projectId : Project['_id'];
};

export async function createTask({formData, projectId}: Pick<TaskApi, 'formData' | 'projectId'>){
    try {
        const url = `/projects/${projectId}/taks`;
        const {data} =  await api.post<string>(url, formData);

        return data;

    } catch (error) {
        if(isAxiosError(error) && error.message) throw new Error(error.response?.data.error);
    }
};