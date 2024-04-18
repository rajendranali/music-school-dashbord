import { ACTION_TYPE } from "../ActionType/actionType";

const initialState = {
    // Define initial state here
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPE:
        // Update state based on action
        return { ...state, /* update state */ };
      default:
        return state;
    }
  };
  
  export default reducer;