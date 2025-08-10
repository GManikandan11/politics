import { FC } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import './landingPage.css';

interface Point {
  pointTitle: string;
  pointText: string;
}

interface Scenario {
  name: string;
  points: Point[];
}

interface ProblemSectionProps {
  title: string;
  intro: string;
  scenarioOne: Scenario;
  scenarioTwo: Scenario;
}

const ProblemSection: FC<ProblemSectionProps> = ({
  title,
  intro,
  scenarioOne,
  scenarioTwo,
}) => {
  return (
    <section className="bg-secondaryDark text-white py-24 px-4 md:px-8" style={{ margin: '0px' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-grotesque leading-tight">{title}</h2>
        <p className="mt-4 text-lg text-gray-300 font-inter">{intro}</p>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {[scenarioOne, scenarioTwo].map((scenario, index) => (
          <div
            key={index}
            className={`${index === 0 ? 'bg-secondaryLight' : 'bg-primaryLight text-black'} text-black rounded-xl shadow-lg p-8 flex-1`}
          >
            <h3 className="text-xl font-semibold mb-6 font-grotesque text-left">{scenario.name}</h3>
            <ul className="space-y-6">
              {scenario.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 leading-tight">
                  <span className="mt-[2px] flex-shrink-0">
                    <FaExclamationCircle size={24} className="text-purple-600" />
                  </span>
                  <div>
                    <p className="font-semibold text-base font-grotesque text-left">{point.pointTitle}</p>
                    <p className="text-base font-inter text-gray-800 text-left">{point.pointText}</p>
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