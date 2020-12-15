import { render, screen } from '@testing-library/react'
import Component from '.'

test('should have form element', () => render(<Component item={data} />))
test('should save updates local only', () => render(<Component item={data} />))
