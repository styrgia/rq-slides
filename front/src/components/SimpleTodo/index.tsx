import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type Todo = {
    id: number;
    title: string;
};
const getTodos = async () => Promise.resolve([{ id: 1, title: 'title' }]);
const postTodo = async (newTodo: Todo) => Promise.resolve(true);

function Todos() {
    const queryClient = useQueryClient();

    const query = useQuery(['todos'], getTodos);

    // Мутация
    const addTodo = useMutation(postTodo, {
        onSuccess: () => {
            // Инвалидация кеша
            queryClient.invalidateQueries(['todos']);
        },
    });

    // Добавить новый элемент - вызвать мутацию
    const clickHandler = () => {
        addTodo.mutate({
            id: Date.now(),
            title: 'Do Laundry',
        });
    };

    return (
        <div>
            <ul>
                {query.data?.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

            <button onClick={clickHandler}>Add Todo</button>
        </div>
    );
}

export default Todos;
