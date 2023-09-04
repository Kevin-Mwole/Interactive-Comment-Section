import '@testing-library/jest-dom/extend-expect'
import '@vanilla-extract/css/disableRuntimeStyles'

import * as matchers from 'jest-extended'

import { toHaveNoViolations } from 'jest-axe'

expect.extend(matchers)
expect.extend(toHaveNoViolations)

beforeEach(() => {
  jest.doMock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, ...props }) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} {...props} />
    },
  }))
})
