import "./App.css";
import CheckoutStepper from "./Component/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shopping Info",
    Component: () => <div>Enter your shipping Adreess</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];
function App() {
  return (
    <div>
      <h2>Chekout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
