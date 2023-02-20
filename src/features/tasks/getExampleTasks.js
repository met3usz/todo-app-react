export const getExampleTasks = async () => {
  const response = await fetch('/todo-app-react/exampleTasks.json');

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
