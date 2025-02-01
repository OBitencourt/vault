import styled from "styled-components";

interface TabButtonProps {
    active: boolean;
}
  

export const MonthTabs = styled.div`
    width: 100%;
    background-color: var(--color-tiertiary-weak);
    padding: 4px;
    display: flex;
    justify-content: space-evenly;
    gap: 4px;
    border-radius: 8px;
`

export const TabButton = styled.button<TabButtonProps>`
    background-color: ${(props) => (props.active ? "var(--color-primary)" : "transparent")};
    color: ${(props) => (props.active ? "white" : "var(--color-primary)")};
    font-weight: ${(props) => (props.active ? "500" : "400s")};
    font-family: var(--font-krub);
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 45%;
`;