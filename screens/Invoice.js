import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Data } from '../utils/data'
import Hero from '../components/Hero'
import RecurringInvoice from '../components/RecurringInvoice'
import Body from '../components/Body'
import Footer from '../components/Footer'
const Invoice = () => {
  return (
    <View className='px-5 flex-1  '>
      <Header name={Data.invoiceName}/>
      <ScrollView showsVerticalScrollIndicator={false} className='flex-1 mb-5'>
        <Hero status={Data.status} date={Data.createdAt} rate={Data.exchangeRate} />
        <RecurringInvoice />
        <Body name={Data.invoiceName} discount={Data.discount} vat={Data.vat}  billFrom={Data.billFrom} billTo={Data.billTo} items={Data.items}/>
        <Footer billTo={Data.billTo}/>
      </ScrollView>
    </View>
  )
}

export default Invoice