import superagent from 'superagent';
// import * as routes from '../lib/routes';

const createImage = image => ({
  type: 'IMAGE_CREATE',
  payload: image,
});

export default imageDescriptor => (store) => {
  const { token } = store.getState();
  const { profile } = store.getState();

  return superagent.post(`${API_URL}/attachments`)
    .set('Authorization', `Bearer ${token}`)
    .query({ p: profile._id })
    .field('title', imageDescriptor.title)
    .attach('image', imageDescriptor.image)
    .then((response) => {
      return store.dispatch(createImage(response.body));
    });
};
