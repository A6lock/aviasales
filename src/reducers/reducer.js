/* eslint-disable default-param-last */

// Стейт
const initialState = {
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки'],
  checkAll: false,
  sortingPanelValue: 'CHEAPEST',
  spin: false,
  error: false,
  tickets: [],
  ticketsReceived: false,
  downloadProgress: 0,
  visibleItems: 5,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_CHECKBOX':
      return {
        ...state,
        checkAll: false,
        checkedList: action.payload,
        visibleItems: 5,
      };

    case 'SELECT_ALL':
      return {
        ...state,
        checkedList: action.payload,
        checkAll: true,
        visibleItems: 5,
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
        visibleItems: 5,
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
        tickets: [...state.tickets, ...action.payload.tickets],
        ticketsReceived: action.payload.ticketsReceived,
        downloadProgress: action.payload.ticketsReceived
          ? 100
          : state.downloadProgress + 4,
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
