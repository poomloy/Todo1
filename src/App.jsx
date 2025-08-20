import Todo from "./components/Todo";
import Form from "./components/From";
import FilterButton from "./components/FilterButton";

function App(props) {
    // console.log(props.tasks);
    const taskList = props.tasks?.map((task) => (
        <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id}
        />
    ));

    function addTask(name){
        alert(name);
    }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* From */}
      <Form onGogo={addTask} />

      <div className="filters btn-group stack-exception">

      {/* Filter */}
        <FilterButton nameFil="All" />
        <FilterButton nameFil="Active" />
        <FilterButton nameFil="Completed" />


      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {/* <Todo name = "Eat" id="todo-0" />
        <Todo name = "Sleep" id="todo-1" completed />
        <Todo name = "Repeat" id="todo-2" /> */}
        {taskList}
      </ul>
    </div>
  );
}

export default App;
