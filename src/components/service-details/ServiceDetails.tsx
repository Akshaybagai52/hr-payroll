import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../data/serviceData';
import { Card, List } from 'antd';

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  //@ts-ignore
  const service = services[parseInt(id)];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="p-6">
      <Card title={service.title} bordered={false}>
        <List
          itemLayout="horizontal"
          dataSource={service.keyFeatures}
          renderItem={(feature) => (
            <List.Item>
              <List.Item.Meta
                description={feature}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default ServiceDetails;
