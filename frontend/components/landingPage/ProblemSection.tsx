import { FC } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import './landingPage.css';

interface Point {
  pointTitle: any; // Changed to any to support multilingual objects
  pointText: any;  // Changed to any to support multilingual objects
}

interface Scenario {
  name: any;       // Changed to any to support multilingual objects
  points: Point[];
}

interface ProblemSectionProps {
  title: any;      // Changed to any to support multilingual objects
  intro: any;      // Changed to any to support multilingual objects
  scenarioOne: Scenario;
  scenarioTwo: Scenario;
  currentLanguage: string; // Added currentLanguage prop
}

// Helper function to extract text from multilingual objects
function asText(value: any, lang: string, fallback = ''): string {
  if (!value) return fallback;
  
  if (typeof value === 'object') {
    // Handle multilingual object {en: 'text', ta: 'text'}
    return value[lang] || value.en || fallback;
  }
  
  if (typeof value === 'string') return value;
  
  return fallback;
}

const ProblemSection: FC<ProblemSectionProps> = ({
  title,
  intro,
  scenarioOne,
  scenarioTwo,
  currentLanguage,
}) => {
  return (
    <section className="bg-secondaryDark text-white py-24 px-4 md:px-8" style={{ margin: '0px' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-grotesque leading-tight">
          {asText(title, currentLanguage)}
        </h2>
        <p className="mt-4 text-lg text-gray-300 font-inter">
          {asText(intro, currentLanguage)}
        </p>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {[scenarioOne, scenarioTwo].map((scenario, index) => (
          <div
            key={index}
            className={`${index === 0 ? 'bg-secondaryLight' : 'bg-primaryLight text-black'} text-black rounded-xl shadow-lg p-8 flex-1`}
          >
            <h3 className="text-xl font-semibold mb-6 font-grotesque text-left">
              {asText(scenario.name, currentLanguage)}
            </h3>
            <ul className="space-y-6">
              {scenario.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 leading-tight">
                  <span className="mt-[2px] flex-shrink-0">
                    <FaExclamationCircle size={24} className="text-purple-600" />
                  </span>
                  <div>
                    <p className="font-semibold text-base font-grotesque text-left">
                      {asText(point.pointTitle, currentLanguage)}
                    </p>
                    <p className="text-base font-inter text-gray-800 text-left">
                      {asText(point.pointText, currentLanguage)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;