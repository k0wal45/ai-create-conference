"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

interface Speech {
  startTime: string;
  endTime: string;
  info: string;
  hall: string;
}

const getAgenda = async (option: string) => {
  const EVENTS_QUERY = `*[ _type == "agenda"] {
      startTime,
      endTime,
      info,
      hall
  }`;

  const agenda = await client.fetch(EVENTS_QUERY);
  return agenda.filter((item: Speech) => item.hall === option);
};

const sortByStartTime = (agenda: Speech[]) => {
  return agenda.sort((a, b) => {
    const parseTime = (time: string) => {
      const [hours, minutes] = time.split(".").map(Number);
      return hours * 60 + minutes;
    };

    const timeA = parseTime(a.startTime);
    const timeB = parseTime(b.startTime);

    return timeA - timeB;
  });
};

const AgendaElement = ({ option }: { option: string }) => {
  const [agenda, setAgenda] = useState<Speech[]>([]);

  useEffect(() => {
    const fetchAgenda = async () => {
      const data = await getAgenda(option);
      setAgenda(sortByStartTime(data));
      console.log(data);
    };

    fetchAgenda();
  }, [option]);

  return (
    <div>
      {agenda.length > 0 ? (
        agenda.map((item, index) => (
          <div key={index}>
            <p>{item.info}</p>
            <p>
              {item.startTime} - {item.endTime}
            </p>
            <p>Hall: {item.hall}</p>
          </div>
        ))
      ) : (
        <p>No agenda available</p>
      )}
    </div>
  );
};

export default AgendaElement;
