import Select from "react-select";
import CurrencyInput from "react-currency-input-field";

export function Bill({
  serviceCharges,
  rentalCharge,
  setFormData,
  paymentMethod,
}) {
  const options = [
    { value: "Pix", label: "Pix" },
    { value: "Debit", label: "Debit" },
    { value: "Credit", label: "Credit" },
    { value: "Cash", label: "Cash" },
  ];

  function updateRentalCharge(value) {
    setFormData((prevData) => {
      return {
        ...prevData,
        rentalCharge: Number(value) || 0,
      };
    });
  }

  const currentPaymentOption = options.find((option) => {
    return option.value === paymentMethod;
  });

  function updatePaymentMethod(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        paymentMethod: e.value,
      };
    });
  }

  // Calculate total charge as a number
  const totalChargeNumeric = serviceCharges + rentalCharge;

  // Format the total charge only when displaying it
  const formattedTotalCharge = totalChargeNumeric.toFixed(2);

  console.log(paymentMethod);
  return (
    <section className="flex flex-col gap-5">
      <div className="flex w-100 gap-10 items-center">
        <label htmlFor="rental-charge">Rental Charge</label>
        <CurrencyInput
          className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          value={rentalCharge}
          onValueChange={updateRentalCharge}
          decimalsLimit={2}
          groupSeparator="."
          decimalSeparator=","
          placeholder="R$0,00"
          prefix="R$"
          id="rental-charge"
        />
      </div>
      <div className="flex w-100 gap-10 items-center">
        <label htmlFor="total-charge">Total Charge</label>
        <h2 className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
          R${formattedTotalCharge}
        </h2>
      </div>
      <div className="flex gap-10 items-center">
        <label htmlFor="">Payment Method</label>
        <Select
          onChange={(e) => updatePaymentMethod(e)}
          value={currentPaymentOption}
          options={options}
          isSearchable
        />
      </div>
    </section>
  );
}
