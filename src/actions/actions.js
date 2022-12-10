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

export const getTickets = (searchId) => (dispatch) => {
  aviasalesService
    .getTickets(searchId)
    .then((data) => {
      const ticketsArr = [...data.tickets];
      // eslint-disable-next-line no-unused-expressions
      !data.stop
        ? aviasalesService.getTickets(localStorage.getItem('searchId'))
        : dispatch({ type: 'TICKETS_FETCHED', payload: ticketsArr });
    })
    .catch(() => dispatch(requestError()));
};

// eslint-disable-next-line no-unused-vars
export const getSearchId = () => (dispatch) => {
  aviasalesService
    .getSearchId()
    .then((searchId) => dispatch(getTickets(searchId)));
};

export const getTick = () => (dispatch) => {
  aviasalesService
    .getSearchId()
    .then(({ searchId }) => {
      aviasalesService
        .getTickets(searchId)
        .then((data) => {
          dispatch({
            type: 'TICKETS_FETCHED',
            payload: [...data.tickets],
          });
        })
        .catch(() => dispatch({ type: 'ERROR' }));
    })
    .catch(() => dispatch({ type: 'ERROR' }));
};
