import Filters from '../filters/Filters';
import SortingPanel from '../sortingPanel/SortingPanel';
import TicketList from '../ticketList/TicketList';
import ProgressBar from '../ProgressBar/ProgressBar';

import './main.scss';

function Main() {
  return (
    <main className="main">
      <Filters />
      <div>
        <SortingPanel />
        <ProgressBar />
        <TicketList />
      </div>
    </main>
  );
}

export default Main;
