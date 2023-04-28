import React from "react";
import { FloatCardContainer } from "./components";

export const floatCardContainerHOC = <P extends object>(
  ChildComponent: React.ComponentType<P>
): React.FC<P> => {
  const FloatCardContainerHOC = (props: P): JSX.Element => {
    return (
      <FloatCardContainer>
        <ChildComponent {...props} />
      </FloatCardContainer>
    );
  };
  return FloatCardContainerHOC;
};
