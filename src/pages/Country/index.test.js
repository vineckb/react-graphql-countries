import { render, screen } from '@testing-library/react'
import Component from '.'

test('should have wrapper', () => render(<Component />))
test('should load data from graphql according to route.params.numericCode', () => render(<Component />))
test('should have CountryDetails component', () => render(<Component />))
test('should have NearestCountries component', () => render(<Component />))
