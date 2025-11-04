import { useState } from "react";
import { UserIdDropdown } from "../../components/userIdDropdown/UserIdDropdown";
import { EventTypeDropdown } from "../../components/eventTypeDropdown/EventTypeDropdown";
import { NewClientForm } from "../../components/newClientForm/NewClientForm";
import { NewEventTypeForm } from "../../components/newEventTypeForm/NewEventTypeForm";
import { EventDateTime } from "../../components/eventDateTime/EventDateTime";

export function NewEvent() {
  const [isAddingClient, setIsAddingClient] = useState(false);
  const [isAddingEventType, setIsAddingEventType] = useState(false);

  function toggleIsAddingClient() {
    setIsAddingClient((prev) => !prev);
  }

  function toggleIsAddingEventType() {
    setIsAddingEventType((prev) => !prev);
  }

  return (
    <form className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-10 mt-8 space-y-12">
      {/*Header */}
      <div className="border-b border-gray-200 pb-8">
        <h2 className="text-3xl font-bold text-gray-900">New Event</h2>
        <p className="mt-2 text-gray-600 text-base">
          Fill out the form below to schedule a new event.
        </p>
      </div>

      {/*Client + Event Type */}
      <div className="grid gap-10">
        {/* User ID + Add Client */}
        <div>
          <label
            htmlFor="userId"
            className="text-lg block font-semibold text-gray-900 mb-2"
          >
            Client
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <UserIdDropdown id="userId" name="userId" />

            <button
              type="button"
              onClick={toggleIsAddingClient}
              className={`${
                isAddingClient
                  ? "bg-red-600 text-white hover:bg-red-500 w-30"
                  : "bg-sky-500 text-white hover:bg-sky-700 w-30"
              } px-4 py-2 rounded-lg font-semibold transition-colors`}
            >
              {isAddingClient ? "Cancel" : "New Client"}
            </button>
          </div>

          {isAddingClient && <NewClientForm />}
        </div>

        {/*Event Type + Add Type */}
        <div>
          <label
            htmlFor="event-type"
            className="text-lg block font-semibold text-gray-900 mb-2"
          >
            Event Type
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <EventTypeDropdown id="event-type" name="event-type" />

            <button
              type="button"
              onClick={toggleIsAddingEventType}
              className={`${
                isAddingEventType
                  ? "bg-red-600 text-white hover:bg-red-500 w-30"
                  : "bg-sky-500 text-white hover:bg-sky-700 w-30"
              } px-4 py-2 rounded-lg font-semibold transition-colors`}
            >
              {isAddingEventType ? "Cancel" : "New Type"}
            </button>
          </div>
        </div>
        {isAddingEventType && <NewEventTypeForm />}
      </div>

      <div className="border-t border-gray-200 pt-8 space-y-10">
        <EventDateTime />
      </div>

      {/*Adittional Services */}
      <div className="border-t border-gray-200 pt-8 space-y-10">
        <fieldset className="space-y-6">
          <legend className="text-base font-semibold text-gray-900">
            Additional Services
          </legend>

          {[
            {
              id: "barman",
              label: "Barman",
              description: "full-time barman fully equipped.",
            },
            {
              id: "waiter",
              label: "Waiter",
              description:
                "No need to be running around, the waiter will attend to the guests.",
            },
            {
              id: "chef",
              label: "Chef",
              description: "All the client needs to worry about is enjoying.",
            },
            {
              id: "cleaner",
              label: "Cleaner",
              description: "Janitor to keep everythin tidy throughout event.",
            },
          ].map(({ id, label, description }) => (
            <div key={id} className="flex items-start gap-3">
              <input
                id={id}
                name={id}
                type="checkbox"
                defaultChecked={id === "barman"}
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
      </div>

      {/*Footer Buttons */}
      <div className="flex justify-end gap-4 border-t border-gray-200 pt-8">
        <button
          type="button"
          className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 shadow-sm transition-colors"
        >
          Save Event
        </button>
      </div>
    </form>
  );
}
