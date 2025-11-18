import React from "react";
import TestLogo from "../assets/TestLogo.svg";
import Doc from "../assets/doc.png";
import Overview from "../assets/Overview.svg";
import Patients from "../assets/Patients.svg";
import Schedule from "../assets/Schedule.svg";
import Message from "../assets/Message.svg";
import Transaction from "../assets/Teransaction.svg"


const Header: React.FC = () => {
  return (
    <header className="bg-[#F7F8FA] border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 py-3">
        <div className="flex items-center justify-between bg-white rounded-full shadow-sm px-6 py-3">
          
          {/* LEFT LOGO */}
          <div className="flex items-center space-x-3">
            <img src={TestLogo} alt="TechCare Logo" className="w-[211px] h-[48px]" />
          </div>

          {/* NAVIGATION */}
          <nav className="flex items-center space-x-6">
            <a className="flex items-center space-x-2 ">
              <img src={Overview} alt="Overview" className="w-6 h-6" />
              <i className="ri-home-3-line text-lg"></i>
              <span>Overview</span>
            </a>
            <a className="flex items-center space-x-2 bg-[#6DEFC1] text-gray-900 px-4 py-2 rounded-full font-medium">
              <img src={Patients} alt="PatientsDr. José Simmons" className="w-6 h-6" />
              <i className="ri-team-line text-lg"></i>
              <span>Patients</span>
            </a>
            <a className="flex items-center space-x-2 ">
              <img src={Schedule} alt="Schedule. José Simmons" className="w-6 h-6" />
              <i className="ri-calendar-2-line text-lg"></i>
              <span>Schedule</span>
            </a>
            <a className="flex items-center space-x-2 ">
              <img src={Message} alt="Message" className="w-6 h-6" />
              <i className="ri-message-2-line text-lg"></i>
              <span>Message</span>
            </a>
            <a className="flex items-center space-x-2 ">
              <img src={Transaction} alt="Transaction" className="w-6 h-6" />
              <i className="ri-bank-card-line text-lg"></i>
              <span>Transactions</span>
            </a>
          </nav>

          {/* RIGHT USER */}
          <div className="flex items-center space-x-3">
            <img src={Doc} alt="Dr. José Simmons" className="w-10 h-10 rounded-full" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-gray-900">Dr. Jose Simmons</div>
              <div className="text-xs text-gray-500">General Practitioner</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
