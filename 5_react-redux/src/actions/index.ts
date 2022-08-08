import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id : number;
    title: string;
    completed: boolean;

}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}


const url = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => { 
        const response = await axios.get<Todo[]>(url);

        // this genereic option makes sure we always pass the object with the same types of properties. This gets you additional type safety.
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        });
     };
};