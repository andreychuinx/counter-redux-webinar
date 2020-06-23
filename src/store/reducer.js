const insitialState = {
  counter: 0,
  contohObject: {},
  contohArrays: [],
  isLoading: false,
  iniString: null,
  provinceId: null,
}

const reducer = (state = insitialState, action) => {
  console.log(action, 'ini action berjalan')
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "ON_CHANGE_PROVINCE":
      return {
        ...state,
        provinceId: action.provinceId
      }
    default:
      return state;
  }
}

export default reducer;