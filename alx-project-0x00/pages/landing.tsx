import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="flex flex-col items-center gap-4 p-10">
        <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

        <div className="space-y-2 flex flex-row gap-4 flex-wrap justify-center items-center">
          <Button title="Small Rounded-sm" styles="text-sm px-3 py-1 rounded-sm" />
          <Button title="Medium Rounded-md" styles="text-base px-4 py-2 rounded-md" />
          <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full" />
          <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm" />
          <Button title="Small Rounded-full" styles="text-sm px-3 py-1 rounded-full" />
          <Button title="Medium Rounded-lg" styles="text-base px-4 py-2 rounded-lg" />

        </div>
      </div>
    </div>
  );
};

export default Landing;
