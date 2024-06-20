/* eslint-disable */
import React, { useState, useEffect } from 'react';

export default function Welcome(props: {username: string}) {
  return (
    <div className="page1">
      Welcome {props.username} !
    </div>
  );
}
