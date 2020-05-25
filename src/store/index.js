import { createStore } from 'redux'

const INITIAL_STATE = {
  data: [
    'React',
    'Redux',
    'Python',
  ],
  qnt: 3,
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title], qnt: action.qnt}
    default:
      return state

  }
}

const store = createStore(courses)

export default store