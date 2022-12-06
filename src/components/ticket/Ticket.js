import './ticket.scss';

import airlineLogo from '../../resources/airline logos/S7Logo.jpg';

function Ticket() {
  return (
    <li className="ticket">
      <div className="ticket__head">
        <div className="ticket__price">13 400 Р</div>
        <div className="ticket__logo">
          <img src={airlineLogo} alt="Airline logo" />
        </div>
      </div>
      <div className="ticket__info">
        <div className="info">
          <div className="info__item">
            <span className="info__title">MOW – HKT</span>
            <span className="info__data">10:45 – 08:00</span>
          </div>
        </div>
        <div className="info">
          <div className="info__item">
            <span className="info__title">В пути</span>
            <span className="info__data">21ч 15м</span>
          </div>
        </div>
        <div className="info">
          <div className="info__item">
            <span className="info__title">2 пересадки</span>
            <span className="info__data">HKG, JNB</span>
          </div>
        </div>
      </div>
      <div className="ticket__info">
        <div className="info">
          <div className="info__item">
            <span className="info__title">MOW – HKT</span>
            <span className="info__data">11:20 – 00:50</span>
          </div>
        </div>
        <div className="info">
          <div className="info__item">
            <span className="info__title">В пути</span>
            <span className="info__data">13ч 30м</span>
          </div>
        </div>
        <div className="info">
          <div className="info__item">
            <span className="info__title">1 пересадка</span>
            <span className="info__data">HKG</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Ticket;
