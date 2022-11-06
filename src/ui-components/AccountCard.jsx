/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, SwitchField, Text, View } from "@aws-amplify/ui-react";
export default function AccountCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="520px"
      height="162px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AccountCard")}
    >
      <View
        width="520px"
        height="162px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(230,231,233,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "table_body_bg")}
      ></View>
      <Icon
        width="21.19px"
        height="17.97px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 21.19007110595703,
          height: 17.9736328125,
        }}
        paths={[
          {
            d: "M14.8082 12.1025C14.7345 12.1729 14.7345 12.2432 14.7345 12.3135L14.7345 16.2861L1.76814 16.2861L1.76814 3.91113L10.6457 3.91113C10.7194 3.91113 10.793 3.91113 10.8667 3.84082L12.0455 2.71582C12.2296 2.54004 12.0823 2.22363 11.8244 2.22363L1.76814 2.22363C0.773562 2.22363 0 2.99707 0 3.91113L0 16.2861C0 17.2354 0.773562 17.9736 1.76814 17.9736L14.7345 17.9736C15.6923 17.9736 16.5027 17.2354 16.5027 16.2861L16.5027 11.1885C16.5027 10.9424 16.1711 10.8018 15.9869 10.9775L14.8082 12.1025ZM20.5546 5.03613C21.4019 4.22754 21.4019 2.92676 20.5546 2.11816L18.9707 0.606445C18.1234 -0.202148 16.7605 -0.202148 15.9133 0.606445L6.26217 9.81738L5.89381 13.0166C5.7833 13.9307 6.59369 14.7041 7.55144 14.5986L10.9035 14.2471L20.5546 5.03613ZM16.9447 6.09082L10.0931 12.6299L7.66195 12.9111L7.95664 10.5908L14.8082 4.05176L16.9447 6.09082ZM19.3022 3.31348C19.4864 3.4541 19.4864 3.66504 19.339 3.84082L18.1971 4.93066L16.0606 2.85645L17.1657 1.80176C17.3131 1.62598 17.5709 1.62598 17.7183 1.80176L19.3022 3.31348Z",
            fill: "rgba(130,136,148,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12.36%"
        bottom="76.54%"
        left="85%"
        right="10.92%"
        {...getOverrideProps(overrides, "edit")}
      ></Icon>
      <Icon
        width="16.5px"
        height="18px"
        viewBox={{ minX: 0, minY: 0, width: 16.502655029296875, height: 18 }}
        paths={[
          {
            d: "M9.87212 14.625L10.7562 14.625C10.9772 14.625 11.1982 14.4492 11.1982 14.2031L11.1982 6.60938C11.1982 6.39844 10.9772 6.1875 10.7562 6.1875L9.87212 6.1875C9.61427 6.1875 9.43009 6.39844 9.43009 6.60938L9.43009 14.2031C9.43009 14.4492 9.61427 14.625 9.87212 14.625ZM15.9133 2.8125L12.8559 2.8125L11.6034 0.84375C11.3087 0.386719 10.6457 0 10.0931 0L6.37268 0C5.82013 0 5.15708 0.386719 4.86239 0.84375L3.60996 2.8125L0.589381 2.8125C0.257854 2.8125 0 3.09375 0 3.375L0 3.9375C0 4.25391 0.257854 4.5 0.589381 4.5L1.17876 4.5L1.17876 16.3125C1.17876 17.2617 1.95232 18 2.9469 18L13.5558 18C14.5135 18 15.3239 17.2617 15.3239 16.3125L15.3239 4.5L15.9133 4.5C16.208 4.5 16.5027 4.25391 16.5027 3.9375L16.5027 3.375C16.5027 3.09375 16.208 2.8125 15.9133 2.8125ZM6.299 1.79297C6.33584 1.75781 6.44635 1.6875 6.48319 1.6875L6.52002 1.6875L9.98263 1.6875C10.0195 1.6875 10.13 1.75781 10.1668 1.79297L10.793 2.8125L5.67279 2.8125L6.299 1.79297ZM13.5558 16.3125L2.9469 16.3125L2.9469 4.5L13.5558 4.5L13.5558 16.3125ZM5.74646 14.625L6.63053 14.625C6.85155 14.625 7.07257 14.4492 7.07257 14.2031L7.07257 6.60938C7.07257 6.39844 6.85155 6.1875 6.63053 6.1875L5.74646 6.1875C5.48861 6.1875 5.30443 6.39844 5.30443 6.60938L5.30443 14.2031C5.30443 14.4492 5.48861 14.625 5.74646 14.625Z",
            fill: "rgba(130,136,148,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12.35%"
        bottom="76.54%"
        left="93.04%"
        right="3.78%"
        {...getOverrideProps(overrides, "trash-alt")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="16px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.88%"
        bottom="75.31%"
        left="3.85%"
        right="70.96%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cafe Equipment"
        {...getOverrideProps(overrides, "Cafe Equipment")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="400"
        color="rgba(33,33,33,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="32.72%"
        bottom="54.32%"
        left="3.85%"
        right="74.04%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Account no:  109"
        {...getOverrideProps(overrides, "Account no: 109")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="400"
        color="rgba(33,33,33,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="48.77%"
        bottom="38.27%"
        left="3.85%"
        right="61.54%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Subcategory : equipment"
        {...getOverrideProps(overrides, "Subcategory : equipment")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="400"
        color="rgba(33,33,33,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="64.81%"
        bottom="9.26%"
        left="3.85%"
        right="40%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Coffee & espresso machines, coffee bean&#xA;grinder, ice makers, blenders"
        {...getOverrideProps(
          overrides,
          "Coffee & espresso machines, coffee bean grinder, ice makers, blenders"
        )}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="64.81%"
        bottom="22.22%"
        left="70.38%"
        right="3.85%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Balance: $13,872.78"
        {...getOverrideProps(overrides, "Balance: $13,872.78")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="81px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.49%"
        bottom="75.93%"
        left="32.31%"
        right="52.12%"
        {...getOverrideProps(overrides, "Group 1005")}
      >
        <View
          width="81px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="7px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(88,80,236,0.3)"
          {...getOverrideProps(overrides, "Rectangle 477")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="11px"
          fontWeight="500"
          color="rgba(88,80,236,1)"
          lineHeight="16.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="13.64%"
          bottom="9.09%"
          left="30.86%"
          right="30.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Asset"
          {...getOverrideProps(overrides, "Asset")}
        ></Text>
      </View>
      <SwitchField
        display="flex"
        gap="8px"
        direction="row"
        width="96px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="8.64%"
        bottom="73.46%"
        left="62.31%"
        right="19.23%"
        padding="8px 8px 8px 8px"
        label="Active"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField")}
      ></SwitchField>
    </View>
  );
}
