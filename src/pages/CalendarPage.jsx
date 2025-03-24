import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar"

import { TrendingUp } from "lucide-react";
export default function CalendarPage() {
  const [date, setDate] = React.useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
}
