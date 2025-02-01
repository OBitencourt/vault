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
        padding: 0 30px 0 30px;
        border-right: 1px solid #CCCCCC;
        border-left: 1px solid #CCCCCC;
        color: ${({$isRevenue}) => ($isRevenue ? '#4EB441' : '#D51532')};
        // color: #4EB441;
        font-weight: 500;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    width: '100px';
    background-color: transparent;
    transition: all 700ms cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 4px 12px;
    border-radius: 0.3em;
    cursor: default;

    &:hover {
        background-color:rgb(240, 237, 237);
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
