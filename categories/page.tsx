import Footer from "../component/footer"
import Header from "../component/header"
export default function categories(){
    return(
        <div>
            <Header/>
            <b><h1>Types of Loans</h1></b>
            <br></br>
            <ul>
                <li>* Conventional</li>
                <li>* FHA</li>
                <li>* Non-QM</li>
                <li>* USDA</li>
                <li>* VA</li>


            </ul>
            <Footer/>
        </div>
    )
}