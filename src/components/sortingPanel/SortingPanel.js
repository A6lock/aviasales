import { Radio } from 'antd';

import './sortingPanel.scss';

function SortingPanel() {
  return (
    <div className="sorting-panel">
      <Radio.Group optionType="button" size="large" buttonStyle="solid">
        <Radio.Button value="1">САМЫЙ ДЕШЕВЫЙ</Radio.Button>
        <Radio.Button value="2">САМЫЙ БЫСТРЫЙ</Radio.Button>
        <Radio.Button value="3">ОПТИМАЛЬНЫЙ</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default SortingPanel;
