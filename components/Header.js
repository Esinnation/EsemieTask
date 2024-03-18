import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Feather,AntDesign} from '@expo/vector-icons'
const Header = ({name}) => {
  return (
    <View className='justify-between  items-center flex-row'>
      <AntDesign  name='left' size={24} color={'black'} />
      <Text className='text-[#5285B7] font-medium text-lg'>{name}</Text>
      <TouchableOpacity>
        <Text className='text-[#5285B7] font-medium text-sm'>Refund</Text>
      </TouchableOpacity>

    </View>

  )
}

export default Header