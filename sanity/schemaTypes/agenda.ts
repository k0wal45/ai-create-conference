import { Rule } from "sanity";

export const agenda = {
  name: "agenda",
  title: "Agenda",
  type: "document",

  fields: [
    {
      name: "startTime",
      title: "Godzina Rozpoczęcia",
      type: "string",
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (Rule: Rule) => Rule.required().error("Pamiętaj o tym polu!"),
    },
    {
      name: "endTime",
      title: "Godzina Zakończenia",
      type: "string",
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (Rule: Rule) => Rule.required().error("Pamiętaj o tym polu!"),
    },
    {
      name: "info",
      title: "Informacje",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Pamiętaj o tym polu!"),
    },
    {
      name: "hall",
      title: "Która część",
      type: "string",
      options: {
        list: [
          { title: "Konferencja", value: "Konferencja" },
          { title: "Warsztaty", value: "warszaty" },
        ],
      },
      validation: (Rule: Rule) => Rule.required().error("Pamiętaj o tym polu!"),
    },
  ],
};

// A function that generates an array of times from 00:00 to 23:30
export function ALLOWED_TIMES() {
  const times = [];
  for (let h = 8; h < 19; h++) {
    for (let m = 0; m < 60; m += 5) {
      times.push(
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
      );
    }
  }
  return times;
}
