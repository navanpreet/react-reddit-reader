const defaultState = {
  subReddits:[]
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case "TOGGLE_SUBREDDIT":
      const newSubReddit = action.subReddit;
      let clone = Object.assign({}, state.subReddits);
      const index = clone.indexOf(newSubReddit);
      if(index === -1){
        clone.unshift(newSubReddit);
      } else {
        clone.splice(index, 1);
      }
      return {
        ...state,
        subReddits: [...clone]
      };
    default:
      return state;
  }
};
