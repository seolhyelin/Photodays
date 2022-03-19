import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const [modalInfo, setModalInfo] = useState<any[]>([]); // ModalInfo에 키값 추후 설정

    const setModalVisible = (...modalInfo: any[]) => {
        setModalInfo(modalInfo);
        setIsShowing(!isShowing);
    }

    return { isShowing, modalInfo, setModalVisible };
}

export default useModal;