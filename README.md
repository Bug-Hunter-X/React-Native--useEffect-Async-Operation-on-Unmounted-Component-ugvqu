# React Native: useEffect Async Operation on Unmounted Component

This repository demonstrates a common React Native bug and its solution. The bug involves using the `useEffect` hook with an asynchronous operation (data fetching in this case). If the component unmounts before the asynchronous operation completes, a warning is issued, and unexpected behavior can result.  The solution uses a cleanup function in the `useEffect` hook and a boolean flag to prevent state updates if the component is unmounted. 

## Bug
The `useEffectBug.js` file shows how the unmounted component warning occurs.  The solution is implemented in `useEffectSolution.js`.