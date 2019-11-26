import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import Show from 'components/containers/show'
import { Header } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import CallUsIcon from 'images/svg/call-us.svg'
import ChatLiveIcon from 'images/svg/chat-live.svg'
import EmailUsIcon from 'images/svg/email-us.svg'

const Wrapper = styled.section`
    width: 100%;
    height: 44.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    background-color: var(--color-white);
    padding: 4rem 12.8rem;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 38.4rem;
    padding-top: 3.2rem;
`

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
`
const StyledText = styled(Text)`
    margin-bottom: ${props => props.marginBttom || '0.8rem'};
    color: ${props => props.color || 'var(--color-black-3)'};
`
const Logo = styled.div`
    margin-bottom: 1.4rem;
`
const StyledButton = styled(LocalizedLink)`
    border-radius: 4px;
    width: 11.5rem;
    height: 4rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: bold;
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
    &:focus,
    &:active {
        outline: none;
    }
    &:active {
        transform: scale(0.95);
    }
`
const Splitter = styled.div`
    background-color: #d8d8d8;
    height: 24.3rem;
    width: 0.1rem;
    margin-top: 7.8rem;
`
export const ContactWays = () => {
    return (
        <Show.Desktop>
            <Wrapper>
                <Contact>
                    <Logo>
                        <CallUsIcon></CallUsIcon>
                    </Logo>
                    <StyledHeader as="h3" align="center" color="--color-black-3">
                        {localize('Call Us')}
                    </StyledHeader>
                    <StyledText>{localize('International help desk')}</StyledText>
                    <StyledText secondary weight="bold">
                        {localize('+44 800 011 9847')}
                    </StyledText>
                    <StyledText>{localize('Mon-Fri: 24 hours')}</StyledText>
                    <StyledText marginBttom="1.9rem">
                        {localize('Sat-Sun: 8:00am - 5pm GMT')}
                    </StyledText>
                    <StyledText weight="bold" color="var(--color-red)">
                        {localize('View all global offices ')}
                    </StyledText>
                </Contact>
                <Splitter></Splitter>
                <Contact>
                    <Logo>
                        <EmailUsIcon></EmailUsIcon>
                    </Logo>
                    <StyledHeader as="h3" align="center" color="--color-black-3">
                        {localize('Email Us')}
                    </StyledHeader>
                    <StyledText secondary weight="bold" color="var(--color-red)">
                        {localize('emailhelp@deriv.com')}
                    </StyledText>
                </Contact>
                <Splitter></Splitter>
                <Contact>
                    <Logo>
                        <ChatLiveIcon></ChatLiveIcon>
                    </Logo>
                    <StyledHeader as="h3" align="center" color="--color-black-3">
                        {localize('Chat live')}
                    </StyledHeader>
                    <StyledText>{localize('Mon-Fri: 24 hours')}</StyledText>
                    <StyledText marginBttom="3.2rem">
                        {localize('Sat-Sun: 8:00am - 5pm GMT')}
                    </StyledText>
                    <StyledButton to="/">{localize('Start a chat')}</StyledButton>
                </Contact>
            </Wrapper>
        </Show.Desktop>
    )
}
