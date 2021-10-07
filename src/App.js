import logo from './logo.svg';
import './App.css';
import { TaskItem } from "./TaskItem";
function App() {
  //business logic
  return ( <main>
              <form>
                  <input type="text" placeholder="Task name"/>
                  <button>Create Task</button>
              </form>
              <ul>
                  <TaskItem isChecked={true} taskName="Learn React" />
                  <TaskItem isChecked={false} taskName="Learn Hocks" />
                  <TaskItem isChecked={true} taskName="Keep on Keeping on" />
              </ul>
      </main>
  );
}

export default App;
