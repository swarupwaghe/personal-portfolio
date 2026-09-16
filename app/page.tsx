import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { Projects } from '@/components/sections/Projects';
import { ExtrasSection } from '@/components/sections/ExtrasSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { Contact, Footer } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <Projects />
        <ExtrasSection />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

