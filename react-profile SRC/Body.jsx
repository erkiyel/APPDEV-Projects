import './Body.css'
import Grad from "./assets/images/Grad.jpg";

export default function Body({ title, description, sports }) {
    return (
        <div className='container'>
            <img src={Grad} alt="Graduation"/>
            <h1>{title}</h1>
            <br/>
            <p>{description}</p>
            <br/>
            <p>I compete competitively in sports like:</p>
            <ul>
                {sports.competing.map((sport, index) => <li key={index}>{sport}</li>)}
            </ul>
            <br/>
            <p>But I also tried sports like:</p>
            <ul>
                {sports.tried.map((sport, index) => <li key={index}>{sport}</li>)}
            </ul>
            <br/>
        </div>
    );
}