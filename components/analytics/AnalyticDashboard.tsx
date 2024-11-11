"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import BarChart from "./bar-chart";
import LineChart from "./line-chart";
import { UserData } from "@/lib/types";
import { Alert, AlertDescription } from "../ui/alert";
import { UserTable } from "./user-table";

const AnalyticDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const mockUsers: UserData[] = Array.from({ length: 10 }, (_, i) => ({
          id: `user-${i + 1}`,
          name: `User ${i + 1}`,
          email: `user${i + 1}@example.com`,
          status: i % 3 === 0 ? "inactive" : "active",
          lastLogin: new Date(Date.now() - i * 86400000).toISOString(),
          role: i % 2 === 0 ? "User" : "Admin",
        }));

        setUserData(mockUsers);
      } catch {
        const errorMessage =
          "Failed to load analytics data. Please try again later.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <Card className="p-5">
          <CardTitle>User Activity</CardTitle>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>
        <Card className="p-5">
          <CardTitle>Sales Performance</CardTitle>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
        </CardHeader>
        <CardContent>
          <UserTable isLoading={isLoading} data={userData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticDashboard;
