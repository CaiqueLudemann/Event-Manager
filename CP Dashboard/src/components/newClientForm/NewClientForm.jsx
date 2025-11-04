export function NewClientForm() {
  const labelStyles = "block mb-1 text-sm font-medium text-gray-700";
  const inputStyles =
    "w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500";

  return (
    <div className="mt-6 bg-sky-50 rounded-lg p-2 border border-sky-200">
      <div className="max-w-3xl mx-auto bg-sky-100 rounded-lg shadow-md p-8 grid grid-cols-2 gap-6">
        {/* Name */}
        <div className="col-span-2 sm:col-span-1">
          <label className={labelStyles} htmlFor="name">
            Name
          </label>
          <input
            className={inputStyles}
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>

        {/* CPF */}
        <div className="col-span-2 sm:col-span-1">
          <label className={labelStyles} htmlFor="cpf">
            CPF/CNPJ
          </label>
          <input
            className={inputStyles}
            id="cpf"
            type="text"
            placeholder="564.234.234-09"
          />
        </div>

        {/* Date */}
        <div className="col-span-2 sm:col-span-1">
          <label className={labelStyles} htmlFor="date">
            Date of Birth
          </label>
          <input className={inputStyles} id="date" type="date" />
        </div>

        {/* Phone */}
        <div className="col-span-2 sm:col-span-1">
          <label className={labelStyles} htmlFor="phone">
            Phone Number
          </label>
          <input
            className={inputStyles}
            id="phone"
            type="tel"
            placeholder="(85) 98618-0875"
          />
        </div>

        {/* Email */}
        <div className="col-span-2">
          <label className={labelStyles} htmlFor="email">
            Email
          </label>
          <input
            className={inputStyles}
            id="email"
            type="email"
            placeholder="caiqueludemann@gmail.com"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
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
