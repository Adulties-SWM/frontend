import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

export const MedListItem = ({ data: { name, dutytime, distance } }) => {
  return (
    <Row
      style={{
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.25)',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
    >
      <Col span={23} offset={1}>
        <Text strong>{name}</Text>
        <br />
        {/* <Text strong>서울특별시 강남구 일원동50 (일원로81)</Text> */}

        <div style={{ display: 'flex', marginTop: '8px', width: '100%' }}>
          <Text strong>진료시간: </Text>
          <Text strong>&nbsp;{dutytime}</Text>
          {distance && (
            <Text style={{ marginLeft: 'auto', marginRight: '16px' }} strong>
              {`${distance}m`}
            </Text>
          )}
        </div>
      </Col>
    </Row>
  );
};
