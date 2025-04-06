import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks";



function App() {


  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state ) => state.counter)

  console.log(count);


  return (
    <div>
      <Button onClick={ () => dispatch(decrement())}>Decrement</Button>
      <p>{count}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>

      
    </div>
  )
}

export default App
