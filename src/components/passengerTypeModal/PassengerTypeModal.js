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
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.5,
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
            <Text style={styles.headerTitle}>Tolcu Sayısı</Text>
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
            <Text style={styles.headerTitle}>Kabin Sınıfı</Text>
          </TouchableOpacity>
        </View>
      </View>

      {headerModalTab === 0 ? (
        <View>
          <PassengerTypeRow userType={"Yetişkin"}></PassengerTypeRow>
          <PassengerTypeRow
            userType={"Çocuk"}
            userTypeDescription={"(2 - 12 Yaş Arası)"}
          ></PassengerTypeRow>
          <PassengerTypeRow
            userType={"Bebek"}
            userTypeDescription={"(0 - 2 Yaş Arası)"}
          ></PassengerTypeRow>
          <PassengerTypeRow userType={"65 yaş üstü"}></PassengerTypeRow>
          <PassengerTypeRow
            userType={"Öğrenci"}
            userTypeDescription={"(12 - 24 Yaş Arası)"}
          ></PassengerTypeRow>
        </View>
      ) : (
        <View >
          <FlightTypeRow></FlightTypeRow>
        </View>
      )}

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
