import { Suspense } from "react";
import Banner from "./component/Banner"
import Footer from "./component/Footer";
import Nav from "./component/Nav"
import Technologies from "./component/Technologies"
import type { Itechnologies } from "./component/type/technologiesType";

const technologiesFetch = async ():Promise<Itechnologies[]>=> {

  const res = await fetch('/data.json');
  const data = await res.json()
  return data
}
  const technologiesPromise = technologiesFetch() 

function App() {

  
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={ <h2>Loading...</h2>}>
        <Technologies technologiesPromise = {technologiesPromise} />
      </Suspense>
        <Footer />
      </>
      )
}

      export default App
