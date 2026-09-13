Dev Stack
Dev Stack is a modern web application designed for developers to explore, compare, and curate their ideal software development stacks. Users can filter through various frontend, backend, database, and tooling options to assemble the best tech combination for their upcoming projects.

Technologies Used
React

TypeScript

Tailwind CSS

Vite

Key Features
Interactive filterable grid to browse technologies by domain and category.

Dynamic selection system allowing users to build and preview their custom tech stack in real time.

Fully responsive navigation layout with fixed header controls and mobile drawer support.

I. What is JSX, and why is it used in React?

JSX is HTML-like code inside JavaScript. It makes writing React UI templates faster and easier to read.

II. What is the difference between props and state?

Props are read-only data passed from a parent. State is component data that changes and triggers a re-render.

III. What does the useState hook do, and where did you use it in this project?

useState stores and updates local component data. It is used in the Nav component to toggle the mobile menu.

IV. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect handles side effects. It fetches the JSON data once after the component mounts without freezing the UI.

V. Why does every item in a .map() list need a unique key prop?

Keys help React track list items efficiently so it updates only the changed elements in the DOM.

VI. What is conditional rendering? Show one place you used it.

Conditional rendering shows UI only when a condition is met. Example:

{isOpen && <MobileMenu/>}

VII. How do you pass data from a parent to a child, and back from a child to a parent?

Parent to Child: Passed via props.

Child to Parent: The parent passes a callback function as a prop, which the child triggers with data.
