import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Thumbnail = styled.div`
    width: 200px;
    height: 250px;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    background-image: url('./images/test-thumbnail.JPG');
    background-repeat: no-repeat;
    background-size: 200px 250px;
    background-position: center;
`;

export const SetContentInputList = styled.ul`
    margin-top: 20px;
`;

export const SetContentInputSort = styled.li`
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SetContentInput = styled.input`
    padding: 2px 40px 2px 5px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #b4b4b4;

    &:focus {
        outline: none;
    }
`;