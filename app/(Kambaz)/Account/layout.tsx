import { Col, Row } from "react-bootstrap";
import AccountNavigation from "./Navigation";
import { ReactNode } from "react";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Row>
      <Col xl={1} md={2} xs={3}>
        <AccountNavigation />
      </Col>
      <Col xl={11} md={10} xs={9}>
        {children}
      </Col>
    </Row>
  );
}
