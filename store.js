import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import data from './pages/API/data.json';

// initial state
const startState = {
  cards: []
};

// actions

export const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: data
  }
};

export const addItem = (item) => {
  return {
    type: 'ADD',
    item
  }
};


// reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards,
      }
    case 'ADD':
      return {
        ...state,
        cards: [...action.cards, action.item]
      }
    default: {
      return state;
    }
  }
}

const store = (initialState = startState) => {
  return createStore(reducer, initialState);
}

export const initStore = createWrapper(store);