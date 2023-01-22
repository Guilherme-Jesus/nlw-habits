import React from "react";
import { ScrollView, Text, View } from "react-native";
import HabitDay, { DAY_SIZE } from "../components/HabitDay";
import Header from "../components/Header";
import generateDaysFromYearBegin from "../utils/generate-days-from-year-begin";
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const daysFromYearsBegin = generateDaysFromYearBegin();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - daysFromYearsBegin.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 m-2">
        {weekDays.map((day, i) => (
          <Text
            key={`${day}-${i}`}
            className="text-zinc-400 font-bold text-xl text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {day}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {daysFromYearsBegin.map((day) => (
            <HabitDay key={day.toISOString()} />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <View
                key={i}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
