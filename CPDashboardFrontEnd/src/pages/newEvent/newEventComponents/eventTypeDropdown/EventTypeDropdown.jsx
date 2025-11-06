import Select from "react-select";

export function EventTypeDropdown({
  eventTypeList,
  updateEventType,
  eventType,
}) {
  if (!eventTypeList) return null;
  const options = eventTypeList.map((event) => {
    const [key, value] = Object.entries(event)[0];
    return {
      value: key,
      label: value,
    };
  });

  // const options = [
  //   { value: "Birthday", label: "Birthday" },
  //   { value: "Corporate Reunion", label: "Corporate Reunion" },
  //   { value: "Party", label: "Party" },
  // ];

  const currentValue =
    options.find(
      (option) => option.value === eventType.replace(/ /g, "").toLowerCase()
    ) || null;

  return (
    <Select
      value={currentValue}
      onChange={(option) =>
        updateEventType({
          name: "eventType",
          value: option ? option.value : "",
        })
      }
      name="eventType"
      className="min-w-100 col-span-2"
      options={options}
      isSearchable
    />
  );
}
