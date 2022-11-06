/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function AcctRequestSuccess(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="474px"
      height="239px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AcctRequestSuccess")}
    >
      <View
        width="475px"
        height="240px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-0.5px"
        left="-0.5px"
        border="0.5px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 505")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(48,64,80,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="114px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.55%"
        bottom="69.87%"
        left="37.97%"
        right="37.97%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Success!"
        {...getOverrideProps(overrides, "label35565029")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="27px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="383px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.13%"
        bottom="52.3%"
        left="9.49%"
        right="9.7%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your request has been sent successfully. If approved, you will receive email notification."
        {...getOverrideProps(overrides, "label35565052")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="163px"
        left="162px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="OK"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
