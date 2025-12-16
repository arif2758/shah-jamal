export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Shah Jamal Bachar",
    url: "https://shah-jamal.vercel.app",
    image: "https://shah-jamal.vercel.app/profileImage.png",
    jobTitle: "Chairman",
    worksFor: {
      "@type": "Organization",
      name: "Shah Jamal Bachar Trust", // Example, adjust as needed based on content
    },
    sameAs: [
      // Add social links here if available in the future
    ],
    description:
      "Chairman, Entrepreneur & Philanthropist dedicated to social welfare and business leadership.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
