function AddClass() {
  return (
    <form action="" className="flex flex-col justify-between h-full">
      <div className="flex gap-2">
        <span className="w-[70%]">
          <label htmlFor="" className="text-gray-700">
            Course Name
          </label>
          <input type="text" placeholder="e.g. Intro to Programming" />
        </span>
        <span className="w-[30%]">
          <label htmlFor="" className="text-gray-700">
            CRN
          </label>
          <input type="number" placeholder="e.g. 1234" />
        </span>
      </div>
      <div className="flex gap-2 mt-2 w-full items-center">
        <span className="w-[20%]">
          <label htmlFor="" className="text-gray-700">
            Location
          </label>
          <select className="text-lg text-gray-700">
            <option value="">HMPH</option>
          </select>
        </span>
        <span className="w-[20%]">
          <label htmlFor="" className="text-gray-700">
            Room
          </label>
          <input type="text" placeholder="e.g. 208" />
        </span>
        <span className="w-[60%]">
          <label htmlFor="" className="text-gray-700">
            Instructor
          </label>
          <input type="text" placeholder="e.g. John Ledger" />
        </span>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="w-[50%]">
          <label htmlFor="" className="text-gray-700">
            Start
          </label>
          <input type="time" />
        </span>
        <span className="w-[50%]">
          <label htmlFor="" className="text-gray-700">
            End
          </label>
          <input type="time" />
        </span>
        <span className="w-[50%]">
          <label htmlFor="" className="text-gray-700">
            Credit
          </label>
          <input type="number" placeholder="e.g. 3" />
        </span>
      </div>

      <div className="flex gap-1 mt-2">
        <span className="w-full">
          <label htmlFor="" className="text-gray-700">
            Days
          </label>
          <span className="flex gap-4 ml-1 mt-2">
            <span className="flex gap-2">
              <input type="checkbox" className="" />
              <label htmlFor="" className="text-lg text-gray-700">
                Mon
              </label>
            </span>
            <span className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="" className="text-lg text-gray-700">
                Tue
              </label>
            </span>
            <span className="flex gap-2">
              <input type="checkbox" className="" />
              <label htmlFor="" className="text-lg text-gray-700">
                Wed
              </label>
            </span>
            <span className="flex gap-2 ">
              <input type="checkbox" className="" />
              <label htmlFor="" className="text-lg text-gray-700">
                Thu
              </label>
            </span>
            <span className="flex gap-2">
              <input type="checkbox" className="" />
              <label htmlFor="" className="text-lg text-gray-700">
                Fri
              </label>
            </span>
          </span>
        </span>
      </div>
      <div className="flex justify-end">
        <button className="bg-red-400 px-5 rounded-2xl font-semibold text-white py-2.5 cursor-pointer hover:scale-105 duration-100 hover:shadow-xl block">
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddClass
