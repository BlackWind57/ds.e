import React from 'react'
import ReactDOM from 'react-dom'
import { Color, Text, Margin, Select } from '@ds.e/react'

import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'
import '@ds.e/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

ReactDOM.render (
    <>
        <Color hexCode='#000' width='xl' height='xl' />
        <Text size='lg'>Testing text</Text>
        <Margin space='none'>
            <Text size='xs'>
                this is some text
            </Text>
        </Margin>
        <div style={{ padding: '40px '}}>
            <Select options={options} renderOption={({ option, getOptionRecommendedProps }) => <p {...getOptionRecommendedProps()}>{option.label}</p>} />
        </div>                                                                
    </>
    ,
    document.querySelector('#root')
)
