import { Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { onChangeSortingPanelValue } from '../../actions/actions';

import './sortingPanel.scss';

function SortingPanel() {
  const sortingPanelValue = useSelector((state) => state.sortingPanelValue);
  const dispatch = useDispatch();
  return (
    <div className="sorting-panel">
      <Radio.Group
        optionType="button"
        size="large"
        buttonStyle="solid"
        defaultValue={sortingPanelValue}
      >
        <Radio.Button
          value="CHEAPEST"
          onClick={(e) => dispatch(onChangeSortingPanelValue(e.target.value))}
        >
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button
          value="FASTEST"
          onClick={(e) => dispatch(onChangeSortingPanelValue(e.target.value))}
        >
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button
          value="OPTIMAL"
          onClick={(e) => dispatch(onChangeSortingPanelValue(e.target.value))}
        >
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default SortingPanel;
