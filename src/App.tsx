import React, { useEffect, useState } from "react";
import { fetchJessicaTaylor } from "./services/api";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import PatientInfo from "./components/PatientInfo";
import DiagnosisHistory from "./components/DiagnosisHistory";
import LabResults from "./components/labResults";

const App: React.FC = () => {
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPatient = async () => {
      try {
        const data = await fetchJessicaTaylor();
        setPatient(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getPatient();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  if (!patient) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Patient List */}
          <PatientList patient={patient} />

          {/* Diagnosis History */}
          <DiagnosisHistory patient={patient} />

          {/* Patient Info + Lab Results stacked vertically */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <PatientInfo patient={patient} />
            <LabResults patient={patient} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
