import styled from 'styled-components'
import Container from './container'

const GridContainer = styled(Container)`
    text-align: ${props => props.align || 'left'};
    display: grid;
`

export default GridContainer
