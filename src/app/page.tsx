import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Testimonys from "./_components/testimonys";
import Services  from "./_components/services";
import Footer  from "./_components/footer";

export const metadata = {
  title: "Arena da Bola",
  icons: {
    icon: "/icone.ico",
  },
};

export default function Home(){
  return(
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonys/>
      <Footer />
    </main>
  )
}