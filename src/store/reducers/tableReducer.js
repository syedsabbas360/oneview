
const tableReducer = (state = { tableDetails: 'table State'}, action) => {
  switch (action.type) {
    case 'GET_TABLE_DATA':
      return {...state, currentData: action.payload}
    default:
      return state;
  }
}

export default tableReducer
