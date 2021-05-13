import { Button, Col, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import React from "react";

//TODO: get dataProps
export const MedInfoModal = ({ modalProps, data }) => {
  return (
    <Modal
      {...modalProps}
      title="응급의료기관 정보"
      okText={"확인"}
      footer={[
        <Button key="back" type="primary">
          확인
        </Button>,
      ]}
    >
      <Row style={{ marginBottom: "12px" }}>
        <Col span={6} offset={1}>
          <Text strong>기관명</Text>
        </Col>
        <Col offset={2}>세브란스병원</Col>
      </Row>
      <Row style={{ marginBottom: "12px" }}>
        <Col span={6} offset={1}>
          <Text strong>주소</Text>
        </Col>
        <Col offset={2}>서울특별시 강남구 일원동50 (일원로81)</Col>
      </Row>
      <Row style={{ marginBottom: "12px" }}>
        <Col span={6} offset={1}>
          <Text strong>대표전화</Text>
        </Col>
        <Col offset={2}>02-3410-2114</Col>
      </Row>
      <Row style={{ marginBottom: "12px" }}>
        <Col span={6} offset={1}>
          <Text strong>병상수</Text>
        </Col>
        <Col offset={2}>1966</Col>
      </Row>
      <Row style={{ marginBottom: "12px" }}>
        <Col span={6} offset={1}>
          <Text strong>입원실가용여부</Text>
        </Col>
        <Col offset={2}>가능</Col>
      </Row>
      <Row style={{ marginBottom: "12px" }}>
        <Col span={6} offset={1}>
          <Text strong>응급실가용여부</Text>
        </Col>
        <Col offset={2}>가능</Col>
      </Row>
      <Row style={{ marginBottom: "12px" }}>
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
