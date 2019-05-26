const initialState = {
  activeScreen: '',
  activeLayOut: 'testLayout',
  isAuthenticated: false
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type){
    case 'layoutChange':
        newState.activeLayOut = 'mainLayout'
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;