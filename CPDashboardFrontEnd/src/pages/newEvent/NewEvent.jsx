import { useEffect, useState } from "react";
import { UserIdDropdown } from "./newEventComponents/userIdDropdown/UserIdDropdown";
import { EventTypeDropdown } from "./newEventComponents/eventTypeDropdown/EventTypeDropdown";
import { NewClientForm } from "./newEventComponents/newClientForm/NewClientForm";
import { NewEventTypeForm } from "./newEventComponents/newEventTypeForm/NewEventTypeForm";
import { EventDateTime } from "./newEventComponents/eventDateTime/EventDateTime";
import { Bill } from "./newEventComponents/bill/Bill";
import { AdditionalServices } from "./newEventComponents/additionalServices/AdditionalServices";
import axios from "axios";
// import crypto from "crypto"

export function NewEvent() {
  const [isAddingClient, setIsAddingClient] = useState(false);
  // this state is only to run useState to fetch updated client list upon submission of new client form
  const [refreshClientListTrigger, setRefreshClientListTrigger] = useState(0);
  const [refreshEventTypeListTrigger, setRefreshEventTypeListTrigger] =
    useState(0);
  const [isAddingEventType, setIsAddingEventType] = useState(false);
  const [newEventType, setNewEventType] = useState("");
  const [eventTypeList, setEventTypeList] = useState([]);
  const [clientList, setClientList] = useState(null);

  // server-oriented functions:
  async function getClientList() {
    // I added a url proxy to package.json
    const response = await axios.get("http://localhost:8000/client-list");
    setClientList(response.data);
  }

  async function getEventTypesList() {
    const response = await axios.get("http://localhost:8000/event-types");
    setEventTypeList(response.data);
  }

  const [formData, setFormData] = useState({
    clientId: "",
    rentalCharge: 0,
    serviceCharges: 0,
    eventType: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    additionalServices: {
      barman: { selected: false, price: 100 },
      waiter: { selected: false, price: 150 },
      chef: { selected: false, price: 200 },
      cleaner: { selected: false, price: 100 },
    },
    paymentMethod: "",
    isDone: false,
  });

  const [newClientFormData, setNewClientFormData] = useState({
    newClientName: "",
    newClientCPF: "",
    newClientId: "",
    newClientDoB: "",
    newClientTel: "",
    newClientEmail: "",
  });

  useEffect(() => {
    getClientList();
    getEventTypesList();
  }, [refreshClientListTrigger, refreshEventTypeListTrigger]);

  // useEffect(() => {
  //   if (isAddingClient) {
  //     setNewClientFormData((prevState) => {
  //       return {
  //         ...prevState,
  //         newClientId:
  //           newClientFormData.newClientName + newClientFormData.newClientCPF,
  //       };
  //     });
  //   }
  // }, [newClientFormData.newClientName, newClientFormData.newClientCPF]);

  function toggleIsAddingClient() {
    setIsAddingClient((prev) => !prev);
  }

  function toggleIsAddingEventType() {
    setIsAddingEventType((prev) => !prev);
  }

  function updateEventType(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.name]: e.value,
      };
    });
  }

  function updateFormData(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function updateFormDataWithServices(id, price) {
    setFormData((prevData) => {
      const updatedServices = {
        ...prevData.additionalServices,
        [id]: {
          selected: !prevData.additionalServices[id].selected,
          price: Number(price),
        },
      };

      const totalServiceCharge = Object.values(updatedServices)
        .filter((s) => s.selected)
        .reduce((sum, s) => sum + s.price, 0);

      return {
        ...prevData,
        additionalServices: updatedServices,
        serviceCharges: totalServiceCharge,
      };
    });
  }

  async function submitNewClientForm(e) {
    e.preventDefault();

    // checks if all the key values of the form are filled out
    // EXCEPT for newClientId, seeing it is automatically filled out AFTER
    // the user sends his info for the system to create the ID.
    let isFormComplete = true;
    for (let item in newClientFormData) {
      if (!newClientFormData[item]) {
        if (item !== "newClientId") {
          isFormComplete = false;
        }
      }
    }
    if (isFormComplete) {
      await axios.post("http://localhost:8000/new-client", {
        // server is adding clientId
        clientName: newClientFormData.newClientName,
        clientCPF: newClientFormData.newClientCPF,
        clientDoB: newClientFormData.newClientDoB,
        clientTel: newClientFormData.newClientTel,
        clientEmail: newClientFormData.newClientEmail,
      });
      setRefreshClientListTrigger((n) => n + 1);
      toggleIsAddingClient();

      // console.log(newClientFormData);
      // post with axios to add to dbClientList in backend
    } else {
      alert("You must fill out all fields to create new client.");
    }
  }

  async function updateNewEventType(e) {
    setNewEventType(e.target.value);
  }

  async function submitNewEventType() {
    if (newEventType) {
      console.log(newEventType);
      await axios.post("http://localhost:8000/new-event-type", {
        [newEventType.replace(/ /g, "").toLowerCase()]: newEventType,
      });
      setRefreshEventTypeListTrigger((n) => n + 1);
      toggleIsAddingEventType();
      return;
    } else {
      alert("Must fill out event type before submitting.");
    }
  }

  function submitNewEventForm() {
    if (!isAddingClient) {
      console.log(formData);
      return;
    }
    alert("Either submit or cancel new client registration.");
  }

  // console.log("test");

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
            <UserIdDropdown
              clientList={clientList}
              clientId={formData.clientId}
              setFormData={setFormData}
              id="userId"
            />

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

          {isAddingClient && (
            <NewClientForm
              submitNewClientForm={submitNewClientForm}
              newClientFormData={newClientFormData}
              setNewClientFormData={setNewClientFormData}
            />
          )}
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
            <EventTypeDropdown
              eventTypeList={eventTypeList}
              eventType={formData.eventType}
              updateEventType={updateEventType}
              id="event-type"
              name="event-type"
            />

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
        {isAddingEventType && (
          <NewEventTypeForm
            submitNewEventType={submitNewEventType}
            newEventType={newEventType}
            updateNewEventType={updateNewEventType}
          />
        )}
      </div>

      <div className="border-t border-gray-200 pt-8 space-y-10">
        <EventDateTime formData={formData} updateFormData={updateFormData} />
      </div>

      {/*Adittional Services */}
      <div className="border-t border-gray-200 pt-8 space-y-10">
        <AdditionalServices
          updateFormDataWithServices={updateFormDataWithServices}
        />
      </div>

      <div className="border-t border-gray-200 pt-8 space-y-10">
        <Bill
          paymentMethod={formData.paymentMethod}
          serviceCharges={formData.serviceCharges}
          rentalCharge={formData.rentalCharge}
          setFormData={setFormData}
        />
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
          onClick={submitNewEventForm}
          type="button"
          className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 shadow-sm transition-colors"
        >
          Save Event
        </button>
      </div>
    </form>
  );
}
