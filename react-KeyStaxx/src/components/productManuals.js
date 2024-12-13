import black from '../assets/black.png';
import pink from '../assets/pink.png';
import purple from '../assets/purple.png';
import black60 from '../assets/60black.png';
import pink60 from '../assets/60pink.png';
import white60 from '../assets/60white.png';
import orange60 from '../assets/60orange.png';
import animesukuna from '../assets/animesukuna.png';
import animechainsawman from '../assets/animechainsawman.png';
import animeahe from '../assets/animeahe.png';
import './ProductManual.css';

const productManuals = [
  {
    id: 1,
    name: 'Classic Black Keyboard',
    image: black,
    details: {
      keycapType: 'ABS',
      switchType: 'Cherry MX Brown',
      color: 'Black',
      usage: 'Plug the keyboard into any USB port. Compatible with Windows, macOS, and Linux. Ideal for typing and light gaming. Clean with a microfiber cloth regularly.',
      careTips: 'Avoid spilling liquids on the keyboard. Do not use abrasive cleaning agents or excessive force on the keys.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 2,
    name: 'Minimalist Pink Keyboard',
    image: pink,
    details: {
      keycapType: 'PBT',
      switchType: 'Gateron Red',
      color: 'Pink',
      usage: 'Connect using USB for instant setup. Great for vibrant setups and everyday use. Use keycap pullers for cleaning or replacement.',
      careTips: 'Keep away from direct sunlight to prevent discoloration. Avoid placing heavy objects on the keyboard.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 3,
    name: 'Purple Modern Keyboard',
    image: purple,
    details: {
      keycapType: 'Double-shot PBT',
      switchType: 'Kailh Box White',
      color: 'Purple',
      usage: 'Plug and play via USB. Designed for creative workspaces and casual gaming. Regularly clean the switches with compressed air.',
      careTips: 'Do not bend the USB cable. Avoid eating or drinking near the keyboard.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 4,
    name: '60% Midnight Black Keyboard',
    image: black60,
    details: {
      keycapType: 'PBT',
      switchType: 'Cherry MX Red',
      color: 'Black',
      usage: 'Connect to a USB port. Compact and lightweight, perfect for gaming setups. Enable gaming mode for anti-ghosting functionality.',
      careTips: 'Avoid dropping the keyboard. Keep it away from dust and debris.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 5,
    name: '60% Pink Power',
    image: pink60,
    details: {
      keycapType: 'ABS',
      switchType: 'Gateron Yellow',
      color: 'Pink',
      usage: 'USB connection required. Portable and efficient for both gaming and work. Use software to customize RGB lighting.',
      careTips: 'Do not expose to extreme temperatures. Handle with care during transportation.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 6,
    name: '60% White Judgement',
    image: white60,
    details: {
      keycapType: 'PBT',
      switchType: 'Cherry MX Blue',
      color: 'White',
      usage: 'Plug into any USB port. Ideal for minimalist setups with vibrant RGB effects. Turn off RGB lighting when not in use to save power.',
      careTips: 'Avoid pressing multiple keys simultaneously with excessive force. Keep the keyboard dry at all times.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 7,
    name: 'Sukuna Keyboard',
    image: animesukuna,
    details: {
      keycapType: 'Custom ABS',
      switchType: 'Cherry MX Black',
      color: 'Black and Red',
      usage: 'Connect to USB. Ideal for anime enthusiasts and gaming setups. Use custom keymapping software for advanced configurations.',
      careTips: 'Do not use sharp objects on the keycaps. Avoid prolonged exposure to direct sunlight.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 8,
    name: 'Chainsaw Man Keyboard',
    image: animechainsawman,
    details: {
      keycapType: 'Custom PBT',
      switchType: 'Gateron Green',
      color: 'Red and Black',
      usage: 'Plug into a USB port. Designed for anime fans and heavy gaming. Adjust switch actuation via included software.',
      careTips: 'Do not remove keycaps frequently without a keycap puller. Keep away from heat sources.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 9,
    name: 'Gaming Beast Keyboard',
    image: animeahe,
    details: {
      keycapType: 'ABS',
      switchType: 'Linear Switches',
      color: 'Multicolor',
      usage: 'Connect via USB. Boldly styled for unique setups. Clean with isopropyl alcohol for deep cleaning.',
      careTips: 'Avoid placing heavy items on the keyboard. Do not twist or fold the keyboard cable.',
      usbPortsRequired: 1,
    },
  },
  {
    id: 10,
    name: '60% Formal Orange',
    image: orange60,
    details: {
      keycapType: 'PBT',
      switchType: 'Gateron Blue',
      color: 'Orange',
      usage: 'Plug into any USB port. Compact design with vibrant orange keycaps. Ideal for both work and gaming environments. Use software to adjust lighting effects.',
      careTips: 'Avoid placing the keyboard in direct sunlight to prevent color fading. Keep away from liquids and dust.',
      usbPortsRequired: 1,
    },
  },
];

export default productManuals;
