import { Phone, MapPin, Clock, Mail, LucideIcon } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919872325087?text=Hi%20Dr.%20Singla%2C%20I%20am%20your%20patient%20and%20would%20like%20to%20receive%20my%20CKD%20diet%20and%20fluid%20protocols%20on%20WhatsApp.";

interface Card {
  icon: LucideIcon;
  title: string;
  content: string;
  href: string | null;
}

const cards: Card[] = [
  {
    icon: Phone,
    title: "Emergency & Appointments",
    content: "(+91) 9872325087",
    href: "tel:+919872325087",
  },
  {
    icon: MapPin,
    title: "Locations",
    content: "MAX Hospital, Mohali & HealthClique Clinic",
    href: null,
  },
  {
    icon: Clock,
    title: "Clinic Timings",
    content: "MAX Hospital: Mon – Sun, 9:00 AM – 8:00 PM\nHealthClique: Tuesday & Friday, 5:00 PM – 7:00 PM",
    href: null,
  },
  {
    icon: Mail,
    title: "Direct Inquiries",
    content:
      "Drop your clinical queries and our desk will route them directly to the doctor.",
    href: null,
  },
];

export default function ContactUs() {
  return (
    <section id="contact-logistics" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            Contact &amp; Logistics
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to reach us or plan your visit.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map(({ icon: Icon, title, content, href }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Icon size={22} />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                {title}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                >
                  {content}
                </a>
              ) : (
                <p className="text-base font-semibold text-gray-900 leading-loose whitespace-pre-line">
                  {content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-md"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
