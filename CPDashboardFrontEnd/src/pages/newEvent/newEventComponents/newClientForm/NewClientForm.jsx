export function NewClientForm({
  newClientFormData,
  setNewClientFormData,
  submitNewClientForm,
}) {
  function updateNewClientFormData(event) {
    setNewClientFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
        newClientId: prevState.newClientName + prevState.newClientCPF,
      };
    });
  }

  return (
    <div className="mt-6 bg-sky-50 rounded-lg p-2 border border-sky-200">
      <h2 className="pl-8 pb-4 text-center font-semibold ">
        Create New Client
      </h2>
      <div className="max-w-3xl mx-auto bg-sky-100 rounded-lg shadow-md p-8 grid grid-cols-2 gap-6">
        {/* Name */}
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required
            className="w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="name"
            name="newClientName"
            type="text"
            value={newClientFormData.newClientName}
            onChange={updateNewClientFormData}
            placeholder="John Doe"
          />
        </div>

        {/* CPF */}
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="cpf"
          >
            CPF/CNPJ
          </label>
          <input
            required
            className="w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="cpf"
            type="text"
            name="newClientCPF"
            value={newClientFormData.newClientCPF}
            onChange={updateNewClientFormData}
            placeholder="564.234.234-09"
          />
        </div>

        {/* Date */}
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="date"
          >
            Date of Birth
          </label>
          <input
            required
            className="w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="date"
            type="date"
            name="newClientDoB"
            value={newClientFormData.newClientDoB}
            onChange={updateNewClientFormData}
          />
        </div>

        {/* Phone */}
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            required
            className="w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="phone"
            type="tel"
            name="newClientTel"
            value={newClientFormData.newClientTel}
            onChange={updateNewClientFormData}
            placeholder="(85) 98618-0875"
          />
        </div>

        {/* Email */}
        <div className="col-span-2">
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            required
            className="w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="email"
            type="email"
            // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
            name="newClientEmail"
            value={newClientFormData.newClientEmail}
            onChange={updateNewClientFormData}
            placeholder="caiqueludemann@gmail.com"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
            onClick={submitNewClientForm}
            className="w-1/2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-all"
            type="button"
          >
            Submit Client
          </button>
        </div>
      </div>
    </div>
  );
}
