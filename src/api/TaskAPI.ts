import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, Task, TaskFormData } from "../types";

type TaskApi = {
    formData : TaskFormData;
    projectId : Project['_id'];
    taskId :  Task['_id'];
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

export async function getTaskById({projectId, taskId}: Pick<TaskApi, 'projectId' | 'taskId'> ){
    try {
        const url = `/projects/${projectId}/taks/${taskId}`;

        const {data} = await api.get(url);

        return data;

    } catch (error) {
        if(isAxiosError(error) && error.message) throw new Error(error.response?.data.error);
    };
};

export async function updateTask({projectId, taskId, formData}: Pick<TaskApi, 'projectId' | 'taskId' | 'formData'>){
    try {
        const url = `/projects/${projectId}/taks/${taskId}`;

        const {data} = await api.put(url, formData);

        return data;

    } catch (error) {
        if(isAxiosError(error) && error.message) throw new Error(error.response?.data.error);
    };
};

export async function deleteTask({projectId, taskId}: Pick<TaskApi, 'projectId' | 'taskId'> ){
    try {
        const url = `/projects/${projectId}/taks/${taskId}`;

        const {data} = await api.delete(url);

        return data;

    } catch (error) {
        if(isAxiosError(error) && error.message) throw new Error(error.response?.data.error);
    };
};

