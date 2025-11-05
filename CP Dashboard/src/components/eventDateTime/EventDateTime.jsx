export function EventDateTime({ formData, updateFormData }) {
  return (
    <>
      <section className="flex flex-col items-start min-h-50 justify-around gap-y-5">
        <h2 className="font-semibold text-lg mb-5">Date & Time</h2>
        <div className="flex">
          <label className="" htmlFor="event-date">
            Date of Event
          </label>
          <input
            className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="event-date"
            name="eventDate"
            value={formData.eventDate}
            onChange={updateFormData}
            type="date"
          />
        </div>
        <div className="flex gap-10">
          <label className="" htmlFor="start-time">
            Start Time
          </label>
          <input
            className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="start-time"
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={updateFormData}
          />
        </div>
        <div className="flex gap-10">
          <label className="" htmlFor="end-time">
            End Time
          </label>
          <input
            className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            id="end-time"
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={updateFormData}
          />
        </div>
      </section>
    </>
  );
}
