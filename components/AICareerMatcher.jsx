import { educationLevels } from '../data/education';
import { interestCategories } from '../data/interests';
import { skillsList } from '../data/skills';
import { personalityQuestions } from '../data/personality';
import { getCareerMatches } from '../data/careerMatches';
import React, { useState } from "react";
import '../styles/career.css';

const AICareerMatcher = () => {
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    educationLevel: "",
    stream: "",
    interests: [],
    skills: [],
    personality: {},
    workStyle: ""
  });

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleEducationSelect = (level) => {
    setUserData({ ...userData, educationLevel: level });
    setStep(2);
  };

  const handleInterestToggle = (interest) => {
    const interests = userData.interests.includes(interest)
      ? userData.interests.filter(i => i !== interest)
      : [...userData.interests, interest];
    setUserData({ ...userData, interests });
  };

  const handleSkillToggle = (skill) => {
    const skills = userData.skills.includes(skill)
      ? userData.skills.filter(s => s !== skill)
      : [...userData.skills, skill];
    setUserData({ ...userData, skills });
  };

  const handlePersonalityAnswer = (questionId, answer) => {
    setUserData({
      ...userData,
      personality: { ...userData.personality, [questionId]: answer }
    });
  };

  const handleWorkStyleSelect = (style) => {
    setUserData({ ...userData, workStyle: style });
  };

  const handleFindMatches = () => {
    setLoading(true);
    setTimeout(() => {
      const results = getCareerMatches(userData);
      setMatches(results);
      setLoading(false);
      setStep(5);
    }, 1500);
  };

  const getCurrentInterests = () => {
    return interestCategories[userData.educationLevel] || interestCategories['10th_completed'] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Career Matcher
          </h1>
          <p className="text-gray-300">Discover your perfect career path</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="progress-bar h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Step {step} of {totalSteps}</p>
        </div>

        {/* Steps */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Select Your Education Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {educationLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => handleEducationSelect(level.id)}
                  className={`p-6 rounded-lg border-2 transition-all hover:scale-105 ${
                    userData.educationLevel === level.id
                      ? 'card-selected border-purple-400'
                      : 'card-default border-gray-600 hover:border-purple-500'
                  }`}
                >
                  <div className="text-4xl mb-2">{level.icon}</div>
                  <div className="font-semibold">{level.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Select Your Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCurrentInterests().map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                    userData.interests.includes(interest.id)
                      ? 'card-selected border-purple-400'
                      : 'card-default border-gray-600 hover:border-purple-500'
                  }`}
                >
                  <div className="text-2xl mb-2">{interest.icon}</div>
                  <div className="font-semibold">{interest.label}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={userData.interests.length === 0}
                className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Select Your Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsList.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => handleSkillToggle(skill.id)}
                  className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                    userData.skills.includes(skill.id)
                      ? 'card-selected border-purple-400'
                      : 'card-default border-gray-600 hover:border-purple-500'
                  }`}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="font-semibold">{skill.label}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={userData.skills.length === 0}
                className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Personality Assessment</h2>
            {personalityQuestions.map((question) => (
              <div key={question.id} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {question.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handlePersonalityAnswer(question.id, option.id)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        userData.personality[question.id] === option.id
                          ? 'card-selected border-purple-400'
                          : 'card-default border-gray-600 hover:border-purple-500'
                      }`}
                    >
                      <div className="text-2xl mb-2">{option.icon}</div>
                      <div className="font-semibold">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
              >
                Back
              </button>
              <button
                onClick={handleFindMatches}
                disabled={Object.keys(userData.personality).length < personalityQuestions.length}
                className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Find Matches
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Your Career Matches</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                <p className="mt-4 text-gray-300">Finding your perfect matches...</p>
              </div>
            ) : matches.length > 0 ? (
              <div className="space-y-6">
                {matches.map((match, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-purple-400">{match.career}</h3>
                      <span className="bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                        {match.match}% Match
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{match.path}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-semibold">{match.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Starting Salary</p>
                        <p className="font-semibold">{match.salary}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Growth</p>
                        <p className="font-semibold text-green-400">{match.growth}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Exams</p>
                        <p className="font-semibold">{match.exams.join(', ')}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Details:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {match.details.map((detail, i) => (
                          <li key={i} className="text-gray-300">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-300">No matches found. Please try different selections.</p>
              </div>
            )}
            <button
              onClick={() => {
                setStep(1);
                setUserData({
                  educationLevel: "",
                  stream: "",
                  interests: [],
                  skills: [],
                  personality: {},
                  workStyle: ""
                });
                setMatches([]);
              }}
              className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AICareerMatcher;