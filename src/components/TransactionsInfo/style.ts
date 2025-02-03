"use client";

import styled from "styled-components";

export const BigBox = styled.div`
    min-height: 700px;
    width: 500px;
    background-color: var(--color-primary);
    padding: 24px;
    margin-left: 50px;
    border-radius: 8px;
    box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.02),
        0px 0px 2.4px rgba(0, 0, 0, 0.028),
        0px 0px 4.5px rgba(0, 0, 0, 0.035),
        0px 0px 8px rgba(0, 0, 0, 0.042),
        0px 0px 15px rgba(0, 0, 0, 0.05),
        0px 0px 36px rgba(0, 0, 0, 0.07)
    ;
`

export const TransactionsWrapper = styled.div`
    height: 610px;
    background-color: white;
    border-radius: 4px;
    font-family: var(--font-koho);
    padding: 20px;
    text-align: center;

    & h4 {
        font-size: 1.4em;
        font-weight: 600;
        color: var(--color-tiertiary);
        margin-left: -10px;
        margin-bottom: 20px;
    }
`

export const TotalWrapper = styled.div`
    height: 120px;
    background-color: white;
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-koho);
    padding: 14px;

    & h4 {
        font-size: 1.3em;
        font-weight: 500;
        opacity: 0.8;
        color: #38333A;
    }
    
    & h3 {
        font-size: 1.8em;
        font-weight: 600;
        color: var(--color-tiertiary);
    }
`