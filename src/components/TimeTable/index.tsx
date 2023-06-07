import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";

export const TimeTable = () => {
  const [selected, setSelected] = useState("");

  const markedDates = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: "orange",
    },
  };
  // Configuração do idioma
  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan.",
      "Fev.",
      "Mar.",
      "Abr.",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    today: "Hoje",
  };
  LocaleConfig.defaultLocale = "pt-br";
  return (
    <>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={markedDates}
          style={styles.calendar}
          theme={{
            textDayFontWeight: "bold",
            textDayHeaderFontSize: 24,
            textDayFontSize: 24, // Fonte dos números
          }}
        />
      </View>
      <View style={styles.calendarText}>
        <Text>Anderson</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  calendarContainer: {
    flex: 3,
    width: "100%",
    border: 0,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  calendar: {
    flex: 1,
    minWidth: 450,
    maxwidth: 550,
    height: "100%",
    border: 0,
    // backgroundColor: "aqua",
    marginLeft: 0,
    marginRight: 0,
  },
  calendarText: {
    flex: 1,
    fontSize: 26,
    backgroundColor: "#e7dce1",
    width: "100%",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
