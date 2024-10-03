import Footer from "../component/footer";
import Header from "../component/header";
import Link from 'next/link';
export default function apply (){
    return(
        <div>
            <Header/>
            <h1>Apply for Mortgage Loan Here</h1>
            <Link href="https://www.14loans.com/">Application Link</Link>


            <Footer/>
        </div>
        
    );
}