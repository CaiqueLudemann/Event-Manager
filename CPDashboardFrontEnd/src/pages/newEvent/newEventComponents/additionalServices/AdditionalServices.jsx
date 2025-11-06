export function AdditionalServices({ updateFormDataWithServices }) {
  return (
    <>
      <fieldset className="space-y-6">
        <legend className="text-base font-semibold text-gray-900">
          Additional Services
        </legend>

        {[
          {
            id: "barman",
            label: "Barman",
            description: "full-time barman fully equipped.",
            price: "100",
          },
          {
            id: "waiter",
            label: "Waiter",
            description:
              "No need to be running around, the waiter will attend to the guests.",
            price: "150",
          },
          {
            id: "chef",
            label: "Chef",
            description: "All the client needs to worry about is enjoying.",
            price: "200",
          },
          {
            id: "cleaner",
            label: "Cleaner",
            description: "Janitor to keep everythin tidy throughout event.",
            price: "100",
          },
        ].map(({ id, label, description, price }) => (
          <div key={id} className="flex items-start gap-3">
            <input
              id={id}
              name={id}
              type="checkbox"
              // defaultChecked={id === "barman"}
              onChange={() => updateFormDataWithServices(id, price)}
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
        ))}
      </fieldset>
    </>
  );
}
