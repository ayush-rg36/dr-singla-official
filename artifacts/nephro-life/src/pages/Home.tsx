import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse, Activity, Star, Award, Shield,
  Stethoscope, Clock, FileText, CheckCircle, Menu, X,
  AlertTriangle, ThumbsUp, Droplets, Apple, Ban, Info,
  Briefcase, GraduationCap, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import doctorImg from "@assets/dr-hero.jpg_1776191087001.jpg";
import dialysisCenterImg from "@assets/dialysis-center.jpg_1776191087001.jpeg";
import awardImg from "@assets/award-badge.jpg_1776191087002.jpeg";
import staffImg from "@assets/staff.jpg2_1776191764065.jpeg";
import PatientReviews from "@/components/PatientReviews";

function NephroLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    document.body.style.overflow = legalModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [legalModal]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <NephroLogo className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-xl text-gray-900 tracking-tight">DrManishSingla.com</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Services</button>
            <a
              href="https://wa.me/919872294495?text=Hi%20Dr.%20Singla%2C%20I%20just%20visited%20your%20clinical%20portal.%20Please%20send%20me%20the%20Kidney%20Care%20Protocols%20and%20Dietary%20Guidelines%20discussed%20on%20the%20site"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.trackWhatsAppLead()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Get Protocols
            </a>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contact</button>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full bg-primary hover:bg-primary/90 text-white px-6">
              Contact Us
            </Button>
          </nav>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-b px-4 py-4 flex flex-col gap-4"
          >
            <button onClick={() => scrollToSection("home")} className="text-left py-2 font-medium text-gray-800">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-left py-2 font-medium text-gray-800">About</button>
            <button onClick={() => scrollToSection("services")} className="text-left py-2 font-medium text-gray-800">Services</button>
            <a
              href="https://wa.me/919872294495?text=Hi%20Dr.%20Singla%2C%20I%20just%20visited%20your%20clinical%20portal.%20Please%20send%20me%20the%20Kidney%20Care%20Protocols%20and%20Dietary%20Guidelines%20discussed%20on%20the%20site"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.trackWhatsAppLead()}
              className="flex items-center gap-2 py-2 font-medium text-gray-800 hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Get Protocols on WhatsApp
            </a>
            <button onClick={() => scrollToSection("contact")} className="text-left py-2 font-medium text-gray-800">Contact</button>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full bg-primary text-white w-full mt-2">
              Contact Us
            </Button>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-8 pb-16 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-br from-sky-50/60 to-white">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

          <div className="container mx-auto px-6 sm:px-10 md:px-14 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <motion.div
                className="flex-1 max-w-2xl text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                  <Activity size={16} />
                  <span>Senior Consultant Nephrologist · Max Healthcare</span>
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-3">
                  Dr. Manish Singla
                </motion.h1>
                <motion.p variants={fadeIn} className="text-xl md:text-2xl text-primary font-semibold mb-4 leading-snug">
                  Advanced Nephrology &amp; Kidney Transplant Care
                </motion.p>
                <motion.p variants={fadeIn} className="text-base text-muted-foreground mb-5 leading-relaxed">
                  DM Nephrology · MD Medicine · MBBS<br />
                  Clinical Fellowship, University of Toronto · MD Gold Medalist
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                  {["18+ Years Experience", "Kidney Transplant", "AKI Specialist", "ISN Member"].map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{tag}</span>
                  ))}
                </motion.div>
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Button onClick={() => scrollToSection("services")} className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-white text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
                    Clinical Services
                  </Button>
                  <Button onClick={() => scrollToSection("about")} variant="outline" className="rounded-full h-12 px-8 border-primary text-primary hover:bg-primary/5 text-lg w-full sm:w-auto font-semibold">
                    About the Doctor
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 w-full max-w-md lg:max-w-none relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl max-w-sm mx-auto">
                  <img src={doctorImg} alt="Dr. Manish Singla" className="object-cover w-full h-full object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[280px]">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-900 leading-tight">Dr. Manish Singla</p>
                    <p className="text-sm text-gray-500">DM Nephrology</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-white border-y border-gray-100 relative z-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3">Guiding You to Better Kidney Wellness</h2>
              <p className="text-gray-500 text-base max-w-2xl mx-auto">Dr. Singla set forth on this path in 2010, driven by the goal of providing holistic approach and advanced care to promote community well-being.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { icon: Clock,       stat: "15",    label: "Years of Unwavering Trust" },
                { icon: Stethoscope, stat: "300",   label: "Kidney Biopsies Performed" },
                { icon: Droplets,    stat: "500+",   label: "Patients Received On-time Dialysis" },
                { icon: Users,       stat: "1,000+",  label: "Patients with Restored Health" },
                { icon: Star,        stat: "98%",   label: "Positive Feedback" },
                { icon: Award,       stat: "15+",   label: "Awards Won" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-gray-900 mb-1">{item.stat}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Comprehensive Kidney Care</h2>
              <p className="text-muted-foreground text-lg">We offer a full spectrum of nephrology services, combining advanced medical technology with personalized patient care.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "CKD Management", desc: "Expert care to slow the progression of Chronic Kidney Disease and maintain quality of life.", icon: Shield },
                { title: "IgA Nephropathy", desc: "Targeted immunomodulatory management and kidney function preservation.", icon: AlertTriangle },
                { title: "Transplant Care", desc: "Pre-transplant evaluation and dedicated post-transplant medical management.", icon: FileText },
                { title: "Hypertension", desc: "Specialized treatment for difficult-to-control high blood pressure to protect kidney function.", icon: Activity },
                { title: "Dialysis Care", desc: "Comprehensive support for hemodialysis and peritoneal dialysis patients.", icon: HeartPulse },
                { title: "Kidney Stones", desc: "Preventative strategies and medical management for recurrent kidney stone formers.", icon: Stethoscope },
                { title: "Glomerulonephritis", desc: "Diagnosis and targeted treatments for various glomerular diseases.", icon: CheckCircle },
              ].map((service, idx, arr) => (
                <Card
                  key={idx}
                  className={`border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white${idx === arr.length - 1 && arr.length % 3 === 1 ? " lg:col-start-2" : ""}`}
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* World-Class Facilities & Recognition */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#026aa2] mb-12">World-Class Facilities &amp; Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img src={dialysisCenterImg} alt="Dialysis Centre" className="rounded-2xl shadow-xl object-cover h-64 w-full" />
                <p className="text-center text-gray-600 font-medium mt-3">State-of-the-Art Dialysis Infrastructure</p>
              </div>
              <div>
                <img src={awardImg} alt="Awards & Recognition" className="rounded-2xl shadow-xl object-cover h-64 w-full" />
                <p className="text-center text-gray-600 font-medium mt-3">Recognized for Excellence in Nephrology</p>
              </div>
              <div>
                <img src={staffImg} alt="Clinical Team" className="rounded-2xl shadow-xl object-cover h-64 w-full" />
                <p className="text-center text-gray-600 font-medium mt-3">A Dedicated Team Committed to Your Care</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Protocol CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">For Existing Patients</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Already a Patient? Get Your Protocols.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Skip the wait. Get your personalised diet chart, fluid restriction guide, and medication reminders sent directly to your WhatsApp — right now.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/919872294495?text=Hi%20Dr.%20Singla%2C%20I%20just%20visited%20your%20clinical%20portal.%20Please%20send%20me%20the%20Kidney%20Care%20Protocols%20and%20Dietary%20Guidelines%20discussed%20on%20the%20site"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.trackWhatsAppLead()}
                  className="inline-flex items-center gap-3 bg-white text-primary font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send to my WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-white/80 hover:text-white font-medium text-base underline underline-offset-4 transition-colors"
                >
                  View protocols first
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">

            {/* Top: Photo + Intro */}
            <div className="flex flex-col lg:flex-row items-start gap-16 mb-16">
              <div className="flex-1 w-full lg:max-w-sm">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                    <img src={doctorImg} alt="Dr. Manish Singla" className="object-cover object-top w-full h-full" />
                  </div>
                  <div className="absolute -right-4 top-12 bg-white p-5 rounded-2xl shadow-xl hidden md:block">
                    <div className="flex items-center gap-3 mb-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={18} />
                      <span className="font-bold text-lg">4.9/5</span>
                    </div>
                    <p className="text-sm text-gray-500">Patient Rating</p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">Dr. Manish Singla</h2>
                <h3 className="text-xl text-primary font-semibold mb-1">Senior Consultant Nephrologist</h3>
                <p className="text-gray-500 mb-6">DM Nephrology · MD Medicine · MBBS · MD Gold Medalist, University of Delhi</p>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
                  <p>
                    Dr. Manish Singla is a distinguished Nephrologist currently practicing at <strong>Max Healthcare</strong>. With training across India's top medical institutions and an international Clinical Fellowship at the <strong>University of Toronto, Canada</strong>, he brings world-class expertise in kidney care to every patient he treats.
                  </p>
                  <p>
                    His specialty interests include <strong>Kidney Transplant</strong> and <strong>Acute Kidney Injury (AKI) in ICU patients</strong> — two of the most complex and critical areas in nephrology.
                  </p>
                  <p className="italic border-l-4 border-primary pl-4 text-gray-700">
                    "My philosophy is simple: treat every patient like family. Kidney health is a marathon, not a sprint, and I am here to walk that path with you."
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "MD Gold Medalist", color: "bg-amber-50 text-amber-700 border border-amber-200" },
                    { label: "ISN Member", color: "bg-primary/10 text-primary border border-primary/20" },
                    { label: "ISOT Member", color: "bg-primary/10 text-primary border border-primary/20" },
                    { label: "University of Toronto Fellow", color: "bg-blue-50 text-blue-700 border border-blue-200" },
                    { label: "Kidney Transplant Specialist", color: "bg-green-50 text-green-700 border border-green-200" },
                  ].map((b, i) => (
                    <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${b.color}`}>{b.label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Experience, Education, Memberships & Awards */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Briefcase size={16} />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg">Work Experience</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { role: "Senior Consultant Nephrologist", org: "Max Healthcare", period: "Current" },
                    { role: "Senior Consultant", org: "Mayo Hospital, Mohali", period: "2015 – 2018" },
                    { role: "Associate Consultant", org: "Medanta, The Medicity, Gurgaon", period: "2013 – 2014" },
                  ].map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-primary/30">
                      <p className="font-semibold text-gray-800 text-sm">{item.role}</p>
                      <p className="text-gray-600 text-sm">{item.org}</p>
                      <span className="inline-block text-xs text-primary font-medium mt-0.5">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg">Education & Training</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { degree: "Clinical Fellowship", inst: "University of Toronto, Canada", period: "2014 – 2015" },
                    { degree: "DM Nephrology", inst: "SMS Medical College, Jaipur", period: "2010 – 2013" },
                    { degree: "MD Medicine", inst: "Maulana Azad Medical College, New Delhi", period: "2005 – 2008" },
                    { degree: "MBBS", inst: "Maulana Azad Medical College, New Delhi", period: "1999 – 2005" },
                  ].map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-primary/30">
                      <p className="font-semibold text-gray-800 text-sm">{item.degree}</p>
                      <p className="text-gray-600 text-sm">{item.inst}</p>
                      <span className="inline-block text-xs text-primary font-medium mt-0.5">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships, Awards & Specialties */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Award size={16} />
                    </div>
                    <h4 className="font-heading font-bold text-gray-900 text-lg">Awards</h4>
                  </div>
                  <div className="pl-4 border-l-2 border-amber-300">
                    <p className="font-semibold text-gray-800 text-sm">MD Gold Medalist</p>
                    <p className="text-gray-600 text-sm">University of Delhi</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Users size={16} />
                    </div>
                    <h4 className="font-heading font-bold text-gray-900 text-lg">Memberships</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Indian Society of Nephrology (ISN)",
                      "Indian Society of Organ Transplant (ISOT)",
                    ].map((m, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700 text-sm">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Activity size={16} />
                    </div>
                    <h4 className="font-heading font-bold text-gray-900 text-lg">Specialty Interests</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Kidney Transplant",
                      "Acute Kidney Injury (AKI) in ICU Patients",
                    ].map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700 text-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Dietary Guidelines */}
        <section id="resources" className="py-24 bg-white">
          <div className="container mx-auto px-4">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Info size={16} />
                <span>Clinical Patient Education</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">CKD Diet &amp; Lifestyle Guide</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                What you eat directly impacts the progression of Chronic Kidney Disease. This guide is your practical, science-backed companion for protecting your kidney function every day.
              </p>
            </div>

            {/* Section 1: Foods You CAN Eat */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <ThumbsUp size={20} />
                </div>
                <h3 className="text-xl font-heading font-bold text-green-700">Foods You CAN Eat</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { badge: "Carbohydrates", title: "White Rice & Pasta", text: "Lower in potassium and phosphorus than whole grains. Opt for white bread, white rice, and regular pasta as your carbohydrate base." },
                  { badge: "Vegetables", title: "Cauliflower & Cabbage", text: "Low-potassium vegetables that are kidney-friendly. Can be eaten in generous portions. Leached vegetables further reduce potassium content." },
                  { badge: "Fruits", title: "Apples, Grapes & Berries", text: "Low-potassium fruits that are safe to enjoy. Rich in antioxidants that help fight inflammation without stressing kidney function." },
                  { badge: "Protein", title: "Egg Whites", text: "High-quality protein with minimal phosphorus compared to egg yolks. Excellent protein source for CKD patients on protein-restricted diets." },
                  { badge: "Protein", title: "Fish (in moderation)", text: "Omega-3 rich fish like salmon or sardines (in controlled portions) help reduce inflammation and support cardiovascular health." },
                  { badge: "Fats & Flavor", title: "Olive Oil & Garlic", text: "Kidney-friendly cooking fats with anti-inflammatory properties. Use herbs and garlic to add flavor without adding salt." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#127db3] text-white rounded-2xl p-6 shadow">
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-3">{item.badge}</span>
                    <h4 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 my-12" />

            {/* Section 2: Foods to AVOID */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                  <Ban size={20} />
                </div>
                <h3 className="text-xl font-heading font-bold text-red-700">Foods to AVOID or Limit</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { left: "Sodium",      right: "High Risk",      rightColor: "text-red-200",    title: "High-Sodium Foods",      text: "Processed meats, canned soups, pickles, soy sauce, and fast food. Sodium causes fluid retention and raises blood pressure, accelerating kidney damage." },
                  { left: "Potassium",   right: "High Risk",      rightColor: "text-red-200",    title: "High-Potassium Foods",   text: "Bananas, oranges, potatoes, tomatoes, spinach, and dried fruits. Elevated potassium (hyperkalemia) is dangerous and can cause heart rhythm problems." },
                  { left: "Phosphorus",  right: "High Risk",      rightColor: "text-red-200",    title: "High-Phosphorus Foods",  text: "Dairy products, nuts, seeds, dark colas, processed cheese, and whole grains. High phosphorus weakens bones and harms blood vessels." },
                  { left: "Protein",     right: "Moderate Risk",  rightColor: "text-orange-200", title: "Excess Protein",         text: "Red meat, large portions of chicken or fish. Too much protein creates waste products that failing kidneys cannot efficiently filter out." },
                  { left: "Beverages",   right: "High Risk",      rightColor: "text-red-200",    title: "Alcohol",                text: "Alcohol strains the kidneys, raises blood pressure, interacts with medications, and contributes to dehydration — all harmful for CKD patients." },
                  { left: "Supplements", right: "Consult Doctor", rightColor: "text-red-200",    title: "Herbal Supplements",     text: "Many herbal remedies are processed by the kidneys and can be toxic. Always consult your nephrologist before taking any supplements or alternative remedies." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#127db3] text-white rounded-2xl p-6 shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{item.left}</span>
                      <span className={`text-xs font-bold ${item.rightColor}`}>{item.right}</span>
                    </div>
                    <h4 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 my-12" />

            {/* Section 3: Daily Limits & Key Rules */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="text-xl font-heading font-bold text-amber-700">Daily Limits &amp; Key Rules</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Droplets, title: "Fluid Restriction",     badge: "500–1000 ml/day + urine output",         text: "In later stages of CKD and on dialysis, fluid intake is strictly restricted. Excess fluid causes swelling, shortness of breath, and heart complications. Measure and log your daily fluid intake including soups, fruits, and ice." },
                  { icon: Apple,    title: "Sodium Limit",          badge: "Less than 2,000 mg/day",                 text: "Do not add table salt to food. Avoid processed and packaged foods. Read food labels carefully. Use lemon juice, herbs, and vinegar as salt-free flavor enhancers." },
                  { icon: Shield,   title: "Potassium Control",     badge: "2,000–3,000 mg/day (stage-dependent)",   text: "Leach vegetables by peeling, cutting small, soaking in water for 2+ hours, then boiling in fresh water and discarding. This process significantly reduces potassium content. Avoid potassium chloride salt substitutes — they are not safe for CKD." },
                  { icon: Activity, title: "Phosphorus Management", badge: "800–1,000 mg/day",                       text: "Take phosphate binders as prescribed by your doctor — they work best when taken with meals. Avoid foods with phosphate additives (check labels for 'phos'). Limit dairy to small controlled portions. Organic phosphorus from natural foods is less readily absorbed than additives." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#127db3] text-white rounded-2xl p-6 shadow flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-lg mb-1">{item.title}</h4>
                      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-3">{item.badge}</span>
                      <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}

                {/* Wide lifestyle card */}
                <div className="col-span-1 md:col-span-2 bg-[#127db3] text-white rounded-2xl p-8 shadow">
                  <h4 className="font-heading font-bold text-white text-xl mb-6">Additional Lifestyle Recommendations</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Monitor blood pressure daily and keep it below 130/80 mmHg",
                      "Maintain HbA1c below 7% if diabetic — diabetes is the leading cause of CKD",
                      "Exercise moderately for 30 minutes most days — walking is ideal",
                      "Avoid NSAIDs (ibuprofen, naproxen) — they are toxic to the kidneys",
                    ].map((tip, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-green-300 shrink-0 mt-0.5" size={18} />
                        <p className="text-white/80 text-sm leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section — No booking form */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg">We are here to answer your questions and provide the care you need. Reach out to us today.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-100 bg-gray-50 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Clinic Locations</h4>
                  <p className="text-gray-500 leading-relaxed">
                    MAX Hospital, Mohali<br />
                    <span className="text-xs text-gray-400">Mon – Sun, 9:00 AM – 8:00 PM</span><br /><br />
                    HealthClique Clinic, Mohali<br />
                    <span className="text-xs text-gray-400">Tue &amp; Fri, 5:00 PM – 7:00 PM</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 bg-gray-50 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.67 9.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Phone Number</h4>
                  <a
                    href="tel:+919872325087"
                    className="text-gray-500 hover:text-primary transition-colors leading-relaxed block"
                  >
                    +91 98723 25087
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Emergencies &amp; Appointments</p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 bg-gray-50 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Email Address</h4>
                  <a
                    href="mailto:manishsingladoc@gmail.com"
                    className="text-gray-500 hover:text-primary transition-colors text-sm"
                  >
                    manishsingladoc@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Clinical queries &amp; referrals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <PatientReviews />

        {/* Patient Success Stories */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5">
                <Star size={14} className="fill-primary" />
                <span>Verified Google Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Patient Success Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Amit Sharma", text: "A very knowledgeable and down-to-earth doctor. He saved my father from a very critical stage of kidney failure. Best nephrologist in the region." },
                { name: "Priya Singh", text: "Dr. Manish explains everything so clearly. His approach to dialysis and IgA treatment is modern and very effective. Highly recommended for chronic kidney issues." },
                { name: "Rahul Verma", text: "The dialysis center is world-class and very hygienic. Dr. Singla is always available for his patients and treats them like family." },
                { name: "Ramesh T.",   text: "Dr. Singla explained my CKD stage with such clarity that I finally understood what I was dealing with. His diet plan changed my numbers within 3 months. Truly a doctor who listens." },
                { name: "Priya M.",    text: "My father was on dialysis for two years before we met Dr. Singla. The level of follow-up care and the personal attention we received was unlike any clinic we had visited before." },
              ].map((review, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">"{review.text}"</p>
                  <p className="font-heading font-bold text-gray-900 text-sm">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HeartPulse className="h-8 w-8 text-primary" />
                <span className="font-heading font-bold text-2xl text-white tracking-tight">DrManishSingla.com</span>
              </div>
              <p className="max-w-sm mb-6 leading-relaxed">
                Compassionate, state-of-the-art nephrology care led by Dr. Manish Singla. Dedicated to protecting your kidney health for a better life.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 font-heading">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">About Dr. Singla</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection("resources")} className="hover:text-primary transition-colors">CKD Resources</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Get In Touch</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 font-heading">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.67 9.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:+919872325087" className="hover:text-primary transition-colors">+91 98723 25087</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <a href="mailto:manishsingladoc@gmail.com" className="hover:text-primary transition-colors">manishsingladoc@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>MAX Hospital, Mohali<br /><span className="text-gray-500 text-xs">HealthClique — Tue &amp; Fri, 5–7 PM</span></span>
                </li>
                <li className="pt-1">
                  <a
                    href="https://wa.me/919872325087?text=Hi%20Dr.%20Singla%2C%20I%20would%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => window.trackWhatsAppLead()}
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} DrManishSingla.com. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <button onClick={() => setLegalModal("privacy")} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => setLegalModal("terms")} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4" onClick={() => setLegalModal(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setLegalModal(null)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors">
              <X size={22} />
            </button>

            {legalModal === "privacy" && (
              <>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Privacy Policy</h2>
                <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">Data Collection</h3>
                    <p>We only collect information provided voluntarily via contact forms — specifically Name, Email, and Phone number.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">Usage</h3>
                    <p>Data is used strictly for appointment scheduling and patient communication. We never sell, share, or transfer personal data to third parties.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">Security</h3>
                    <p>We implement standard encryption and security protocols to protect all patient information collected through this website.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">Contact</h3>
                    <p>For any privacy-related questions, you may reach us at manishsingladoc@gmail.com.</p>
                  </div>
                </div>
              </>
            )}

            {legalModal === "terms" && (
              <>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Terms of Service</h2>
                <p className="text-xs text-gray-400 mb-6 uppercase tracking-wide font-semibold">Including Medical Disclaimer</p>
                <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-bold text-amber-800 text-base mb-1">⚠ Medical Disclaimer</h3>
                    <p className="text-amber-700">The content on this portal — including dietary guidelines and treatment information — is for <strong>informational purposes only</strong>. It is <strong>NOT a substitute</strong> for professional medical advice, diagnosis, or treatment. Always consult a qualified physician for medical decisions.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">No Doctor-Patient Relationship</h3>
                    <p>Use of this website does not establish a formal doctor-patient relationship. A formal relationship is only established through an in-person clinical consultation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">Liability</h3>
                    <p>Dr. Manish Singla and Creator's Lab are not liable for any actions taken based on the content of this site without a formal consultation and diagnosis.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base mb-1">Jurisdiction</h3>
                    <p>These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
