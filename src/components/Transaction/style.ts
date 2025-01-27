"use client";

import styled from "styled-components";

export const StyledTransaction = styled.div<{ $isRevenue: boolean }>`
    border-bottom: 1px solid #CCCCCC;
    padding: 15px 2px 15px 2px;
    font-family: var(--font-krub);
    font-size: 1.3em;
    text-align: start;
    font-weight: 300;
    color: var(--color-secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h2 {
        display: block;
        padding: 0 40px 0 40px;
        border-right: 1px solid #CCCCCC;
        border-left: 1px solid #CCCCCC;
        color: ${({$isRevenue}) => ($isRevenue ? '#4EB441' : '#D51532')};
        // color: #4EB441;
        font-weight: 500;
    }
`

export const IconWrapper = styled.div`
    padding: 8px;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
        background-color:rgb(225, 224, 224);
    }
`