export default {
  fetchTodos: () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then(response =>
      response.json()
    )
};
