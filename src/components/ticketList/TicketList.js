/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
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

  // Сортировка билетов. Создаю пустой массив, далее наполняю его по мере выбранных чекбоксов.
  // Реализованно костыльно из-за того, что не укладваюсь в сроки =,-()
  const getSortedTickets = ([...ticketsArr]) => {
    let sortedArr = [];
    if (checkedList.includes('Без пересадок')) {
      const noStops = ticketsArr.filter(
        (item) =>
          item.segments.reduce((acc, i) => acc + i.stops.length, 0) === 0
      );
      sortedArr = [...sortedArr, ...noStops];
    }
    if (checkedList.includes('1 пересадка')) {
      const oneStop = ticketsArr.filter(
        (item) =>
          item.segments.reduce((acc, i) => acc + i.stops.length, 0) === 1
      );
      sortedArr = [...sortedArr, ...oneStop];
    }
    if (checkedList.includes('2 пересадки')) {
      const twoStops = ticketsArr.filter(
        (item) =>
          item.segments.reduce((acc, i) => acc + i.stops.length, 0) === 2
      );
      sortedArr = [...sortedArr, ...twoStops];
    }
    if (checkedList.includes('3 пересадки')) {
      const threeStops = ticketsArr.filter(
        (item) =>
          item.segments.reduce((acc, i) => acc + i.stops.length, 0) === 3
      );
      sortedArr = [...sortedArr, ...threeStops];
    }

    switch (sortingPanelValue) {
      case 'FASTEST':
        return sortedArr.sort(
          (a, b) =>
            a.segments.reduce((acc, i) => acc + i.duration, 0) -
            b.segments.reduce((acc, i) => acc + i.duration, 0)
        );
      default:
        return sortedArr.sort((a, b) => a.price - b.price);
    }
  };

  useEffect(() => {
    dispatch(getTick());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Получение сортированных билетов
  const sortedTickets = getSortedTickets(tickets);

  const ticketsIist = sortedTickets.map((ticket, index) =>
    index < visibleItems ? <Ticket key={uuidv4()} ticketData={ticket} /> : null
  );

  return <ul>{ticketsIist}</ul>;
}

export default TicketList;
