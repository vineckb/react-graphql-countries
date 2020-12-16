import { useEffect, useState } from 'react'
import * as Styles from './styles'
import CountriesListItem from '../CountriesListItem'

export default function CountriesList({ items, onLoadMore }) {
  const [isBottom, setIsBottom] = useState(false)

  function handleScroll(e) {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight

    if (scrollTop + window.innerHeight === scrollHeight) {
      setIsBottom(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isBottom) {
      onLoadMore()
      setIsBottom()
    }
  }, [isBottom, setIsBottom, onLoadMore])

  return (
    <Styles.Wrapper>
      {items.map(item => <CountriesListItem item={item} key={item.numericCode} />)}
    </Styles.Wrapper>
  )
}
