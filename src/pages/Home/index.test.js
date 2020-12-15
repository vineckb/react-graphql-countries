import { render, screen } from '@testing-library/react'
import Component from '.'

test('should have wrapper', () => render(<Component />))
test('should infinite load data from graphql according to state.filters', () => render(<Component />))
test('should have CountriesList component', () => render(<Component />))
