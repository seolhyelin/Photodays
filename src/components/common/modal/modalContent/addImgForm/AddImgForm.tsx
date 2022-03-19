import React from 'react';
import * as S from './AddImgForm.style';

const addImgForm: React.FC = () => {
    return (
        <S.Container>
            <S.ContentTitle>티켓 추가하기</S.ContentTitle>
            <S.ContentInfo>티켓에 사진을 추가할 방법을 선택하세요</S.ContentInfo>
            <S.UpdateSortList>
                <S.UpdateSort>
                <S.FetchLocalPC>앨범에서 불러오기</S.FetchLocalPC>
                </S.UpdateSort>
            </S.UpdateSortList>
        </S.Container>
    )
}

export default addImgForm;