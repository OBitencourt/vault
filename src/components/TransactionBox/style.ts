"use client";

import styled from "styled-components";

export const Box = styled.div`
    background-color: white;
    border-radius: 22.5px;
    box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.02),
        0px 0px 2.4px rgba(0, 0, 0, 0.028),
        0px 0px 4.5px rgba(0, 0, 0, 0.035),
        0px 0px 8px rgba(0, 0, 0, 0.042),
        0px 0px 15px rgba(0, 0, 0, 0.05),
        0px 0px 36px rgba(0, 0, 0, 0.07)
    ;
    width: 600px;
    height: 350px;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const MainTitle = styled.div`
    font-family: var(--font-koho);
    font-size: 1.7em;
    color: var(--color-tiertiary);
    font-weight: 500;
    border-bottom: 1px solid var(--color-tiertiary);
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
`

export const StyledInput = styled.input`
    border: none;
    background: none;
    color: white;
    background-color: var(--color-primary);
    padding: 10px;
    width: 48%;
    font-family: var(--font-koho);
    font-size: 1.1em;
    border-radius: 7px;
    outline: none;

    &::placeholder {
        color: white;
    }

`

export const StyledTextField = styled.textarea`
    resize: none;
    min-height: 120px;
    width: 100%;
    padding: 5px 10px;
    border: none;
    border-radius: 7px;
    outline: none;
    background-color: var(--color-primary);
    font-family: var(--font-koho);
    font-size: 1.1em;
    margin-top: 10px;
    color: white;
    &::placeholder {
        color: white;
    }


    /* &:focus  */

`

export const AddButton = styled.button`
    background-color: var(--color-primary);
    border-radius: 7px;
    padding: 5px 10px;
    align-self: flex-end;
    margin-top: 10px;
    transition: all 100ms ease-in-out;
    
    &:hover {
        filter: brightness(1.15);
    }
`