import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Octicons, AntDesign, Entypo  } from '@expo/vector-icons';
import React, { useState } from 'react'

const Footer = ({billTo}) => {
  const [loading, setLoading] = useState(false)
  const recordPayement= ()=>{
    setLoading(true)
    setTimeout(()=>{
      Alert.alert('Done','Payement has been recorded successfully',[
        {text:'Okay',onPress:()=>setLoading(false)}
      ])
    },2000)
  }
  return (
    <View className='mb-3'>
      <View className='flex-row gap-1 mb-3'>
        <Text className='font-medium'>Payement Details </Text>
        <Text className=''>{billTo.acctNo} </Text>
        <Text className=''>{billTo.name}; </Text>
        <Text className=''>{billTo.bankName} </Text>
      </View>
      <View className='flex-row mb-4 border py-2 px-q space-x-2 border-[#E7E7E7]  justify-center bg-[#F7F7F7] '>
        <TouchableOpacity 
          className='flex   flex-row gap-1 items-center'
          onPress={()=>Alert.alert('Coming soon','Coming soon.................')}
        >
          <Text className='text-[#044E97]'>Preview & Download </Text>
          <Octicons name="download" size={18} color="#044E97" />
        </TouchableOpacity>
        {/* Line */}
        <View className='h-full  border-[0.2px] border-[#DEE1E3]'/>
        <TouchableOpacity 
          className='flex flex-row gap-1   items-center'
          onPress={()=>Alert.alert('Upgrade to premium','Upgrade to premium')}

        >
          <Text className='text-[#044E97]'>Print</Text>
          <AntDesign name="printer" size={18} color="#044E97" />
        </TouchableOpacity>
         {/* Line */}
        <View className='h-full  border-[0.2px] border-[#DEE1E3]'/>
        <TouchableOpacity  
          className=' flex flex-row gap-1  items-center'
          onPress={()=>Alert.alert('COMING SOON','Coming soon......')}
          
        >
          <Text className='text-[#044E97]'>Send reminders</Text>
          <Entypo name="calendar" size={18} color="#044E97" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={recordPayement}
        className='w-full bg-[#044E97] rounded-md text-center py-3'
      >
        {
          loading ? <Text className='text-white text-center font-medium text-base '>Loading .........</Text> :<Text className='text-white text-center '>Record Payement</Text>
        }
      </TouchableOpacity>
    </View>
  )
}

export default Footer