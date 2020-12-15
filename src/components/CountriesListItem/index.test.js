import { render, screen } from '@testing-library/react'
import Component from '.'

const data = {
  "numericCode": "008",
  "name": "Albania",
  "capital": "Tirana",
  "flag": {
    "svgFile": "https://restcountries.eu/data/alb.svg"
  }
}

test('should have wrapper element', () => render(<Component item={data} />))
test('should have link to country details page', () => render(<Component item={data} />))
test('should have name', () => render(<Component item={data} />))
test('should have flag', () => render(<Component item={data} />))
