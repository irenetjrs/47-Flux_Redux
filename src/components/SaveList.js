import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'

const SaveList = () => {
  const dispatchFunc = useDispatch();
  const coffee = useSelector((state) => state.coffee)
  const sugar = useSelector((state) => state.sugar)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)


  const save = () => {
    localStorage.setItem('coffee', coffee);
    localStorage.setItem('sugar', sugar);
  }
  const clear = () => {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
  };

  useEffect(() => {
    if (localStorage.getItem('coffee')) {
      dispatchFunc({ 
        type: 'setState', 
        state: {
          coffee: +localStorage.getItem("coffee"),
          sugar: +localStorage.getItem("sugar"),
        }
      });
    }
  }, []);

  if(isLoggedIn){
  return (
    <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
      </div>
  )}else{
    return (
    <p>You must be logged in to save the list.</p>
    )
  }
}

export default SaveList