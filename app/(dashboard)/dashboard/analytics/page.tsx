import AnalyticDashboard from "@/components/analytics/AnalyticDashboard";
import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      </div>
      <AnalyticDashboard />
    </div>
  );
};

export default AnalyticsPage;
