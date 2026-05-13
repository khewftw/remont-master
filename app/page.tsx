import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuizBlock from "@/components/QuizBlock";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import PricingPackages from "@/components/PricingPackages";
import WorkProcess from "@/components/WorkProcess";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <QuizBlock />
        <Services />
        <Gallery />
        <PricingPackages />
        {/* <WorkProcess /> */}
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
