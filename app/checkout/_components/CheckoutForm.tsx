import Cart from '@/app/_components/Cart';
import { CartContext } from '@/app/_context/CartContext';
import OrderApis from '@/app/_utils/OrderApis';
import cartApis from '@/app/_utils/cartApis';
import { useUser } from '@clerk/nextjs';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
const CheckoutForm = ({amount}: {amount: number}) => {

  const{cart,setCart}= useContext(CartContext)
  const {user} = useUser()

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error: any) => {
    setLoading(false);
    setErrorMessage(error.message);
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    // create New Order
    createOrder()
    // Send Email
    sendEmail()
    
    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({ amount: amount }),


    });
    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm"
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder = async ()=>{
    let productsId:number[] = [];
    cart.map((item)=>{
      productsId.push(item?.product.id)
    })
    const data = {
      data:{
        email: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
        amount,
        products: productsId
      }
    }
    OrderApis.createOrder(data).then((res)=>{
      if(res){
        cart.forEach((item)=>{
          cartApis.deleteCartItem(item.id).then((res)=>{})
        })
      }
    })
  }

  const sendEmail = async ()=>{
    const res = await fetch(`api/send-email`, {
      method: 'POST'
    });
  }

  return (
    <form onSubmit={handleSubmit}
    className='flex items-center justify-center mx-3 my-8 '>
      <div className='w-[500px] border p-4 ro '>
        <PaymentElement />
        <button className='w-full text-center bg-primary-600 mt-2 p-2 rounded text-primary-100' type="submit">Pay</button>
      </div>
    </form>
  );
};

export default CheckoutForm;