import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6,FontAwesome5 } from '@expo/vector-icons';
const Hero = ({status,date,rate}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <View className='mt-7'>
      {/* Clock */}
      <TouchableOpacity className='self-end mb-3 relative'>
        <FontAwesome6 name="clock" size={18} color="black" onPress={()=>setShowInfo(!showInfo)} />
        {
          showInfo &&
          <View className='absolute z-50 bg-white border border-[#D1D1D1] top-7 py-3 rounded '>
            <View className='px-2'>
              <Text className='text-[#A6A6A6] mb-1'>May 2020</Text>
              <Text className='text-[#2364A4] mb-3'>John Joseph</Text>
            </View>
            <View className='border-[0.2px] mb-3 border-[#A6A6A6]'/>
            <View className='px-2'>
              <Text className='text-[#A6A6A6] mb-1'>May 2020</Text>
              <Text className='text-[#2364A4] mb-4'>John Joseph</Text>
              <Text className='text-[#2364A4] '>John Joseph</Text>
            </View>
          </View>
        }
      </TouchableOpacity> 
      <View className='flex-row mb-5 justify-between items-center'>
        <View className='bg-[#B5CDB4] px-2 py-1 text-center rounded'>
          <Text className='text-[#088306]'>{status}</Text>
        </View>
        <Text className='text-[#404040]'>
          Created: 
          <Text className='text-[#A27FDB] font-semibold '> {date}</Text>
        </Text>
      </View>
      {/* Due */}
      <View className=''>
        <Text className='text-[#808080]'>
          You're due
          <Text className='text-black font-bold'> N150,000.000</Text>
        </Text>
        {/* Payement Link */}
        <TouchableOpacity className=' gap-2 flex-row self-end items-center'>
          <Text className='text-[#14599D] text-sm'>Copy Payment Link</Text>
          <FontAwesome5 name="link" size={15} color="#14599D" />
        </TouchableOpacity>
        {/* Exchange rate */}
        <Text className='italic '>Exchange rate: N{rate} per $ </Text>
      </View>
    </View>
  )
}

export default Hero