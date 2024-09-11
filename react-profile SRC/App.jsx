import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

export default function App() {
    const title = "ALL ABOUT ME";
    const description = `I am Erckiel Olores studying Bachelor of Science in Computer Science at the University of Baguio.
        I like a little bit of everything when it comes to sports and I am an athletic person but I am 
        also an academic achiever with certificates of Outstanding Performance in research from The whole grade 12 
        in the University in Baguio but I also have certificates in research from Regionals to Internationals.`;

    const sports = {
        competing: ["Mountain Biking", "Athletics", "Swimming"],
        tried: ["Power Lifting", "American Football", "Soccer", "Volleyball", "Billiards", "Badminton", "Basketball", "Table Tennis", "Tennis"]
    };

    return(
        <>
            <Navbar/>
            <Body title={title} description={description} sports={sports} />
            <Footer />
        </>
    );
}
