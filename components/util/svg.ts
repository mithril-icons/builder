export interface SVGAttributes {
  width?: number
  height?: number
  viewBox?: string
  color?: string
  fill?: string
  stroke?: string
  'stroke-width'?: number
  'stroke-linecap'?: 'butt' | 'round' | 'square'
  'stroke-linejoin'?: 'miter'|'round'|'bevel'|'miter-clip'|'arcs'
}

export const defaultAttributes: SVGAttributes & {xmlns: string} = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}
