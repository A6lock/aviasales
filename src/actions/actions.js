/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// Тут надо прописать действия которые пользователь может совершить на странице
// и то, как они будут влиять на стейт
export const onChangeCheckBox = (list, options) => {
  return list.length === options.length
    ? { type: 'SELECT_ALL', payload: list }
    : { type: 'CHECK_CHECKBOX', payload: list };
};

export const onCheckAllCheckbox = (e, options) => {
  if (e.target.checked) {
    return {
      type: 'CHECK_ALL',
      payload: options,
    };
  }
  return {
    type: 'REMOVE_SELECTION',
  };
};
