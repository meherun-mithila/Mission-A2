# CS — Ticket System

A React-based Customer Support Zone for displaying, tracking, and resolving customer tickets.

---

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript code. React uses it to describe what the UI should look like.

```jsx
const element = <h1>Hello, world!</h1>;
```

It is used because it makes UI code more readable and intuitive — you can see the structure of your component at a glance instead of reading nested `React.createElement()` calls. JSX gets compiled to plain JavaScript by tools like Babel before running in the browser.

---

## What is the difference between State and Props?

| | State | Props |
|---|---|---|
| **Owned by** | The component itself | The parent component |
| **Mutable** | Yes, via `setState` / `useState` | No, read-only |
| **Purpose** | Tracks data that changes over time | Passes data down to child components |

**Props** are like function arguments — the parent passes them in and the child just reads them. **State** is internal memory that a component manages on its own. When state changes, React re-renders the component.

```jsx
// Props — passed from parent
function TicketCard({ title, priority }) {
  return <p>{title} - {priority}</p>
}

// State — managed inside the component
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

---

## What is the useState hook, and how does it work?

`useState` is a React hook that adds state to a functional component. It returns an array with two items: the current state value and a function to update it.

```jsx
const [value, setValue] = useState(initialValue)
```

When `setValue` is called with a new value, React re-renders the component with the updated state.

**Example from this project:**

```jsx
const [inProgress, setInProgress] = useState(0)

function handleSelectTicket(ticket) {
  setInProgress(prev => prev + 1)
}
```

Every time a ticket is added to Task Status, `setInProgress` increments the count and the Banner re-renders to show the updated number.

---

## How can you share state between components in React?

State is shared by **lifting it up** to the closest common parent component, then passing it down as props or passing handler functions as callbacks.

**Example from this project:**

`App.jsx` owns `inProgress`, `taskStatus`, and `resolvedTasks`. It passes them down to `Banner` and `MainSection`, and passes handler functions like `onSelectTicket` and `onComplete` so child components can trigger state changes.

```jsx
// App.jsx — owns the state
const [taskStatus, setTaskStatus] = useState([])

<Banner inProgress={inProgress} />
<MainSection
  taskStatus={taskStatus}
  onSelectTicket={handleSelectTicket}
  onComplete={handleComplete}
/>
```

`MainSection` and `Banner` never talk to each other directly — they both go through `App` as the single source of truth.

---

## How is event handling done in React?

React handles events using camelCase event attributes directly on JSX elements. You pass a function reference (or inline arrow function) as the handler.

```jsx
<button onClick={handleClick}>Click me</button>
<input onChange={(e) => setValue(e.target.value)} />
```

React wraps native browser events in a **SyntheticEvent** for cross-browser consistency. You do not call the function directly — you pass it as a reference so React calls it when the event fires.

**Example from this project:**

```jsx
// TicketCard.jsx
<div onClick={() => onSelect(ticket)}>
  ...
</div>

// MainSection.jsx
<button onClick={() => onComplete(ticket)}>
  Complete
</button>
```

Clicking a ticket card triggers `onSelect`, which calls `handleSelectTicket` in `App.jsx`, updating state and showing a toast notification.
