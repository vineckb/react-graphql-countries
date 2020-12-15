import { render } from '@testing-library/react'
import Component from '.'

test('should have input element', () => render(<Component />))
test('should mutate state.filterString on input keyup', () => render(<Component />))
