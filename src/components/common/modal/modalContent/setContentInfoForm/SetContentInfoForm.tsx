import React from 'react';
import * as S from './SetContentInfoForm.style';
import Button from '../../../button/Button';


const SetContentInfoForm: React.FC = () => {
    return (
        <S.Container>
            <S.Thumbnail />
            <S.SetContentInputList>
                <S.SetContentInputSort>
                <S.SetContentInput placeholder="제목"/>
                </S.SetContentInputSort>
                <S.SetContentInputSort>
                <S.SetContentInput placeholder="날짜"/>
                </S.SetContentInputSort>
                <S.SetContentInputSort>
                <S.SetContentInput placeholder="장소"/>
                </S.SetContentInputSort>
                <S.SetContentInputSort>
                <S.SetContentInput placeholder="설명"/>
                </S.SetContentInputSort>
            </S.SetContentInputList>
            <Button sort="modal" name="저장"/>
        </S.Container>
    )
}

export default SetContentInfoForm;