import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import { addTickets } from '../../actions/actions';
import Filters from '../filters/Filters';
import SortingPanel from '../sortingPanel/SortingPanel';
import TicketList from '../ticketList/TicketList';
import ProgressBar from '../ProgressBar/ProgressBar';

import './main.scss';

function Main() {
  const dispatch = useDispatch();

  return (
    <main className="main">
      <Filters />
      <div>
        <SortingPanel />
        <ProgressBar />
        <TicketList />
        <Button type="primary" onClick={() => dispatch(addTickets())}>
          Показать еще 5 билетов!
        </Button>
      </div>
    </main>
  );
}

export default Main;
