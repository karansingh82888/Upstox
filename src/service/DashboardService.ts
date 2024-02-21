import { holdingsType, portfolioType } from "../types/DashboardTypes";
import { calculateTodayPL, calculateTotalCurr, calculateTotalInv, calculateTotalPL } from "../util/DashboardHelper";
import { Endpoints } from "./Endpoints";

export const getDashboardData = () => {
  return new Promise<{userHolding:holdingsType[],portfolioData:portfolioType}>((resolve, reject) => {
    fetch(Endpoints.Dashboard)
      .then(response => response.json())
      .then(json => {
        let data={
          "currentValue": calculateTotalCurr(json.userHolding),
          "totalInvestments": calculateTotalInv(json.userHolding),
          "todayPL": calculateTodayPL(json.userHolding),
          "totalPL": calculateTotalPL(json.userHolding)
        }
        resolve({userHolding:json.userHolding,portfolioData:data})
      })
      .catch(error => {
        reject(error);
      });
  })
}