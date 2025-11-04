export function NewClientForm() {
  const labelStyles = "mr-3";
  const inputStyles =
    " rounded-sm w-200 p-2 border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto";
  return (
    <>
      <div className="flex h-auto gap-5 min-w-200 p-6 bg-sky-200 mx-auto flex-col">
        <div>
          <label className={labelStyles} htmlFor="name">
            Name
          </label>
          <input
            className={inputStyles}
            id="name"
            type="text"
            placeholder="John Doe"
          />

          <label className={labelStyles} htmlFor="cpf">
            CPF
          </label>
          <input
            className={inputStyles}
            id="cpf"
            type="text"
            placeholder="564.234.234-09"
          />

          <label className={labelStyles} htmlFor="date">
            Date
          </label>
          <input
            className={inputStyles}
            id="date"
            type="date"
            placeholder="mm/dd/yy"
          />

          <label className={labelStyles} htmlFor="phone">
            Phone Number
          </label>
          <input
            className={inputStyles}
            id="phone"
            type="tel"
            placeholder="(85)986180875"
          />

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

        <button
          className="bg-sky-500 hover:cursor-pointer hover:bg-sky-700 w-50 rounded-lg px-8 py-4 mx-auto text-white font-extrabold "
          type="button"
        >
          Submit Client
        </button>
      </div>
    </>
  );
}
