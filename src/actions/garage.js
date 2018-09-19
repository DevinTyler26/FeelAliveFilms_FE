import superagent from 'superagent';
import * as routes from '../lib/routes';

export const setGarage = profile => ({
  type: 'GARAGE_SET',
  payload: profile,
});

export const createGarageRequest = profile => (store) => {
  const { token } = store.getState();

  return superagent.post(`${API_URL}${routes.GARAGE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setGarage(response.body));
    });
};

export const updateGarageRequest = profile => (store) => {
  const { token } = store.getState();

  return superagent.put(`${API_URL}${routes.GARAGE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setGarage(response.body));
    });
};

export const fetchGarageRequest = () => (store) => {
  const { token } = store.getState();

  return superagent.get(`${API_URL}${routes.GARAGE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(setGarage(response.body));
    });
};
