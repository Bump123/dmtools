"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import Table from "@/components/Table";
import Nav from "@/components/Nav";


const Page = () => {
  const [data, setData] = useState(null);

    //GET
  const fetchData = () => {
    fetch("https://localhost:7128/api/Units")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  //POST
  const handleFormSubmit = (formData: any) => {
    fetch("https://localhost:7128/api/Units", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create unit");
        }
        console.log("Unit created successfully");
        fetchData();
      })
      .catch((error) => {
        console.error("Error creating unit:", error);
      });
  };
  
//PAGE ELEMENTS
return (
    <div className="flex flex-col justify-normal items-center h-screen bg-base-200">
      <div className="mt-2">
        <Card onSubmit={handleFormSubmit} />
      </div>
      <button className="btn bg-primary mt-2" onClick={fetchData}>
        Get Units
      </button>

      <div className="flex flex-col justify-center items-center mt-2">
        {data && <Table data={data} />}
      </div>
      <div className="flex flex-row mr-auto">
        <Nav />
      </div>
    </div>
  );
};

export default Page;
