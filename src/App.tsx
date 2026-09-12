import Banner from "./component/Banner"
import Footer from "./component/Footer";
import Nav from "./component/Nav"
import Technologies from "./component/Technologies"

const technologiesPromise = async()=>{

  const res = await fetch('./data.json');
  const data = res.json()
  return data
}

function App() {
  console.log(technologiesPromise);

  return (
    <>
      <Nav />
      <Banner/>
      <Technologies/>
      <Footer/>
    </>
  )
}

export default App
