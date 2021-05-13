import { Button, Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import Text from 'antd/lib/typography/Text';
import React, { useState, useCallback, useEffect } from 'react';
import { getDetail } from '../api/medicalAPI';

export const MedInfoModal = ({ modalProps, ModalToggle, selectedMarker }) => {
  const [data, setData] = useState(null);
  const callAPI = useCallback(async () => {
    const serverData = await getDetail(selectedMarker.hpid);
    setData(serverData);
  }, [modalProps]);

  useEffect(() => {
    if (modalProps.visible === true) {
      callAPI();
    }
  }, [modalProps]);
  return (
    <Modal
      {...modalProps}
      onCancel={ModalToggle}
      title="응급의료기관 정보"
      okText={'확인'}
      width={600}
      footer={[
        <Button key="back" type="primary" onClick={ModalToggle}>
          확인
        </Button>,
      ]}
    >
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>기관명</Text>
        </Col>
        <Col offset={2}>{data?.name}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>주소</Text>
        </Col>
        <Col offset={2}>{data?.address}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>대표전화</Text>
        </Col>
        <Col offset={2}>{data?.tel}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>병상수</Text>
        </Col>
        <Col offset={2}>{data?.beds}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>입원실가용여부</Text>
        </Col>
        <Col offset={2}>{data?.availableRoom ? '가능' : '불가능'}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>응급실가용여부</Text>
        </Col>
        <Col offset={2}>{data?.availableBed ? '가능' : '불가능'}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>진료시간</Text>
        </Col>
        <Col offset={2} span={15}>
          {data?.dutytime}
        </Col>
      </Row>
    </Modal>
  );
};
