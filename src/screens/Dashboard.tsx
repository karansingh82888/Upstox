import React, { useState } from 'react'
import { useEffect } from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native'
import { LoaderView } from '../components/LoaderView'
import { Strings } from '../resources/Strings'
import { getDashboardData } from '../service/DashboardService'
import { holdingsType, portfolioType } from '../types/DashboardTypes'
import PortfolioView from '../components/PortfolioView'
import { Header } from '../components/Header'
import { Colors } from '../resources/Colors'
import HoldingsList from '../components/HoldingsList'

const Dashboard = () => {

    const [data, setData] = useState<{ userHolding: holdingsType[], portfolioData: portfolioType }>({userHolding:[],portfolioData:null})
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getDashboardData()
            .then((res) => { setData(res); setLoader(false) })
            .catch(err => {
                Alert.alert(Strings.DASHBOARD_FAIL);
                setLoader(false);
            })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bg_color }}>
            <Header title={Strings.HOLDINGS} />
            {loader ? <LoaderView loader={loader} /> : <>
                <HoldingsList data={data.userHolding} />
                <PortfolioView data={data.portfolioData} />
            </>}
        </SafeAreaView>
    )

}
export default Dashboard

