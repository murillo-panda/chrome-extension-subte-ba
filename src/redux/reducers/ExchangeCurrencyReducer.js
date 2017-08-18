import { REQUEST_EXCHANGE_CURRENCY } from '../../constants/actions';

export default function exchangeCurrencyReducer(state = null, action) {
  switch (action.type) {
    case REQUEST_EXCHANGE_CURRENCY:
    let result =  action.payload.replace('var dolartoday =','');
    let parsedResult = JSON.parse(result);
      return Object.assign({}, state, {
        payload: parsedResult,
      });
    default:
  }
  return state;
}
