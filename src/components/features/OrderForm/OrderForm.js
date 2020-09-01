import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import { setOrderOption } from '../../../redux/orderRedux';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';



const sendOrder = (options, tripCost, tripName, tripCountryCode, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if ((options.name !== '') && (options.contact !== '')) {
    const payload = {
      ...options,
      totalCost,
      tripName,
      tripCountryCode,
      tripId,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    window.alert('Please provide your name and contact details before sending the order.');
  }
};

const OrderForm = props => (
  <Row>
    {pricing.map(option =>
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={setOrderOption} />
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
    <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripName, props.tripCountryCode, props.tripId)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripCountryCode: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  options: PropTypes.object,
  id: PropTypes.node,
  setOrderOption: PropTypes.object,
};

export default OrderForm;
