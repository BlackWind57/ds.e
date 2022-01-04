import React from 'react'

import { Spacing } from '@ds.e/foundation'

interface MarginProps {
    space?: keyof typeof Spacing,
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom: boolean,
}

const Margin: React.FC<MarginProps> = ({ space = 'md', children, left, right, top, bottom }) => {
    let className = `dse-margin-${space}`

    if ( left ) {
        className = `dse-margin-left-${space}`
    }
    else if (right) {
        className = `dse-margin-right-${space}`
    }
    else if (top) {
        className = `dse-margin-top-${space}`
    }
    else if (bottom) {
        className = `dse-margin-bottom-${space}`    
    }

    return <div className={className}>
        {children}
    </div>
}

export default Margin