import certifications from '../data/certifications.json';

import microsoftLogo from '../assets/logos/microsoft.svg';
import salesforceLogo from '../assets/logos/salesforce.png';

const logoMap = {
  Microsoft: microsoftLogo,
  Salesforce: salesforceLogo
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative">
      {/* Invisible scroll anchor for nav scroll */}
      <div id="certifications-anchor" className="absolute -top-20" />

      <div className="pt-24 px-4 md:px-12 py-16 bg-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Certifications</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition"
              >
                <div>
                  {logoMap[cert.issuer] && (
                    <img
                      src={logoMap[cert.issuer]}
                      alt={cert.issuer}
                      className="h-8 mb-3"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-primary mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Issued by: {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Date: {cert.date}
                    </p>
                  )}
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm mt-auto text-center"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
