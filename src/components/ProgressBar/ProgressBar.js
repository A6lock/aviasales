import { Progress } from 'antd';
import { useSelector } from 'react-redux';

function ProgressBar() {
  const downloadProgress = useSelector((state) => state.downloadProgress);
  return (
    <Progress
      percent={downloadProgress}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
  );
}
export default ProgressBar;
