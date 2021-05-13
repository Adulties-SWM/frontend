import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

export const MedListItem = () => {
  return (
    <Row
      style={{
        width: "100%",
        borderBottom: "1px solid rgba(0,0,0,0.25)",
        paddingTop: "12px",
        paddingBottom: "12px",
      }}
    >
      <Col
        span={6}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Title level={3} style={{ marginLeft: "auto", marginRight: "auto" }}>
          A
        </Title>
      </Col>
      <Col span={18}>
        <Text strong>삼성서울병원</Text>
        <br />
        <Text strong>서울특별시 강남구 일원동50 (일원로81)</Text>

        <div style={{ display: "flex", marginTop: "8px", width: "100%" }}>
          <Text strong>진료시간: </Text>
          <Text strong>&nbsp;08:30~15:00</Text>
          <Text style={{ marginLeft: "auto", marginRight: "16px" }} strong>
            100m
          </Text>
        </div>
      </Col>
    </Row>
  );
};
