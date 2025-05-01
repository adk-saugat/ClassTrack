import { useContext } from "react"
import { ClassContext } from "../context/ClassContext"
import convertTime from "convert-time"
import { MdDelete } from "react-icons/md"

function Schedule() {
  const { classes } = useContext(ClassContext)

  return (
    <div className="text-darkgray">
      {classes.length === 0 ? (
        <div className="flex justify-center ">
          <span className="font-light text-xl">No Classes Found!</span>
        </div>
      ) : (
        <div className="w-full">
          <div className="px-2 pb-2 flex">
            <h2 className="text-xl font-medium">Added Classes</h2>
          </div>
          <div className="">
            {classes.map(
              ({ _id, courseName, start, end, location, room }, index) => (
                <div
                  key={_id}
                  className={`hover:bg-gray-200 p-2 duration-100 flex cursor-pointer overflow-hidden ${
                    index !== classes.length - 1 && "border-b"
                  } border-gray-300`}
                >
                  <h3 className="text-md w-[40%]">{courseName}</h3>
                  <h3 className="text-sm text-gray-600 w-[30%]">
                    {convertTime(start)} - {convertTime(end)}
                  </h3>
                  <h3 className="text-sm text-gray-600 w-[20%]">
                    {location} {room}
                  </h3>
                  <MdDelete
                    size={25}
                    className="w-[10%] text-red-500 hover:scale-120 duration-100"
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Schedule
