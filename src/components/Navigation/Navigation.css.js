import styled from 'styled-components'



export const Container = styled.div`
display: flex;
justify-content: space-between;
background-color: ${({theme}) => theme.color.gray.light};
padding: ${({ theme }) => theme.spacing.sm}px 0;
`

export const List = styled.ul`
display: flex;
list-style: none;
`
