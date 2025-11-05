import Select from "react-select";

export function UserIdDropdown({ setFormData, clientId }) {
  const options = [
    { value: "caiqueludemann60738053309", label: "caiqueludemann60738053309" },
    { value: "elainesample09265187808", label: "elainesample09265187808" },
    { value: "joaopaulo87327499930", label: "joaopaulo87327499930" },
  ];

  function updateUserId(option) {
    setFormData((prevState) => {
      return {
        ...prevState,
        clientId: option ? option.value : "",
      };
    });
  }

  const currentValue = options.find((option) => {
    return option.value === clientId;
  });
  console.log(clientId);
  return (
    <Select
      onChange={updateUserId}
      className="min-w-100 col-span-2"
      options={options}
      value={currentValue}
      isSearchable
    />
  );
}
