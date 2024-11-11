import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className=" min-h-screen bg-background flex flex-col pb-1">
        <Navbar />
        <main className="container mx-auto px-3 md:px-0 pt-4  flex-1 pb-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
