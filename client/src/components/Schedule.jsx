import { useContext } from "react"
import { ClassContext } from "../context/ClassContext"

function Schedule() {
  const { classes } = useContext(ClassContext)

  return (
    <table className="w-full">
      <tr>
        <th>Course Name</th>
      </tr>
      {classes.map(({ _id, courseName }) => (
        <tr key={_id} className="p-4 border-b border-gray-300">
          <td>{courseName}</td>
        </tr>
      ))}
    </table>
  )
}

export default Schedule
