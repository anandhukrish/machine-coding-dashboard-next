import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className=" min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-6 flex-1"> {children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
