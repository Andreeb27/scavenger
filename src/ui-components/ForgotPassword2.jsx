/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function ForgotPassword2(props) {
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
      {...getOverrideProps(overrides, "ForgotPassword2")}
    >
      <View
        width="475px"
        height="565px"
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
        width="222px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8.42%"
        bottom="84.36%"
        left="28.69%"
        right="26.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Forgot Password?"
        {...getOverrideProps(overrides, "label35564969")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="600"
        color="rgba(48,64,80,1)"
        lineHeight="27px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="342px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="15.98%"
        bottom="76.8%"
        left="16.57%"
        right="14.34%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please answer your security questions &#xA;These will help us verify your identity"
        {...getOverrideProps(overrides, "label35564999")}
      ></Text>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="337px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="28.35%"
        bottom="59.28%"
        left="15.35%"
        right="16.57%"
        padding="0px 0px 0px 0px"
        label="Who was your childhood best friend?"
        placeholder="Enter security question answer"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35564970")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="337px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="45.02%"
        bottom="42.61%"
        left="15.35%"
        right="16.57%"
        padding="0px 0px 0px 0px"
        label="What was the name of your first pet?"
        placeholder="Enter security question answer"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35564971")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="337px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="63.92%"
        bottom="23.71%"
        left="15.35%"
        right="16.57%"
        padding="0px 0px 0px 0px"
        label="What is your mother’s maiden name?"
        placeholder="Enter security question answer"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35564992")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="495px"
        left="265px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Submit"
        {...getOverrideProps(overrides, "Button35564972")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="152px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="84.88%"
        bottom="7.9%"
        left="14.95%"
        right="54.34%"
        border="1px SOLID rgba(0,85,102,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Cancel"
        {...getOverrideProps(overrides, "Button35564973")}
      ></Button>
    </View>
  );
}
