import React from 'react';

import { useRecoilState } from 'recoil';
import { tmpInfoState } from '../../../../../recoil/photoInfo';
import type { InfoType } from '../../../../../recoil/photoInfo';

import * as S from './SetContentInfoForm.style';
import Button from '../../../button/Button';

const SetContentInfoForm: React.FC = () => {
  const [tmpInfo, setTmpInfo] = useRecoilState<InfoType>(tmpInfoState);

  return (
    <S.Container>
      <S.Date>2022.03.06</S.Date>
      <S.Thumbnail src={tmpInfo.img_url as string}/>
      <S.SetContentInputList>
        <S.SetContentInputSort>
          <S.SetContentInput placeholder="제목" />
        </S.SetContentInputSort>

        <S.SetContentInputSort>
          <S.SetContentInput placeholder="장소" />
        </S.SetContentInputSort>
        <S.SetContentInputSort>
          <S.SetContentDescription placeholder="설명" />
        </S.SetContentInputSort>
      </S.SetContentInputList>
      <Button sort="modal" name="저장" />
    </S.Container>
  );
};

export default SetContentInfoForm;
