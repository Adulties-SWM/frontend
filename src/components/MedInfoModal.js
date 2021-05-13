import { Button, Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';
import { getDetail } from '../api/medicalAPI';

//TODO: get dataProps
export const MedInfoModal = ({
  modalProps,
  ModalToggle,
  selectedMarker,
  // data: {
  //   name = '세브란스병원',
  //   location = '서울특별시 강남구 일원동50 (일원로81)',
  //   phone = '02-3410-2114',
  //   bedNum = '1966',
  //   hospitalRoomAvailable = true,
  //   emergencyAvailable = true,
  //   schedule = '',
  // } = {},
}) => {
  const [data, setData] = useState({
    name: '세브란스병원',
    location: '서울특별시 강남구 일원동50 (일원로81)',
    phone: '02-3410-2114',
    bedNum: '1966',
    hospitalRoomAvailable: true,
    emergencyAvailable: true,
    schedule: '',
  });
  if (modalProps.visible === true) {
    (async () => {
      const serverData = await getDetail('A1100015');
      console.log(serverData);
    })();
  }
  return (
    <Modal
      {...modalProps}
      onCancel={ModalToggle}
      title="응급의료기관 정보"
      okText={'확인'}
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
        <Col offset={2}>{data.name}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>주소</Text>
        </Col>
        <Col offset={2}>{data.location}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>대표전화</Text>
        </Col>
        <Col offset={2}>{data.phone}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>병상수</Text>
        </Col>
        <Col offset={2}>{data.bedNum}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>입원실가용여부</Text>
        </Col>
        <Col offset={2}>{data.hospitalRoomAvailable ? '가능' : '불가능'}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>응급실가용여부</Text>
        </Col>
        <Col offset={2}>{data.emergencyAvailable ? '가능' : '불가능'}</Col>
      </Row>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={6} offset={1}>
          <Text strong>진료시간</Text>
        </Col>
        <Col offset={2} span={15}>
          월(8:30~15:00) , 화(8:30~15:00), 수(8:30~15:00), 목(8:30~15:00)
          금(8:30~15:00), 토(8:30~15:00), 일(8:30~15:00), 공휴일(8:30~15:00)
        </Col>
      </Row>
    </Modal>
  );
};
