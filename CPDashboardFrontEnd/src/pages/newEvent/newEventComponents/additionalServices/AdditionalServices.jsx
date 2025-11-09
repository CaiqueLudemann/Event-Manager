export function AdditionalServices({ servicesState, updateServices }) {
  const servicesOptions = [
    {
      id: "barman",
      label: "Barman",
      description: "full-time barman fully equipped.",
      price: 100.0,
    },
    {
      id: "waiter",
      label: "Waiter",
      description:
        "No need to be running around, the waiter will attend to the guests.",
      price: 150.0,
    },
    {
      id: "chef",
      label: "Chef",
      description: "All the client needs to worry about is enjoying.",
      price: 200.0,
    },
    {
      id: "cleaner",
      label: "Cleaner",
      description: "Janitor to keep everythin tidy throughout event.",
      price: 100.0,
    },
  ];

  return (
    <>
      <fieldset className="space-y-6">
        <legend className="text-base font-semibold text-gray-900">
          Additional Services
        </legend>

        {servicesOptions.map(({ id, label, description, price }) => {
          const isChecked = servicesState[id]?.selected || false;

          return (
            <div
              key={id}
              className="border-b flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <input
                  id={id}
                  name={id}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => updateServices(id, price)}
                  className="mt-1 size-4 border-gray-300 rounded text-sky-600 focus:ring-sky-500"
                />
                <div>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-900"
                  >
                    {label}
                  </label>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                R$ {price.toFixed(2)}
              </span>
            </div>
          );
        })}
      </fieldset>
    </>
  );
}
