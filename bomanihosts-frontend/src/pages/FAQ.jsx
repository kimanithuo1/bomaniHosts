import { useState } from 'react';
import SEO from '../components/SEO';

const faqs = [
  {
    question: 'How do I book a property on BomaniHosts?',
    answer: 'Browse our listings, select the property you like, and click "Contact Host" or "Send Inquiry". You can communicate directly with the host via WhatsApp or our contact form to arrange viewing and booking details.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Payment methods vary by host. Most accept M-Pesa, bank transfers, and cash payments. Discuss payment terms directly with your host when making arrangements.',
  },
  {
    question: 'Are the properties verified?',
    answer: 'Yes, all properties listed on BomaniHosts undergo verification. We check property documentation and conduct basic background checks on hosts to ensure legitimacy and safety.',
  },
  {
    question: 'What is the typical rental period?',
    answer: 'BomaniHosts specializes in short to medium-term rentals. Minimum rental periods are typically 1 month, with flexibility for longer stays. Some properties may offer weekly rentals - check individual listings for details.',
  },
  {
    question: 'Is there a security deposit required?',
    answer: 'Most properties require a security deposit equal to one month\'s rent. This is refundable at the end of your stay, subject to the property being in good condition. Terms vary by host.',
  },
  {
    question: 'What happens if I need to cancel my booking?',
    answer: 'Cancellation policies vary by host. We recommend discussing cancellation terms before making any payments. Some hosts may offer partial refunds depending on notice period.',
  },
  {
    question: 'Are utilities included in the rent?',
    answer: 'This varies by property. Some rentals include utilities (water, electricity, internet) in the monthly rent, while others charge separately. Check the listing details or ask the host directly.',
  },
  {
    question: 'Can I list my property on BomaniHosts?',
    answer: 'Yes! Create an account and select "I want to list properties as a host" during registration. Our team will contact you to guide you through the listing process.',
  },
  {
    question: 'Is there a service fee?',
    answer: 'BomaniHosts does not charge tenants any service fees. Hosts pay a small commission for successful bookings. All fees are transparent and discussed upfront.',
  },
  {
    question: 'What if I have an issue with my rental?',
    answer: 'Contact us immediately through our support channels. We mediate disputes between tenants and hosts to ensure fair resolutions. Your safety and satisfaction are our priorities.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD structured data for SEO
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions - BomaniHosts"
        description="Find answers to common questions about renting properties through BomaniHosts. Learn about booking, payments, policies, and more."
        keywords="FAQ, questions, rental help, booking questions, BomaniHosts support"
        jsonLd={faqJsonLd}
      />

      <div className="bg-bomani-bg min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-bomani-accent to-bomani-accent/90 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-bomani-bg/90">
              Everything you need to know about BomaniHosts
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 border border-bomani-peach rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary shadow-md"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg font-semibold text-bomani-accent pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-bomani-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-bomani-peach/30 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-bomani-peach/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-bomani-accent mb-3">
              Still have questions?
            </h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-bomani-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Contact Support
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-bomani-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bomani-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold text-bomani-accent mb-2">Browse Listings</h3>
              <p className="text-sm text-gray-600 mb-4">Find your perfect rental property</p>
              <a href="/listings" className="text-bomani-primary hover:underline text-sm font-medium">
                View All →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-bomani-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bomani-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-bomani-accent mb-2">Become a Host</h3>
              <p className="text-sm text-gray-600 mb-4">List your property with us</p>
              <a href="/auth/register" className="text-bomani-primary hover:underline text-sm font-medium">
                Get Started →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-bomani-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bomani-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-bomani-accent mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-600 mb-4">We're here to help you</p>
              <a href="/contact" className="text-bomani-primary hover:underline text-sm font-medium">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;