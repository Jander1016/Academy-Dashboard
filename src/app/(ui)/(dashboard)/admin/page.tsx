import { CountChart } from "@/components/CountChart"
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
          <div className="w-full lg:w-1/3 h-[450px] bg-white">
            <CountChart />
          </div>
          <div className="w-full lg:w-1/3 h-[450px]">

          </div>
        </article>
      </section>
      <section className="w-full lg:w-1/3">
      </section>
    </section>
  )
}

export default AdminPage