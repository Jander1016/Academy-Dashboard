import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <section className="p-4 flex gap-4 flex-col md:flex-row">
      <section className="w-full lg:w-2/3 flex flex-col gap-8">
        <article className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Estudiante" />
          <UserCard type="Interesado" />
          <UserCard type="Padres" />
          <UserCard type="Profesores" />
        </article>
        <article className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </article>
        <article className="w-full h-[500px]">
          <FinanceChart />
        </article>
      </section>
      <section className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </section>
    </section>
  )
}

export default AdminPage