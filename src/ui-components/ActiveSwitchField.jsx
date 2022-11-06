/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SwitchField } from "@aws-amplify/ui-react";
export default function ActiveSwitchField(props) {
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
      {...getOverrideProps(overrides, "ActiveSwitchField")}
    >
      <SwitchField
        display="flex"
        gap="8px"
        direction="row"
        width="96px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="8px 8px 8px 8px"
        label="Active"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "ActiveSwitchField36644467")}
      ></SwitchField>
    </Flex>
  );
}
