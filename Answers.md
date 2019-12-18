# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    ReactJS is a UI library that allows the developer to create powerful, complex applications. Modern applications and websites are extremely complicated, interactive, and constantly updating with user content; React solves this problem by providing a smooth experience to the user and simple programming paradigm to the develper. React abstracts away working with the DOM directly and instead uses the Virtual DOM (which is more straightforward to work with) to update any changes over time.


1. What does it mean to think in react?

    Its like the less compilier for CSS. Using the react engine to creat small, reusable UI components that can be pieced together to create a much larger application.

1. Describe state.

    It represents the parts of the application that can change. If someone is adding or deleting something, logging or logging out, etc.—this will involve state.

1. Describe props.

    Props are how different components in a React application talk to each other. Data is passed from parent to child node and that data is immutable.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are when a function changes things outside of it's scope, such as a global variable or making a call to an API. You sync effects to state or prop changes by adding the state to the dependency array of the useEffect function.
