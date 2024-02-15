export default function Todo({ task, isDone }) {
  if (isDone) {
    return <li>finished :{task}</li>;
  }
  return <li>work on:{task}</li>;
}
