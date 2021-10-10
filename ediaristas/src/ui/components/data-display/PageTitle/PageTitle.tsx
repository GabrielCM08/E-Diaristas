import { jsx } from "@emotion/react";
import React from "react";

interface PageTitleprops{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleprops> = (props) => {
    return (
    <div>
        {props.title}
        {props.subtitle}
    </div>
  );
}

export default PageTitle;