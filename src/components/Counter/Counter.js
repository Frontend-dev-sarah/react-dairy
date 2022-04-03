import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  /** beginning of regular redux usage */
  // const counter = useSelector(state => state.counter);
  // const enableCounter = useSelector(state => state.enableCounter);
  // const dispatch = useDispatch();

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'ENABLE_COUNTER' })
  // };

  // const addHandler = () => {
  //   dispatch({ type: 'ADD', payload: 5 })
  // }
  // const reduceHandler = () => {
  //   dispatch({ type: 'REDUCE', payload: 10 })
  // }
  /** end of regular redux usage */

  const counter = useSelector(state => state.counterSlice.counter)
  const enableCounter = useSelector(state => state.counterSlice.enableCounter)
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(counterActions.add(10))
  }

  const reduceHandler = () => {
    dispatch(counterActions.reduce(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.enableCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      {enableCounter && <div>
        <button onClick={addHandler}>Increase</button>
        <button onClick={reduceHandler}>Decrease</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
