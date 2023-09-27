import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
  const categories = useLoaderData();

  const storedData = JSON.parse(localStorage.getItem("card-list"))?.length;

  const condition = () => {
    return storedData ? storedData : 0;
  };

  const data = [
    {
      name: "Total Donation",
      donation: categories?.length,
    },
    {
      name: "Your Donation",
      donation: condition(),
    },
  ];

  return (
    <div className="flex justify-center  items-center w-full h-full">
      <PieChart height={400} width={400}>
        <Pie
          data={data}
          dataKey="donation"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={(data) => (data.percent * 100).toFixed(2) + "%"}
        >
          <Cell key="donation" fill="#FF444A" />
          <Cell key="donation" fill="#00C49F" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
