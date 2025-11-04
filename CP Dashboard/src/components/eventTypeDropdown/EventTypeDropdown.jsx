import Select from "react-select";

export function EventTypeDropdown() {
  const options = [
    { value: "Birthday", label: "Birthday" },
    { value: "Corporate Reunion", label: "Corporate Reunion" },
    { value: "Party", label: "Party" },
  ];

  return (
    <Select className="min-w-100 col-span-2" options={options} isSearchable />
  );
}
