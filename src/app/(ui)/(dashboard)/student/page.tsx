import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <section className="flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <article className="w-full xl:w-2/3">
        <div className="bg-white h-full p-4 rounded-md">
          <h1 className="text-xl font-semibold">Programación (4A)</h1>
          <BigCalendar />
        </div>

      </article>
      {/* RIGHT */}
      <section className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </section>
    </section>
  )
}

export default StudentPage