import styled from '@emotion/styled'

export const FriendItem = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
padding: 0;
border: 1px solid #F4F4FD;
background: #FFF;
width: 300px;
margin-left: auto;
margin-right: auto;
padding: 5px;
box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);`

export const OnlineStatus = styled.span`
display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${ props => (props.isOnline ? 'green' : 'red')}`

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid #F4F4FD;
`

export const Name = styled.p`
color: #2E2F42;
text-align: center;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.4px;`


