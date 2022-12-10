/* eslint-disable consistent-return */
import { format } from 'date-fns';

import './ticket.scss';

function Ticket({ ticketData }) {
  // eslint-disable-next-line no-unused-vars
  const { price, carrier, segments } = ticketData;

  // Функция, которая считает время затраченное на перелет
  const getFlightTime = (seconds) => {
    const hours = String(Math.trunc(seconds / 60));
    const minutes = String(seconds % 60);
    return `${hours}:${minutes.length < 2 ? `0${minutes}` : minutes}`;
  };

  const getStopsCount = (stopsCount) => {
    // eslint-disable-next-line default-case
    switch (stopsCount) {
      case 0:
        return 'Без пересадок';
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
    }
  };

  // Регулярное выражение для правильного отображения суммы билета
  const priceStr = String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

  return (
    <li className="ticket">
      <div className="ticket__head">
        <div className="ticket__price">{priceStr} P</div>
        <div className="ticket__logo">
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Airline logo" />
        </div>
      </div>
      {segments.map((row, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="ticket__info">
          <div className="info">
            <div className="info__item">
              <span className="info__title">
                {row.origin} – {row.destination}
              </span>
              <span className="info__data">
                {format(new Date(row.date), 'H:m')} –
                {format(
                  new Date(row.date).getTime() + row.duration * 60000,
                  'H:mm'
                )}
              </span>
            </div>
          </div>
          <div className="info">
            <div className="info__item">
              <span className="info__title">В пути</span>
              <span className="info__data">{getFlightTime(row.duration)}</span>
            </div>
          </div>
          <div className="info">
            <div className="info__item">
              <span className="info__title">
                {getStopsCount(row.stops.length)}
              </span>
              <span className="info__data">{[...row.stops].join(', ')}</span>
            </div>
          </div>
        </div>
      ))}
    </li>
  );
}

export default Ticket;
