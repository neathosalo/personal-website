import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
