import Select from "react-select";

export function EventTypeDropdown({ updateEventType, eventType }) {
  const options = [
    { value: "Birthday", label: "Birthday" },
    { value: "Corporate Reunion", label: "Corporate Reunion" },
    { value: "Party", label: "Party" },
  ];

  const currentValue =
    options.find((option) => option.value === eventType) || null;

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
