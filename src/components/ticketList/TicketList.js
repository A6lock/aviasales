import AviasalesServise from '../../services/AviasalesService';
import Ticket from '../ticket/Ticket';

import './ticketList.scss';

function TicketList() {
  const aviasalesService = new AviasalesServise();
  aviasalesService.getSearchId().then((res) => console.log(res.searchId));

  return (
    <ul>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
}

export default TicketList;
