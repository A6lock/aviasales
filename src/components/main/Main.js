import { Button } from 'antd';

import Filters from '../filters/Filters';
import SortingPanel from '../sortingPanel/SortingPanel';
import TicketList from '../ticketList/TicketList';

import './main.scss';

function Main() {
  return (
    <main className="main">
      <Filters />
      <div>
        <SortingPanel />
        <TicketList />
        <Button type="primary">Показать еще 5 билетов!</Button>
      </div>
    </main>
  );
}

export default Main;
