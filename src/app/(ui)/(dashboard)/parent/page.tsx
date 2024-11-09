import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import 'react-big-calendar/lib/css/react-big-calendar.css'

const ParentPage = () => {
  return (
    <section className="flex-1 p4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <article className="w-full xl:w-2/3">
        <div className="bg-white h-full p-4 rounded-md">
          <h1 className="text-xl font-semibold">Programación (Hijo)</h1>
          <BigCalendar />
        </div>

      </article>
      {/* RIGHT */}
      <section className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </section>
    </section>
  )
}

export default ParentPage