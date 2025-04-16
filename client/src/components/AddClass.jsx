import { useState } from "react"

const defaultAddClassForm = {
  courseName: "",
  crn: 0,
  location: "",
  room: 0,
  instructor: "",
  start: "",
  end: "",
  credit: 0,
  day: [],
}

function AddClass() {
  const [addClassForm, setAddClassForm] = useState(defaultAddClassForm)
  const { courseName, crn, location, room, instructor, start, end, credit } =
    addClassForm

  const handleAddClassSubmit = (e) => {
    e.preventDefault()
    console.log(addClassForm)
  }
  return (
    <form
      className="flex flex-col justify-between h-full"
      onSubmit={handleAddClassSubmit}
    >
      <div className="flex gap-2">
        <span className="w-[70%]">
          <label htmlFor="" className="text-gray-700">
            Course Name
          </label>
          <input
            type="text"
            required
            value={courseName}
            placeholder="e.g. Intro to Programming"
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                courseName: e.target.value,
              })
            }
          />
        </span>
        <span className="w-[30%]">
          <label htmlFor="" className="text-gray-700">
            CRN
          </label>
          <input
            type="number"
            required
            placeholder="e.g. 1234"
            value={crn}
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                crn: e.target.value,
              })
            }
          />
        </span>
      </div>
      <div className="flex gap-2 mt-2 w-full items-center">
        <span className="w-[20%]">
          <label htmlFor="" className="text-gray-700">
            Location
          </label>
          <select
            className="text-lg text-gray-700"
            required
            value={location}
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                location: e.target.value,
              })
            }
          >
            <option value="HMPH">HMPH</option>
          </select>
        </span>
        <span className="w-[20%]">
          <label htmlFor="" className="text-gray-700">
            Room
          </label>
          <input
            type="text"
            placeholder="e.g. 208"
            required
            value={room}
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                room: e.target.value,
              })
            }
          />
        </span>
        <span className="w-[60%]">
          <label htmlFor="" className="text-gray-700">
            Instructor
          </label>
          <input
            type="text"
            placeholder="e.g. John Ledger"
            value={instructor}
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                instructor: e.target.value,
              })
            }
          />
        </span>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="w-[50%]">
          <label htmlFor="" className="text-gray-700">
            Start
          </label>
          <input
            type="time"
            value={start}
            required
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                start: e.target.value,
              })
            }
          />
        </span>
        <span className="w-[50%]">
          <label htmlFor="" className="text-gray-700">
            End
          </label>
          <input
            type="time"
            value={end}
            required
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                end: e.target.value,
              })
            }
          />
        </span>
        <span className="w-[50%]">
          <label htmlFor="" className="text-gray-700">
            Credit
          </label>
          <input
            type="number"
            required
            placeholder="e.g. 3"
            value={credit}
            onChange={(e) =>
              setAddClassForm({
                ...addClassForm,
                credit: e.target.value,
              })
            }
          />
        </span>
      </div>

      <div className="flex gap-1 mt-2">
        <span className="w-full">
          <label htmlFor="" className="text-gray-700">
            Days
          </label>
          <span className="flex gap-4 ml-1 mt-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <span key={day} className="flex gap-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={addClassForm.day.includes(day)}
                  onChange={(e) => {
                    const selectedDay = e.target.value
                    setAddClassForm((prevForm) => ({
                      ...prevForm,
                      day: e.target.checked
                        ? [...prevForm.day, selectedDay]
                        : prevForm.day.filter((d) => d !== selectedDay),
                    }))
                  }}
                />
                <label htmlFor="" className="text-lg text-gray-700">
                  {day}
                </label>
              </span>
            ))}
          </span>
        </span>
      </div>
      <div className="flex justify-end">
        <button className="bg-red-500 px-5 rounded-2xl font-semibold text-white py-2.5 cursor-pointer hover:shadow-xl">
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddClass
