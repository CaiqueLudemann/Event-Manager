import Select from "react-select";
import CurrencyInput from "react-currency-input-field";

export function Bill({ serviceCharges, rentalCharge, setFormData }) {
  // Store the charge as a number (e.g., 100 or 100.25)

  // Function signature adjusted for react-currency-input-field
  function updateRentalCharge(value) {
    setFormData((prevData) => {
      return {
        ...prevData,
        rentalCharge: Number(value) || 0,
      };
    });
  }

  // Calculate total charge as a number
  const totalChargeNumeric = serviceCharges + rentalCharge;

  // Format the total charge only when displaying it
  const formattedTotalCharge = totalChargeNumeric.toFixed(2);

  const options = [
    { value: "Pix", label: "Pix" },
    { value: "Debit", label: "Debit" },
    { value: "Credit", label: "Credit" },
    { value: "Cash", label: "Cash" },
  ];

  return (
    <section className="flex flex-col gap-5">
      <div className="flex w-100 gap-10 items-center">
        <label htmlFor="rental-charge">Rental Charge</label>
        <CurrencyInput
          className=" w-full rounded-md p-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          value={rentalCharge}
          onValueChange={updateRentalCharge} // This handler now works correctly
          decimalsLimit={2}
          groupSeparator="."
          decimalSeparator=","
          placeholder="R$0,00"
          prefix="R$"
          id="rental-charge"
          // type="text" is implicit and standard for this component
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
        <Select options={options} isSearchable />
      </div>
    </section>
  );
}
