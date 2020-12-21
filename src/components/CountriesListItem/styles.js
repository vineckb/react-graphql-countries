import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 30px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media (min-width: 600px) {
    flex-basis: 50%;
  }

  @media (min-width: 800px) {
    flex-basis: 25%;
  }
`

export const Capital = styled.p``

export const Title = styled.h3``

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;

  @media (min-width: 600px) {
    height: 300px;
  }

  @media (min-width: 800px) {
    height: 200px;
  }
`

export const Image = styled.img`
  min-width: 100%;
  height: 100%;
  max-width: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
