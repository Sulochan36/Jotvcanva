import Hero from "@/components/landing/Hero";
import LogoStrip from "@/components/landing/LogoStrip";
import Features from "@/components/landing/Features";
import Showcase from "@/components/landing/Showcase";
import CTA from "@/components/landing/CTA";

export default function HomePage() {
    return (
        <>
            <Hero />
            <LogoStrip />
            <Features />
            <Showcase />
            <CTA />
        </>
    );
}