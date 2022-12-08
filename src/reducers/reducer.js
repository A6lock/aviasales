/* eslint-disable default-param-last */

// Стейт
const initialState = {
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки'],
  checkAll: false,
  sortingPanelValue: 'CHEAPEST',
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
    default:
      return state;
  }
}
