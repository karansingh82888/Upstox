export type holdingsType =
    {
        "symbol": string,
        "quantity": number,
        "ltp": number,
        "avgPrice": number,
        "close": number
    }

export type portfolioType =
    {
        "currentValue": string,
        "totalInvestments": string,
        "todayPL": string,
        "totalPL": string
    } | null