import React from "react";
import  RR from "../assets/RespiratoryRate.svg";
import Temp from "../assets/temperature.svg";
import HR from "../assets/HeartBPM.svg";


interface DiagnosisHistoryProps {
  patient: any;
}

const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ patient }) => {
  const chartData = patient.diagnosis_history?.slice(0, 6).reverse() || [];
  const latestVitals = patient.diagnosis_history?.[0] || {};

  return (
    <div className="lg:col-span-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Diagnosis History</h2>

        {/* Blood Pressure Chart */}
        <div className="bg-purple-50 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Blood Pressure</h3>
            <select className="text-sm border-0 bg-transparent text-gray-600">
              <option>Last 6 months</option>
            </select>
          </div>

          {/* Chart */}
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 600 200">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={40 * i}
                  x2="600"
                  y2={40 * i}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              ))}

              {/* Systolic line */}
              <polyline
                points={chartData
                  .map((d: any, i: number) => {
                    const x = 100 * i + 50;
                    const y = 200 - (d.blood_pressure.systolic.value - 60) * 2;
                    return `${x},${y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="#C084FC"
                strokeWidth="2"
              />

              {/* Diastolic line */}
              <polyline
                points={chartData
                  .map((d: any, i: number) => {
                    const x = 100 * i + 50;
                    const y = 200 - (d.blood_pressure.diastolic.value - 60) * 2;
                    return `${x},${y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2"
              />

              {/* Data points */}
              {chartData.map((d: any, i: number) => {
                const x = 100 * i + 50;
                const ySys = 200 - (d.blood_pressure.systolic.value - 60) * 2;
                const yDia = 200 - (d.blood_pressure.diastolic.value - 60) * 2;
                return (
                  <g key={i}>
                    <circle cx={x} cy={ySys} r="4" fill="#C084FC" />
                    <circle cx={x} cy={yDia} r="4" fill="#60A5FA" />
                  </g>
                );
              })}

              {/* X-axis labels */}
              {chartData.map((d: any, i: number) => (
                <text
                  key={i}
                  x={100 * i + 50}
                  y="195"
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                >
                  {d.month.substring(0, 3)}, {d.year}
                </text>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-100">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-sm font-medium text-gray-700">Systolic</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {latestVitals.blood_pressure?.systolic?.value || 0}
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" />
                </svg>
                {latestVitals.blood_pressure?.systolic?.levels || "Normal"}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-sm font-medium text-gray-700">Diastolic</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {latestVitals.blood_pressure?.diastolic?.value || 0}
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg className="w-3 h-3 mr-1 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" />
                </svg>
                {latestVitals.blood_pressure?.diastolic?.levels || "Normal"}
              </div>
            </div>
          </div>
        </div>

        {/* Vitals Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Respiratory Rate */}
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <img src={RR} alt="Respitory Rate Img" />

            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Respiratory Rate</div>
              <div className="text-2xl font-bold text-gray-900">{latestVitals.respiratory_rate?.value || 0} bpm</div>
              <div className="text-xs text-gray-500 mt-1">{latestVitals.respiratory_rate?.levels || "Normal"}</div>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-red-50 rounded-xl p-4">
            <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <img src={Temp} alt="Temperature Img" />
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Temperature</div>
              <div className="text-2xl font-bold text-gray-900">{latestVitals.temperature?.value || 0}°F</div>
              <div className="text-xs text-gray-500 mt-1">{latestVitals.temperature?.levels || "Normal"}</div>
            </div>
          </div>

          {/* Heart Rate */}
          <div className="bg-pink-50 rounded-xl p-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <img src={HR} alt="Heart Rate Img" />
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Heart Rate</div>
              <div className="text-2xl font-bold text-gray-900">{latestVitals.heart_rate?.value || 0} bpm</div>
              <div className="text-xs text-gray-500 mt-1 flex items-center justify-center">
              {latestVitals.heart_rate?.levels || "Normal"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostic List */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnostic List</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Problem/Diagnosis</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Description</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {patient.diagnostic_list?.map((diag: any, index: number) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-2 text-sm text-gray-900">{diag.name}</td>
                  <td className="py-3 px-2 text-sm text-gray-600">{diag.description}</td>
                  <td className="py-3 px-2 text-sm text-gray-900">{diag.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
