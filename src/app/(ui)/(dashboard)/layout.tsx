import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <section className="h-screen flex">
      <article className="w-[14%] md:w-[8%] lg:w-[16%]">
        <Menu />
      </article>
      <article className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA] overflow-scroll">
        {children}
      </article>
    </section>
    </>
  )
}
