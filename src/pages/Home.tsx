import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-white">
            <Navbar />
            <Hero />
            <Reveal><About /></Reveal>
            <Reveal><Services /></Reveal>
            <Reveal><Footer /></Reveal>
        </main>
    )
}
