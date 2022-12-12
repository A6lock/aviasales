/* eslint-disable default-param-last */

// Стейт
const initialState = {
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки'],
  checkAll: false,
  sortingPanelValue: 'CHEAPEST',
  spin: false,
  error: false,
  tickets: [],
  visibleItems: 5,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_CHECKBOX':
      return {
        ...state,
        checkAll: false,
        checkedList: action.payload,
      };

    case 'SELECT_ALL':
      return {
        ...state,
        checkedList: action.payload,
        checkAll: true,
      };

    case 'REMOVE_SELECTION':
      return {
        ...state,
        checkedList: [],
        checkAll: false,
      };

    case 'CHANGE_SEARCH_PANEL_VALUE':
      return {
        ...state,
        sortingPanelValue: action.payload,
      };

    case 'TICKETS_FETCHING':
      return {
        ...state,
        spin: true,
      };

    case 'TICKETS_FETCHED':
      return {
        ...state,
        spin: false,
        tickets: [...state.tickets, ...action.payload],
      };

    case 'REQUEST_ERROR':
      return {
        ...state,
        spin: false,
        error: true,
      };

    case 'ADDING_TICKETS':
      return {
        ...state,
        visibleItems: state.visibleItems + 5,
      };

    default:
      return state;
  }
}
