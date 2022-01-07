import React from 'react'

import Color from './Color'

import { text, select } from '@storybook/addon-knobs'

import { Spacing } from '@blackwind57/foundation'

import '@blackwind57/scss/lib/Utilities.css'

export default {
    title: 'Atoms/Color'
}

export const Common = () => <Color hexCode={ text ('HexCode', 'pink')} />

export const CustomDimensions = () => {
    return <Color 
        hexCode={ text('HexCode', 'pink')} 
        width={select('Width', Object.values(Spacing), 'xxl')} 
        height={select('Height', Object.values(Spacing), 'xxl' )} />
}