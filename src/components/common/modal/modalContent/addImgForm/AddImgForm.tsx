import React from 'react';
import * as S from './AddImgForm.style';

const AddImgForm: React.FC = () => {
  return (
    <S.Container>
      <S.ContentTitle>티켓 추가하기</S.ContentTitle>
      <S.ContentInfo>티켓에 사진을 추가할 방법을 선택하세요</S.ContentInfo>
      <S.UpdateSortList>
        <S.UpdateSort>
          <S.FileBox>
            <S.FileLabel htmlFor="file">내 PC에서 불러오기</S.FileLabel>
            <S.FetchLocalPC type="file" id="file" />
          </S.FileBox>
        </S.UpdateSort>
      </S.UpdateSortList>
    </S.Container>
  );
};

export default AddImgForm;
