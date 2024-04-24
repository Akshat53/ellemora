import React from "react";
import { Col, Collapse, Row } from "antd";
import Tag from "../Tag/Tag";
import Styles from "./collapse.module.css";

const { Panel } = Collapse;

interface CollapseOption {
  header: string;
  description?: string;
  content: { title: string | null; subContent: string }[];
  categories?: string[];
}

interface CustomCollapseProps {
  collapseOptions: CollapseOption[];
}

const CustomCollapse: React.FC<CustomCollapseProps> = ({ collapseOptions }) => {
  const transformToUppercase = (str: string | null) => {
    return str ? str.toUpperCase() : "";
  };

  return (
    <Collapse
      bordered={false}
      expandIconPosition="end"
      className="bg-white"
      defaultActiveKey={0}
    >
      {collapseOptions.map((item, i) => (
        <Panel header={item.header} key={i} className={`${Styles.panel}`}>
          {item.description && (
            <p className={`${Styles.fs10}`}>{item.description}</p>
          )}
          <Row gutter={[16, 16]}>
            {item.content.map((contentItem, j) => (
              <Col
                key={j}
                span={i === 1 ? 12 : item.content.length > 4 ? 12 : 24}
              >
                {contentItem.title && (
                  <h1 className={`${Styles.fs12} p-0 m-0`}>
                    {transformToUppercase(contentItem.title)}
                  </h1>
                )}
                <p className={`${Styles.fs10} p-0 m-0`}>
                  {contentItem.subContent}
                </p>
              </Col>
            ))}
          </Row>
          <div className="d-flex gap-2 py-3 flex-wrap">
            {item.categories?.map((cat, index) => (
              <Tag key={index} label={[cat]} />
            ))}
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};

export default CustomCollapse;
