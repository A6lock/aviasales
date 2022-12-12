import { Progress } from 'antd';
import { useSelector } from 'react-redux';

function ProgressBar() {
  const downloadProgress = useSelector((state) => state.downloadProgress);

  const progressBar = (
    <Progress
      percent={downloadProgress}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      showInfo="false"
    />
  );

  return !downloadProgress || downloadProgress === 100 ? null : progressBar;
}
export default ProgressBar;
