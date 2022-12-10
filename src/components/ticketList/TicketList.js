import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Ticket from '../ticket/Ticket';
import { getTick } from '../../actions/actions';

// Основная проблема в том, что я не знаю, как правильно получить ид и после этого сделать
// Запрос билетов.

import './ticketList.scss';

function TicketList() {
  const checkedList = useSelector((state) => state.checkedList);
  const sortingPanelValue = useSelector((state) => state.sortingPanelValue);
  const tickets = useSelector((state) => state.tickets);
  const visibleItems = useSelector((state) => state.visibleItems);

  const dispatch = useDispatch();

  // Нужно будет передавать пропсы, поэтому ебашим их в юзКолбек

  useEffect(() => {
    dispatch(getTick());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedList, sortingPanelValue]);

  const ticketsIist = tickets.map((ticket, index) =>
    index < visibleItems ? <Ticket key={uuidv4()} ticketData={ticket} /> : null
  );

  return <ul>{ticketsIist}</ul>;
}

export default TicketList;
