/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function ButtonViewExpiredPassword(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ButtonViewExpiredPassword")}
    >
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="300px"
        height="36px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        backgroundColor="rgba(0,64,77,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="View Expired Passwords"
        {...getOverrideProps(overrides, "ButtonViewExpiredPassword36114335")}
      ></Button>
    </Flex>
  );
}
