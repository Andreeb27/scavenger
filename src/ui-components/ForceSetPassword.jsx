/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, PasswordField, Text, View } from "@aws-amplify/ui-react";
export default function ForceSetPassword(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="495px"
      height="582px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ForceSetPassword")}
    >
      <View
        width="475px"
        height="575px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7.5px"
        left="7.5px"
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
        width="201px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8.76%"
        bottom="84.02%"
        left="29.7%"
        right="29.7%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Password"
        {...getOverrideProps(overrides, "label35604338")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(48,64,80,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="304px"
        height="139px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="38.14%"
        bottom="37.97%"
        left="18.99%"
        right="19.6%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Password must:&#xA;be at least 8 characters in length&#xA; Include each of the following:&#xA;      letter&#xA;      number&#xA;      special character&#xA;   "
        {...getOverrideProps(overrides, "label35604391")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="395px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="509px"
        left="47px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Activate Account"
        {...getOverrideProps(overrides, "Button35604343")}
      ></Button>
      <PasswordField
        display="flex"
        gap="8px"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="119px"
        left="98px"
        padding="0px 0px 0px 0px"
        label="Password"
        placeholder="Enter password"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
      <Flex
        gap="0"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="422px"
        left="98px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "InputGroup")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="0px 0px 0px 16px"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="40px"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Re-enter password"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={false}
            variation="default"
            children=""
            {...getOverrideProps(overrides, "Button35604385")}
          ></Button>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="67.01%"
        bottom="28.87%"
        left="calc(50% - 150px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Confirm Password"
        {...getOverrideProps(overrides, "label35604381")}
      ></Text>
    </View>
  );
}
