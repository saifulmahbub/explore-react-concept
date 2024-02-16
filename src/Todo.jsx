export default function Todo({ task, isDone }) {
  // if (isDone) {
  //   return <li>finished :{task}</li>;
  // }
  // return <li>work on:{task}</li>;
  return (
    <li>
      {isDone ? "finished" : "work on"}: {task}
    </li>
  );
}
