const defaultState = {
  subReddits:[]
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case "TOGGLE_SUBREDDIT":
      const newSubReddit = action.subReddit;
      const index = state.subReddits.indexOf(newSubReddit)
      if(index === -1){
        state.subReddits.unshift(newSubReddit);
      } else {
        state.subReddits.splice(index, 1);
      }
      return {
        ...state,
        subReddits: [...state.subReddits]
      };
    default:
      return state;
  }
};
