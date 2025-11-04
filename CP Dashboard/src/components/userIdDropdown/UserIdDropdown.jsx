import Select from "react-select";

export function UserIdDropdown() {
  const options = [
    { value: "caiqueludemann60738053309", label: "caiqueludemann60738053309" },
    { value: "elainesample09265187808", label: "elainesample09265187808" },
    { value: "joaopaulo87327499930", label: "joaopaulo87327499930" },
  ];

  return <Select className="col-span-2" options={options} isSearchable />;
}
