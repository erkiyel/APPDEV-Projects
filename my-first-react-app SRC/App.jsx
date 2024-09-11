import Footer from './Footer';
import Body from './Body';
import Header from './Header';

export default function App() {
    return(
        <>
        <Header/>
        <br />
        <Body />
        <br />
        <Body name = "Erckiel" food = "burger" isHealthy = {false} age = {22} />
        <Body name = "Cazel" food = "chimken" isHealthy = {false} age = {21} />
        <Body name = "Cawen" food = "pizza" isHealthy = {false} age = {23} />
        <Body name = "Petunia" food = "samosa" isHealthy = {false} age = {19} />
        <Body name = "Zazu" food = "Bone" isHealthy = {false} age = {67} />
        <Footer/>
        </>
    )
}