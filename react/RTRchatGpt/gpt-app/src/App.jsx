import logo from './logo.svg';
import './App.css';
import DataUpdateForm from './components/Datafrom';
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <div className="App">
      <h1>toolkit</h1>
      <DataUpdateForm />
      <TodoList />
    </div>
  );
}

export default App;
