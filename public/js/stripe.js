/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = ('pk_test_51Mj2aZFxPPsMLR8tXgLHqO1ViPp4wQooZwV9KZomVqixo5jz1MPnYXascAb64V2uH55dbcZw0VlDOwRgBUnbP9MN00B94BhUju');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
