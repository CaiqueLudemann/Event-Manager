export function NewEventTypeForm() {
  return (
    <div className=" bg-sky-50 rounded-lg p-2 border border-sky-200">
      <h2 className="pl-8 pb-4 text-center font-semibold ">
        Create New Client
      </h2>
      <div className="max-w-3xl mx-auto bg-sky-100 rounded-lg shadow-md p-8 grid grid-cols-2 gap-6">
        {/* Name */}
        <div className="sm:col-span-2">
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="event-type"
          >
            Event Type
          </label>
          <input
            className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="event-type"
            type="text"
            placeholder="e.g., House Party"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
            className="w-1/2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-all"
            type="button"
          >
            Add Event Type
          </button>
        </div>
      </div>
    </div>
  );
}
