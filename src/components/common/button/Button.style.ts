import styled, { css } from 'styled-components';
import type { ButtonSortType } from './Button.type';

export const StyledButton = styled.button<ButtonSortType>`
    padding: 0.1rem 0.8rem;
    border: none;
    border-radius: 16px;
    font-size: 1rem;
    background-color: #7eb496;
    color: #ffffff;
    outline: none;
    cursor: pointer;

    ${props => 
        props.sort === 'modal' &&
            css`
                width: 100%;
                height: 50px;
                margin-top: 20px;
                line-height: 50px;
                font-size: 1.1rem;
                border-radius: 5px;
            `
    }
`;