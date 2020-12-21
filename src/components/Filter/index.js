import { Wrapper, Input } from './styles'

export default function Filter(props) {
  return (
    <Wrapper>
      <Input {...props} placeholder="Search for countries (case sensitive, ex: Brazil)" />
    </Wrapper>
  )
}
