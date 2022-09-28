import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type Todo = {
    id: number;
    title: string;
};
const getTodos = async () => Promise.resolve([{ id: 1, title: 'title' }]);

function Todos() {
    const query = useQuery(['todos'], getTodos);

    return (
        <div>
            <ul>
                {query.data?.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

            <button>Add Todo</button>
        </div>
    );
}

export default Todos;
