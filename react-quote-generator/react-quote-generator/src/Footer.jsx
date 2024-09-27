export default function Footer (){
    //stateless component - no hooks, no functions, no states, renders text only
    return(
        <>
        <footer>
            <hr/>
            <p>&copy; {new Date().getFullYear()} My Quote Generator Website || Written by: Erckiel Olores</p>
        </footer>
        </>
    )
}