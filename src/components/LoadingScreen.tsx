import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">SparkServes</h1>
          <p className="text-muted-foreground">Cloud-Based POS System</p>
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-foreground">Loading{dots}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;