/* eslint-disable default-param-last */
// Тут должна быть прописана логика, как и что будет меняться в зависимости от
// такого-то экшена
const initialState = {
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки'],
  checkAll: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_CHECKBOX':
      return {
        ...state,
        checkAll: false,
        checkedList: action.payload,
      };
    case 'CHECK_ALL':
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
    default:
      return state;
  }
}
