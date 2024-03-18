import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const RecurringInvoice = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [invoiceActive, setInvoiceActive] = useState(false)
  return (
    <View className='mt-4'>
      <View className='flex-row items-center mb-2 gap-2'>
        {/* Dropdown 1 */}
        <View className=' border rounded w-[45%] border-[#C0C0C0] '>
          <Picker
            enabled={invoiceActive}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Repeat every" value="" style={{color:'#C0C0C0',fontSize:15}} />
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="Year" value="Year" />
          </Picker>
        </View>
        {/* Dropdown 2 */}

        <View className=' border rounded w-[45%] border-[#C0C0C0] '>
          <Picker
            enabled={invoiceActive}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Repeat every" value="" style={{color:'#C0C0C0',fontSize:15}} />
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="Year" value="Year" />
          </Picker>
        </View>

      </View>
      <Text className='text-[#2364A4] mb-3 font-semibold text-sm '>The next recurring date is</Text>
      <View className='flex-row gap-7 items-center'>
        <Text className='font-medium text-xs'>Recurring Invoice</Text>
        {/* Toggle slider */}
        <View className=''>
          <View className=' relative rounded-full  transition-all duration-500  w-[55px] h-2 bg-[#C0C0C0]'>
              <TouchableOpacity 
                className={!invoiceActive ?
                  'absolute -bottom-3 transition-all duration-500  -left-2 w-[30px] h-[30px] rounded-full bg-[#E0E0E0]'
                  :
                  'absolute -bottom-3 -right-2 w-[30px]   transition-all duration-500  h-[30px] rounded-full bg-[#2364A4]'
                  
                }
                onPress={()=>setInvoiceActive(!invoiceActive)}
              />
          </View>
        </View>
      </View>
    </View>
  )
}

export default RecurringInvoice