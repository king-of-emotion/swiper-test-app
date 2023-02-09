import React from 'react';
import {App} from "../App";
import './page.css';

export const Page = (props: {srcs: string[]}) => (
    <div>
      <App {...props}></App>
    </div>
);

Page.defaultProps = {
    srcs: [],
};
