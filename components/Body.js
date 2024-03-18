import { View, Text } from 'react-native'
import React from 'react'
import { formatNumber } from '../utils/numberFormatter'

const Body = ({billFrom,billTo,items,name,discount,vat}) => {
  let total =0

  for(i=0;i < items.length; i++) {
    total+= items[i].amount
  }
  console.log(formatNumber(100007800))
  return (
    <View className='mt-6'>
      {/* Bill from */}
      <View className='flex flex-row mb-3 justify-between'>
        <View className='gap-1 text-sm'>
          <Text className='max-w-[200px]'>{billFrom.name}</Text>
          <Text className='max-w-[150px]'>{billFrom.address}</Text>
          <Text>{billFrom.number}</Text>
        </View>
        <View className='mb-2'>
          <Text className=' text-right font-bold text-xl'>INVOICE</Text>
          <Text className=' text-right font-medium text-lg mb-1'>{name}</Text>
          <Text className='text-right text-base'>Balance due</Text>
          <Text className='text-right font-medium text-base'>NGN {formatNumber(billFrom.balanceDue)}</Text>
        </View>
      </View>
      {/* Horizontal line */}
      <View className='w-full mb-2 border-[0.3px] border-[#C0C0C0]'  />
      {/* Bill to  */}
      <View className='flex mb-4 justify-between flex-row'>
        <View className=''>
          <Text className='mb-2'>Bill To</Text>
          <Text className='font-medium text-base max-w-[200px]'>{billTo.name}</Text>
          <Text className='text-xs max-w-[150px] leading-5'>{billTo.address}</Text>
          <Text className='text-xs max-w-[100px] leading-5'>{billTo.state}</Text>

        </View>
        <View className=''>
          <Text className='mb-2 text-right'>Invoice Date</Text>
          <Text className='mb-4 font-medium text-right'>{billTo.invoiceDate}</Text>
          <Text className='mb-2 text-right'>Due Date</Text>
          <Text className=' font-medium text-right'>{billTo.dueDate}</Text>
        </View>
      </View>
       {/* Horizontal line */}
      <View className='w-full mb-2 border-[0.3px] border-[#C0C0C0]'  />
      {/* Items */}
      <View className='mb-2'>
        {/* Header*/}
        <View className='flex-row justify-between mb-3 items-center'>
          <Text className='font-semibold text-sm w-[50%]'>Item</Text>
          <Text className='font-semibold text-right text-sm w-[15%]'>Qty</Text>
          <Text className='font-semibold text-right text-sm w-[35%]'>Amount</Text>
        </View>
        {/* item */}
        {
          items.map((item)=>(
          <View key={item.id} className='flex-row mb-2 justify-between items-center'>
            <Text className='text-sm w-[50%]'>{item.name}</Text>
            <Text className='text-sm w-[15%] text-right'>{item.qty}</Text>
            <Text className='text-sm w-[35%] text-right'>N{formatNumber(item.amount)}.00</Text>
          </View>

          ))
        }
      </View>
       {/* Horizontal line */}
      <View className='w-full mb-2 border-[0.3px] border-[#C0C0C0]'  />
      {/* Subtotal,vat,discount */}
      <View className='mb-2'>
          <View className=' self-end mb-1 flex-row w-[50%] justify-between '>
            <Text className='text-xs font-medium'>Sub-total</Text>
            <Text className='text-xs font-medium'>{formatNumber(total)}.00</Text>
          </View>
          <View className=' self-end mb-1 flex-row w-[50%] justify-between '>
            <Text className='text-xs font-medium'>Discount</Text>
            <Text className='text-xs font-medium'>{formatNumber(discount)}.00</Text>
          </View>
          <View className=' self-end mb-1 flex-row w-[50%] justify-between '>
            <Text className='text-xs font-medium'>VAT</Text>
            <Text className='text-xs font-medium'>{formatNumber(vat)}.00</Text>
          </View>
      </View>
       {/* Horizontal line */}
      <View className='w-full mb-2 border-[0.3px] border-[#C0C0C0]'  />
      {/* Total,balcnce due */}
      <View className='mb-2'>
          <View className=' self-end mb-1 flex-row w-[50%] justify-between '>
            <Text className='text-xs text-[#044E97] font-medium'>Total</Text>
            <Text className='text-xs text-[#044E97] font-medium'>{formatNumber(total+discount+vat)}.00</Text>
          </View>
          <View className=' self-end mb-1 flex-row w-[50%] justify-between '>
            <Text className='text-xs font-medium'>Balance Due</Text>
            <Text className='text-xs font-medium'>{formatNumber(total+discount+vat)}.00</Text>
          </View>
      </View>

    </View>
  )
}

export default Body