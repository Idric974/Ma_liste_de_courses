const TasksHeader = (props) => {
  const undoneTasks = props.tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>Ma liste de course</h1>
      <p>
        Nombre d'articles restant : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
