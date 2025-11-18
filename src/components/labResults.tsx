import React from "react";

interface LabResultsProps {
  patient: any;
}

const LabResults: React.FC<LabResultsProps> = ({ patient }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Lab Results</h2>
      <div className="space-y-2">
        {patient.lab_results?.map((lab: string, index: number) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">{lab}</span>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
