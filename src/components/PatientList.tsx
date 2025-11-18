import React from "react";

interface PatientListProps {
  patient: any;
}

const PatientList: React.FC<PatientListProps> = ({ patient }) => {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Patients</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-xl">
            <img src={patient.profile_picture} alt={patient.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{patient.name}</div>
              <div className="text-xs text-gray-500">{patient.gender}, {patient.age}</div>
            </div>
            <button className="text-gray-400">
              <svg className="w-5 h-5"  viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
