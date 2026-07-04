import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Invitation2 from "@/components/Invitation2";
import Ribbon1 from "@/components/Ribbon1";
import Ring from "@/components/RingTransition";
import DateSection from "@/components/DateSection";
import VenueSection from "@/components/VenueSection";
import TimelineSection from "@/components/TimelineSection";
import DressCode from "@/components/Dresscode";
import TimerForm from "@/components/TimerForm";

export default function Home() {
  return (
    <main className="relative bg-white text-black">
      

      <Hero />
      <Ribbon1 />
      <Invitation />
      <Ring />
      <Invitation2 />
      <DateSection />
      <VenueSection />
      <TimelineSection />
      <DressCode />
      <TimerForm />
    </main>
  );
}