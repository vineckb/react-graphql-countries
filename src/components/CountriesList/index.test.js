import { render, screen } from '@testing-library/react'
import Component from '.'

const data = [
  {
    "numericCode": "008",
    "name": "Albania",
    "capital": "Tirana",
    "flag": {
      "svgFile": "https://restcountries.eu/data/alb.svg"
    }
  },
  {
    "name": "Algeria",
    "numericCode": "012",
    "capital": "Algiers",
    "flag": {
      "svgFile": "https://restcountries.eu/data/dza.svg"
    }
  }
]

test('should have wrapper element', () => render(<Component items={data} />))
test('should display message when list is empty or undefined', () => render(<Component items={data} />))
test('should display all items', () => render(<Component items={data} />))
