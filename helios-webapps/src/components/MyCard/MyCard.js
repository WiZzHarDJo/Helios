import React, { Component } from "react";
import { Card } from "antd";
import styles from './MyCard.scss';

class MyCard extends Component {
  render() {
    const {
      children,
      title,
      titlePosition,
      noBorder,
      noPadding,
      loading,
    } = this.props;

    return (
      <Card
        style={noBorder ? { border: 0 } : {}, {marginBottom:"25px"}}
        title={title}
        className={[styles.cardGlobalStyle, styles[titlePosition], noPadding ? styles.cardNoPadding : "", styles.centerBody]}
        loading={loading}
      >
        {children}
      </Card>
    );
  }
}
export default MyCard;
