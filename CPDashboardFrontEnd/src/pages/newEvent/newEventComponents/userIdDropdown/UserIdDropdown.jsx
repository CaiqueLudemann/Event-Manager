import Select from "react-select";

export function UserIdDropdown({ clientList, setFormData, clientId }) {
  // const options = [
  //   { value: "caiqueludemann60738053309", label: "caiqueludemann60738053309" },
  //   { value: "elainesample09265187808", label: "elainesample09265187808" },
  //   { value: "joaopaulo87327499930", label: "joaopaulo87327499930" },
  // ];
  if (!clientList) return null;
  const options = clientList.map((client) => {
    return {
      value: client.clientId,
      label: client.clientId,
    };
  });

  function updateUserId(option) {
    setFormData((prevState) => {
      return {
        ...prevState,
        clientId: option ? option.value : "",
      };
    });
  }

  const currentValue = options.find((option) => {
    return option.clientId === clientId;
  });

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
