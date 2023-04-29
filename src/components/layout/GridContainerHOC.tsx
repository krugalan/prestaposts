import React from "react";
import { GridContainer } from "./components";

export const gridContainerHOC = <P extends object>(
  ChildComponent: React.ComponentType<P>
): React.FC<P> => {
  const GridContainerHOC = (props: P): JSX.Element => {
    return (
      <GridContainer>
        <ChildComponent {...props} />
      </GridContainer>
    );
  };
  return GridContainerHOC;
};
