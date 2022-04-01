import { atom } from 'recoil';

export interface PhotoInfoType {
    id: number;
    img_url: string;
    title: string;
    location: string;
    description: string;
}

export const tmpPhotoInfoState = atom<PhotoInfoType>({
    key: 'tmpPhotoInfoState',
    default: {
        id: 0,
        img_url: 'empty',
        title: 'empty',
        location: 'empty',
        description: 'empty'
    },
})

export const photoInfoListState = atom<PhotoInfoType[]>({
    key: 'photoInfoList',
    default: []
})