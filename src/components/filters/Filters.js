/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { onChangeCheckBox, onCheckAllCheckbox } from '../../actions/actions';

import './filters.scss';

// Создание чекбокс группы и массива чекбоксов
const CheckboxGroup = Checkbox.Group;
const options = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

function Filters() {
  const { checkedList, checkAll } = useSelector((state) => state);

  const dispatch = useDispatch();
  // Функция принимает в себя объект событие и если чекбокс зачекан, то зачекивает все, если нет,
  // то снимает все чеки
  // const onCheckAllChange = (e) => {
  //  setCheckedList(e.target.checked ? options : []);

  //  setCheckAll(e.target.checked);
  // };

  return (
    <div className="filters__container">
      <h2 className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <Checkbox
        onChange={(e) => dispatch(onCheckAllCheckbox(e, options))}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        className="checkbox-group"
        options={options}
        value={checkedList}
        onChange={(list) => dispatch(onChangeCheckBox(list, options))}
        defaultValue
      />
    </div>
  );
}

export default Filters;
