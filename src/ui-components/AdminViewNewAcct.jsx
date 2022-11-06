/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Card, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function AdminViewNewAcct(props) {
  const { overrides, ...rest } = props;
  const buttonThreeFourFiveThreeThreeTwoFiveSixOnClick = useNavigateAction({
    type: "url",
    url: "/createAccount2",
  });
  const buttonThreeFourFiveThreeThreeTwoSixZeroOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <View
      width="463px"
      height="806px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AdminViewNewAcct")}
    >
      <View
        width="462.55px"
        height="804px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0.25%"
        bottom="0%"
        left="0%"
        right="0.1%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NewAcctForm1")}
      >
        <View
          width="450px"
          height="789px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6.5px"
          left="6.5px"
          border="1px SOLID rgba(102,102,102,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Component1")}
        >
          <Card
            display="flex"
            gap="0"
            direction="column"
            width="449px"
            height="788px"
            justifyContent="center"
            alignItems="flex-start"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="16px 16px 16px 16px"
            backgroundColor="rgba(255,255,255,1)"
            opacity="0.4699999988079071"
            variation="default"
            {...getOverrideProps(overrides, "Card")}
          ></Card>
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
            width="256px"
            height="44px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1.27%"
            bottom="93.15%"
            left="23.83%"
            right="19.15%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create New Account"
            {...getOverrideProps(overrides, "label34533253")}
          ></Text>
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
            width="33px"
            height="24.21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="95.23%"
            bottom="1.7%"
            left="calc(50% - 16.5px - -10px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1/2"
            {...getOverrideProps(overrides, "label34533252")}
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
            top="35.41%"
            bottom="55.46%"
            left="14.7%"
            right="10.24%"
            padding="0px 0px 0px 0px"
            label="Account Description"
            placeholder="Enter account description"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533245")}
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
            top="47.97%"
            bottom="42.89%"
            left="14.7%"
            right="10.24%"
            padding="0px 0px 0px 0px"
            label="Account Category"
            placeholder="Enter account category"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533247")}
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
            top="60.41%"
            bottom="30.46%"
            left="15.14%"
            right="9.8%"
            padding="0px 0px 0px 0px"
            label="Account Subcategory"
            placeholder="Enter account subcategory"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533248")}
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
            top="73.22%"
            bottom="17.64%"
            left="14.7%"
            right="10.24%"
            padding="0px 0px 0px 0px"
            label="User ID"
            placeholder="enter user ID"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34692999")}
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
            top="calc(50% - 36px - 178.07px)"
            left="14.7%"
            right="10.24%"
            padding="0px 0px 0px 0px"
            label="Account Number"
            placeholder="Enter account number"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533250")}
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
            top="10.28%"
            bottom="80.58%"
            left="14.7%"
            right="10.24%"
            padding="0px 0px 0px 0px"
            label="Account Name"
            placeholder="Enter account name"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533251")}
          ></TextField>
          <Flex
            gap="0"
            direction="row"
            width="150px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="700px"
            left="255px"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            backgroundColor="rgba(4,125,149,1)"
            onClick={() => {
              buttonThreeFourFiveThreeThreeTwoFiveSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button34533256")}
          >
            <Text
              fontFamily="Inter"
              fontSize="17px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="25.5px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="118px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Next"
              {...getOverrideProps(overrides, "label34533258")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="152px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="88.72%"
            bottom="5.95%"
            left="10.91%"
            right="55.23%"
            border="1px SOLID rgba(0,85,102,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            onClick={() => {
              buttonThreeFourFiveThreeThreeTwoSixZeroOnClick();
            }}
            {...getOverrideProps(overrides, "Button34533260")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(0,85,102,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cancel"
              {...getOverrideProps(overrides, "label34533262")}
            ></Text>
          </Flex>
        </View>
      </View>
    </View>
  );
}
