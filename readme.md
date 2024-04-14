If a component has access to a context value, if that value changes, the component get re-executed again. Just like when a inner-state changed or the parent component re-executing\

We should bring the context and its state to a seperate provider component, which is good, or else our App component will contains a lot of codes, a lot of logic