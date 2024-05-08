"use client"
import React from 'react'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';

console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLICSHER_KEY);
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLICSHER_KEY as string
);

const Checkout = () => {

  const searchParams = useSearchParams()

  const options = {
    mode: 'payment' as const, // Set the mode property to one of the allowed values
    currency: 'usd',
    amount: Number(searchParams.get('amount')) * 100,
    type: 'card',
  } // Add options here
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount'))}/>
    </Elements>
  )
}

export default Checkout