import type { MetaFunction } from "@remix-run/node";
import TodoApp from "~/features/todo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 font-sans">
      <h1 className="text-3xl">Welcome to Remix Todo Example</h1>
      <div>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://react.dev/learn/managing-state"
            rel="noreferrer"
          >
            Reference of State Management in React.
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://redux-toolkit.js.org/"
            rel="noreferrer"
          >
            Redux toolkit 
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://react-redux.js.org/"
            rel="noreferrer"
          >
            Redux with React
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      </div>
      <div>
        <TodoApp />
      </div>
    </div>
  );
}
