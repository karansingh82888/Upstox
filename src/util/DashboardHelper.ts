import { holdingsType } from "../types/DashboardTypes";

export const calculatePL = (data: holdingsType) => {
    return ((data.ltp * data.quantity) - (data.avgPrice * data.quantity)).toFixed(2)
}

export const calculateTotalCurr = (data: holdingsType[]) => {
    return (data.map(i => (i.ltp * i.quantity)).reduce((avg1, avg2) => avg1 + avg2)).toFixed(2)
}

export const calculateTotalInv = (data: holdingsType[]) => {
    return (data.map(i => (i.avgPrice * i.quantity)).reduce((avg1, avg2) => avg1 + avg2)).toFixed(2)
}

export const calculateTodayPL = (data: holdingsType[]) => {
    return (data.map(i => ((i.close-i.ltp) * i.quantity)).reduce((avg1, avg2) => avg1 + avg2)).toFixed(2)
}

export const calculateTotalPL = (data: holdingsType[]) => {
return ((+calculateTotalCurr(data))-(+calculateTotalInv(data))).toFixed(2)
}