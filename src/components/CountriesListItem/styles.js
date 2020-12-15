import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
  flex-basis: 20%;
  text-align: center;
  margin-bottom: 30px;
  padding: 0 15px;
`

export const Capital = styled.p``

export const Title = styled.h3``

export const ImageWrapper = styled.div`
  width: calc(20vw - 30px);
  height: calc(15vw - 30px);
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
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
