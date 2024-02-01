import { useState } from "react";
import { TextInput } from "./text-input";

export const RequestInsurance = ({title = "Request Insurance"}) => {
  const [isPopupShown, setPopupShown] = useState(false);
  const [form, setForm] = useState<any>({});

  if (!title) {
    return <></>;
  }

  return (<div className="mt-8 flex justify-center">
    {isPopupShown && <div
      className="fixed h-full w-full flex justify-center items-center left-0 top-0 z-50"
      onClick={() => setPopupShown(false)}
    >
      <div
        className="h-5/6 overflow-y-auto w-3/5 flex flex-col bg-white flex rounded-lg border py-4 p-8 items-stretch justify-between justify-items-stretch"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-center text-lg font-semibold mb-4">Request Insurance for Your Location</div>

        <div className="w-4/5 self-center">
          <div className="flex justify-between">
            <div><TextInput value={form.firstName} onChange={(firstName) => setForm({ ...form, firstName})} label="First name" /></div>
            <div><TextInput value={form.lastName} onChange={(lastName) => setForm({ ...form, lastName})} label="Last name" /></div>
          </div>
          <div><TextInput value={form.email} onChange={(email) => setForm({ ...form, email})} label="Email" /></div>
          <div><TextInput value={form.phone} onChange={(phone) => setForm({ ...form, phone})} label="Phone" /></div>
          <div className="flex justify-between">
            <div><TextInput value={form.country} onChange={(country) => setForm({ ...form, country})} label="Country" /></div>
            <div><TextInput value={form.region} onChange={(region) => setForm({ ...form, region})} label="Region" /></div>
          </div>
          <div><TextInput value={form.crop} onChange={(crop) => setForm({ ...form, crop})} label="Crop" /></div>
        </div>

        <div className="flex justify-evenly mt-8">
          <div
            onClick={() => setPopupShown(false)}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Send
          </div>

        <div
          onClick={() => setPopupShown(false)}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Cancel
        </div>
      </div>
      </div>
      </div>
    }

    <div className="inline-flex rounded-md shadow">
      <div
        onClick={() => setPopupShown(true)}
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {title}
      </div>
    </div>
  </div>)
}