import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Expertise />
      <Approach />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
