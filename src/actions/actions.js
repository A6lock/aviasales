import AviasalesService from '../services/AviasalesService';

const aviasalesService = new AviasalesService();

// Функция выбора чекбоксов. Если чекбокс выбирается, из компонента приходит
// массив лейблов выбранных чекбоксов, сверяется с "options", который содержит массив всех
// лейблов и в зависимости от этого либо тоглит чек одного бокса, либо чекает все
export const onChangeCheckBox = (list, options) => {
  return list.length === options.length
    ? { type: 'SELECT_ALL', payload: list }
    : { type: 'CHECK_CHECKBOX', payload: list };
};

// Функция отслеживающая, выбран ли чекбокс "Все". Если выбран - чекает все, если нет, то снимает
// все чеки
export const onCheckAllCheckbox = (e, options) => {
  if (e.target.checked) {
    return {
      type: 'SELECT_ALL',
      payload: options,
    };
  }
  return {
    type: 'REMOVE_SELECTION',
  };
};

// Функция меняет тип сортировки в зависимости от переданного значения
export const onChangeSortingPanelValue = (value) => {
  return {
    type: 'CHANGE_SEARCH_PANEL_VALUE',
    payload: value,
  };
};

export const requestError = () => ({ type: 'REQUEST_ERROR' });

export const getTicketsChunck = (searchId) => (dispatch) => {
  aviasalesService
    .getTickets(searchId)
    .then((data) => {
      dispatch({
        type: 'TICKETS_FETCHED',
        payload: {
          tickets: [...data.tickets],
          ticketsReceived: data.stop,
        },
      });

      if (!data.stop) {
        dispatch(getTicketsChunck(searchId));
      }
    })
    .catch(() => dispatch(getTicketsChunck(searchId)));
};

export const getTick = () => (dispatch) => {
  aviasalesService
    .getSearchId()
    .then(({ searchId }) => {
      dispatch(getTicketsChunck(searchId));
    })
    .catch(() => dispatch({ type: 'ERROR' }));
};

export const addTickets = () => {
  return { type: 'ADDING_TICKETS' };
};
