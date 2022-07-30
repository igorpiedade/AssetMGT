import styled from "styled-components";

export const SidemenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 14.375rem;
    height: 100vh;
    padding-top: 1rem;
    padding-left: 1rem;
    border: 0;

    background: ${(props) => props.theme.bgSideMenuColor};

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        margin-bottom: 3rem;
    }

    nav {
        a {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-left: 0.5rem;
            padding-left: 1rem;

            color: ${(props) => props.theme.txtSideMenuColor};
            text-decoration: none;
            font-size: 1.125rem;

            width: 13.375rem;
            height: 3.75rem;

            border-radius: 8px;

            &:hover {
                background-color: ${(props) => props.theme.bgSideMenuHover};
            }

            &.active {
                background-color: ${(props) => props.theme.activeLinkSideMenu};
            }
        }
    }
`;
