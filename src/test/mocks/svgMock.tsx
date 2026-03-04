import { forwardRef } from 'react'

const SvgMock = forwardRef<SVGSVGElement>((props, ref) => (
    <svg ref={ref} {...props}>
        <title>Mock SVG</title>
    </svg>
))

SvgMock.displayName = 'SvgMock'

export default SvgMock
