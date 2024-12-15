import { useSelector } from "react-redux";

export default function ChartData() {
  const summary = useSelector((state) => state?.summary?.summary?.statistics);
  const agentsActivity = useSelector((state) => state?.agentsPerformance?.performance?.performance);
  // console.log(agentsActivity);
  const barChartData = [];

  if (agentsActivity) {
    const activityKeys = Object.keys(agentsActivity);

    for (const key of activityKeys) {
      const data = agentsActivity[key];

      const formatted = {
        month: key,
        openAds: data.openAds,
        closedAds: data.closedAds,
      };

      barChartData.push(formatted);
      // console.log(formatted)
    }
  }

  const pieChartData = {
    totalHBP: summary?.wallet?.totalHBP,
    unusedHBP: summary?.wallet.unusedHBP,
    usedHBP: summary?.wallet.usedHBP,
  };

  const habeepHouses = [
    {
      id: "Ajh 13",
      houseId: 2,
      tenant: "God'swill Adebayo",
      landlord: "Femi Magodo",
      amount: 250000,
    },
    {
      id: "Cal 13",
      houseId: 19,
      tenant: "Bassey Effiong",
      landlord: "Udoh Sunday",
      amount: 450000,
    },
    {
      id: "Lek",
      houseId: 13,
      tenant: "Albright Obi",
      landlord: "Mark John",
      amount: 2700000,
    },
  ];

  return {
    barChartData,
    pieChartData,
    habeepHouses,
  };
}
