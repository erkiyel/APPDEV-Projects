import keyboard from "./assets/images/keyboard.png";
import './Keyboard.css'

export default function Keyboard({ model, overview, specs, inBox, features, setup, troubleshooting, maintenance, warranty }) {
  return (
    <div>
      <h2>{model}</h2>
      <h3>Product Overview</h3>
      <img src={keyboard} alt="KEYBOARD" />
      <p>{overview}</p>

      <h3>Specifications</h3>
      <ul>
        {specs.map((spec, index) => <li key={index}>{spec}</li>)}
      </ul>

      <h3>In the Box</h3>
      <ul>
        {inBox.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <h3>Key Features</h3>
      <ul>
        {features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>

      <h3>Setup Instructions</h3>
      <ul>
        {setup.map((step, index) => <li key={index}>{step}</li>)}
      </ul>

      <h3>Troubleshooting</h3>
      <ul>
        {troubleshooting.map((issue, index) => <li key={index}>{issue}</li>)}
      </ul>

      <h3>Maintenance and Care</h3>
      <ul>
        {maintenance.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>

      <h3>Warranty and Support</h3>
      <p>{warranty}</p>
    </div>
  );
}