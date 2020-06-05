import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

import PassengerTypeRow from "./PassengerTypeRow";
import FlightTypeRow from "./FlightTypeRow";

const green = "#2dc44d";

const styles = StyleSheet.create({
  modalHeader: {
    // justifyContent: "flex-start",
    height: "15%",
    // borderBottomWidth: 2,
    // borderBottomColor: green,
    flexDirection: "row",
    // alignContent:'stretch'
  },
  modalHeaderButton: {
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonModal: {
    backgroundColor: green,
    height: 50,
    borderRadius: 7,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.5,
  },
  choosenHeaderTitle: {
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.8,
    color: green,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.5,
  },
  choosenHeaderSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.8,
    color: green,
  },
  okButtonContainer: {
    flex: 1,
    // position: "absolute",
    width: "95%",
    justifyContent: "flex-end",
    alignContent: "center",
    alignSelf: "center",
  },
});

const PassengerTypeModal = ({
  headerModalTab,
  headerPassengerClick,
  headerFlightClick,
  flightOptions,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: "70%",
        // width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <View style={styles.modalHeader}>
        <View
          style={[
            styles.modalHeaderButton,
            headerModalTab == 0
              ? { borderBottomWidth: 2, borderBottomColor: green }
              : { borderBottomWidth: 0, borderBottomColor: "white" },
          ]}
        >
          <TouchableOpacity onPress={headerPassengerClick}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  headerModalTab == 0
                    ? styles.choosenHeaderTitle
                    : styles.headerTitle,
                ]}
              >
                Tolcu Sayısı
              </Text>
              <Text
                style={[
                  headerModalTab == 0
                    ? styles.choosenHeaderSubtitle
                    : styles.headerSubtitle,
                ]}
              >
                1 Yolcu
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.modalHeaderButton,
            headerModalTab == 1
              ? { borderBottomWidth: 2, borderBottomColor: green }
              : { borderBottomWidth: 0, borderBottomColor: "white" },
          ]}
        >
          <TouchableOpacity onPress={headerFlightClick}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  headerModalTab == 1
                    ? styles.choosenHeaderTitle
                    : styles.headerTitle,
                ]}
              >
                Kabin Sınıfı
              </Text>
              <Text
                style={[
                  headerModalTab == 1
                    ? styles.choosenHeaderSubtitle
                    : styles.headerSubtitle,
                ]}
              >
                Ekonomi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {headerModalTab === 0 ? (
        <View style={{marginTop: 15}}>
          <PassengerTypeRow
            userType={"Yetişkin"}
            userTypeAmount={1}
          ></PassengerTypeRow>
          <PassengerTypeRow
            userType={"Çocuk"}
            userTypeDescription={"(2 - 12 Yaş Arası)"}
            userTypeAmount={0}
          ></PassengerTypeRow>
          <PassengerTypeRow
            userType={"Bebek"}
            userTypeDescription={"(0 - 2 Yaş Arası)"}
            userTypeAmount={0}
          ></PassengerTypeRow>
          <PassengerTypeRow
            userType={"65 yaş üstü"}
            userTypeAmount={0}
          ></PassengerTypeRow>
          <PassengerTypeRow
            userType={"Öğrenci"}
            userTypeDescription={"(12 - 24 Yaş Arası)"}
            userTypeAmount={0}
          ></PassengerTypeRow>
        </View>
      ) : (
        <View>
          <FlightTypeRow flightOptions={flightOptions}></FlightTypeRow>
        </View>
      )}
      {/* <Text>{flightOptions}</Text> */}

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          padding: 20,
        }}
      >
        <View style={styles.okButtonContainer}>
          <Button
            title="Tamam"
            onPress={() => {
              console.log("TAMAM");
            }}
            buttonStyle={styles.buttonModal}
          />
        </View>
      </View>
    </View>
  );
};

export default PassengerTypeModal;
