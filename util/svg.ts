import { Attributes } from 'mithril'

/**
 * Subset of attributes that can be added to SVG node
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
export interface SVGSpecificAttributes {
  /**
   * The width attribute defines the horizontal length of an element in the user coordinate system.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
   */
  width?: number | string
  /**
   * The height attribute defines the vertical length of an element in the user coordinate system.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
   */
  height?: number | string
  /**
   * The opacity attribute specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.
   * The uniform opacity setting to be applied across an entire object, as a <number>. Any values outside the range 0.0 (fully transparent) to 1.0 (fully opaque) will be clamped to this range.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity
   */
  opacity?: number | string
  /**
   * The cursor attribute specifies the mouse cursor displayed when the mouse pointer is over an element.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor
   */
  cursor?: 'auto' | 'crosshair' | 'default' | 'pointer' | 'move' | 'e-resize' | 'ne-resize' | 'nw-resize' | 'n-resize' | 'se-resize' | 'sw-resize' | 's-resize' | 'w-resize' | 'text' | 'wait' | 'help' | 'inherit'
  /**
   * The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
   */
  stroke?: string
  /**
   * It's a list of comma and/or white space separated <length>s and <percentage>s that specify the lengths of alternating dashes and gaps. If an odd number of values is provided, then the list of values is repeated to yield an even number of values. Thus, 5,3,2 is equivalent to 5,3,2,5,3,2.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
   */
  'stroke-dasharray'?: string
  /**
   * The offset is usually expressed in user units resolved against the pathLength but if a <percentage> is used, the value is resolved as a percentage of the current viewport.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset
   */
  'stroke-dashoffset'?: number | string
  /**
   * The stroke-linecap attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
   */
  'stroke-linecap'?: 'butt' | 'round' | 'square'
  /**
   * The stroke-linejoin attribute is a presentation attribute defining the shape to be used at the corners of paths when they are stroked.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
   */
  'stroke-linejoin'?: 'miter'|'round'|'bevel'|'miter-clip'|'arcs'
  /**
   * The stroke-miterlimit attribute is a presentation attribute defining a limit on the ratio of the miter length to the stroke-width used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.
   * The value of stroke-miterlimit must be greater than or equal to 1.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
   */
  'stroke-miterlimit'?: number | string
  /**
   * The stroke-opacity attribute is a presentation attribute defining the opacity of the paint server (color, gradient, pattern, etc) applied to the stroke of a shape.
   * The value of stroke-opacity must be between 0 and 1 or can be expressed in percentages.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity
   */
  'stroke-opacity'?: number | string
  /**
   * The stroke-width attribute is a presentation attribute defining the width of the stroke to be applied to the shape.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
   */
  'stroke-width'?: number | string
  /**
   * The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
   */
  fill?: string
  /**
   * The fill-opacity attribute is a presentation attribute defining the opacity of the paint server (color, gradient, pattern, etc) applied to a shape.
   * The value of fill-opacity must be between 0 and 1 or can be expressed in percentages.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity
   */
  'fill-opacity'?: number | string
  /**
   * The color attribute is used to provide a potential indirect value, currentColor, for the fill, stroke, stop-color, flood-color, and lighting-color attributes.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
   */
  color?: string
  /**
   * The transform attribute defines a list of transform definitions that are applied to an element and the element's children.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
   */
  transform?: string
  /**
   * The viewBox attribute defines the position and dimension, in user space, of an SVG viewport.
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
   */
  viewBox?: string
}

export type SVGAttributes = SVGSpecificAttributes & Attributes
