const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "resource created": {
      return {
        ...state,
        user: action.payload,
      };
    }
    // case "resource created": {
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };
    // }
    case "Resource get success": {
      return {
        ...state,
        resource: action.payload,
      };
    }
    case "Resource get fail": {
      return {
        ...state,
        resource: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
