import { useRef, useContext } from "react";
import { Context } from "../Context";
import emailjs from '@emailjs/browser'

const Form = () => {

    const form = useRef();
    const {formState, setFormState, cart} = useContext(Context);

    const sendEmail = (e) => {
        e.preventDefault();
    
        const productsInCart = [...cart];
        const productsForEmail = productsInCart.map((product) => {
            return {
                name: product.name,
                qty: product.quantity,
                unitPrice: product.price,
            };
        });
    
        setFormState({ error: false, loading: true });
        emailjs
           .sendForm('service_8t1lxqp', 'template_3m7edzr', form.current, {
                publicKey: 'EsA3YMhFBzvQpFcxQ',
                country: form.current.country.value,
                fname: form.current.fname.value,
                lname: form.current.lname.value,
                address: form.current.address.value,
                apartment: form.current.apartment.value,
                city: form.current.city.value,
                postalcode: form.current.postalcode.value,
                phone: form.current.phone.value,
                products: productsForEmail,
            })
           .then(
                () => {
                    console.log('SUCCESS');
                    setFormState({...formState, loading: false });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormState({ error: true, loading: false });
                    setTimeout(() => {
                        setFormState({...formState, error: false });
                    });
                },
            );
    };

  return (
    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
        <h1 className="mb-5 font-bold text-3xl">Delivery</h1>
        <input type="text" name="country"  placeholder="Lebanon" className="px-4 py-2 bg-gray-200 rounded-xl mb-5"/>
        <div className="flex items-center mb-5 gap-4 justify-between">
            <input type="text" name="fname" placeholder="First Name" required className="px-4 py-2 bg-gray-200 rounded-xl"/>
            <input type="text" name="lname" placeholder="Last Name" required className="px-4 py-2 bg-gray-200 rounded-xl"/>
        </div>
        <input type="text" name="address" placeholder="Address" required className="px-4 py-2 bg-gray-200 rounded-xl mb-5"/>
        <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" className="px-4 py-2 bg-gray-200 rounded-xl mb-5"/>

        <div className="flex items-center mb-5 gap-4 w-full justify-between">
            <input type="text" name="city" placeholder="City" required className="px-4 py-2 bg-gray-200 rounded-xl"/>
            <input type="text" name="postalcode" placeholder="Postal code (optional)" className="px-4 py-2 bg-gray-200 rounded-xl"/>
        </div>

        <input type="text" name="phone" placeholder="Phone" required className="px-4 py-2 bg-gray-200 rounded-xl mb-5"/>

        <div className="flex flex-col">
            <h1 className="font-bold text-3xl mt-5 mb-5">Shipping Method</h1>
            <div className="border border-green-600 flex flex-col bg-gray-200 px-6 py-4 text-sm rounded-xl">
                <div className="flex justify-between items-center mb-2">
                    <p>Standard</p>
                    <p>Free</p>
                </div>
                <p className="text-gray-800">Delivers in 1-4 working days</p>
            </div>
        </div>

        <div className="flex flex-col mt-6">
            <h1 className="font-bold text-3xl mt-5 mb-5">Payment</h1>
            <div className="border-2 border-green-600 flex flex-col bg-gray-200 px-6 py-4 text-sm rounded-tl-xl rounded-tr-xl">
                <div className="mb-2">
                    Cash on Delivery (COD)
                </div>
            </div>
            <div className="bg-gray-100 rounded-bl-xl rounded-br-xl py-4 px-4 text-sm border">
                No need to pay online, you can easily pay our shipping agent the total amount of your order!
            </div>
        </div>
        <input type="submit" value="Complete order" className="mt-10 bg-green-600 text-center cursor-pointer py-5 text-white rounded-xl font-bold" />
    </form>
  )
}

export default Form