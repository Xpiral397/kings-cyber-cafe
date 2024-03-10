import { ComponentStarter } from "@/components/Starter";
import aboutus from "@/public/svgs/aboutUs.svg";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <ComponentStarter
        imageSrc={aboutus}
        text=<h1 className="font-[Roboto] px-20 text-center justify-center mt-40 text-slate-100 font-[700] text-4xl">
          About Us
        </h1>
      />
      <div className="justify-center inline-block w-full text-center">
        {children}
      </div>
    </section>
  );
}
