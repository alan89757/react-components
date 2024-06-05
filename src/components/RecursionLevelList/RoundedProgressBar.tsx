/* eslint-disable */
import React from "react"
import { Progress } from "antd"

export const RoundedProgressBar = (props: any) => {
  const { speedRate, trailColor } = props;
  return (
    <div style={{ position: "relative", height: 8, width: 60 }}>
      <div style={{ width: 60, position: "absolute", top: -9, left: 0 }}>
        <Progress
          percent={speedRate * 100}
          size='default'
          status='exception'
          trailColor={trailColor}
          showInfo={false}
        />
      </div>
    </div>
  )
}
