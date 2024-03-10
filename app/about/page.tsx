"use client";
import { title } from "@/components/primitives";
import { Button, ScrollShadow } from "@nextui-org/react";
import Footer from "@/components/footer";

interface Values {
  title: string;
  description: string;
  src: string;
}
export default function AboutPage() {
  const Values: Values[] = [
    {
      title: "Innovation",
      description:
        "We embrace technology to constantly innovate and enhance your digital journey",
      src: "https://s3-alpha-sig.figma.com/img/c471/a3de/e1871a08df118918a834e8c1f3d926d1?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWA03T2-FbCy8-NqML1s6C9BtMUuCXzTfg2mLiWY6-E0j1C24coXL7sUi85f6D9Gx77FM9dTRSeeuPSsi72F7ICCImU~3EpwqvpaeihEEtfIFClKuBFz0Vk4KMtpI-HQ77lKwYqF~hSsNYnK5RlJjOp2CcPeHd4XGoTJCspfRiDa-hGBcfH4wlJnb6wmTkNFjx2dxVIb9dR8x583-ZLa-ni7xRjzNKp6W3yT6fRTj5xI6IXNKk-mJbuJQEm4CSG03FfZK4Rlmq34HvrMOtk2K5kxtakuSrLm95sWOqIg2g3Gfa-TGnhlGnOgwlCuQ~Pswu2RySHJlsIbk9derY518A__",
    },
    {
      title: "Customer-Centricity",
      description:
        "Your satisfaction is at the core of everything we do. We listen, we adapt, and we deliver.",
      src: "https://s3-alpha-sig.figma.com/img/5fe2/d834/546ac1c819d3cbc343a0dc925dea373a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQZgWweV4WNj9mP30oSB3eGW8k0DHfln3rSCxPe2~oFo4Qm1u1WdeOZhfiQKQ1X49NLMtdiMaX91gZ71YQRmu-zqurJsMS7uqRUm0ttcPfvh3aYGAXu6GmaNfvqY293AQWvQsKSPfkv5UC3Cw~pXu7Rbicl4TTtAeiBdIw7eU6XilMh6-hkDHrds3SwINdTmUw8hDTSUEM5bd7iaVozS~-8gD7RQDwpJm-WumMAPUKX6TShSv87eGn0LkPd7WHFSJ4YX1G~tGdE-o20Qs03LYsYxcssy~q7q-pQYapIEA19cj~jIPmn0nSyMnq4xMVONWOG6YzPyMpU~y1ncMrXQdA__",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with the highest level of integrity, ensuring transparency and trust",
      src: "https://s3-alpha-sig.figma.com/img/fd8d/4032/28cc92da26859e0a56bb02e0fdcb9710?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB9BjExskaAMiT~EBc5cxk6q4wk45SzxnrYqlNja64cQcP4YMRQKDlc4N9P4lcKwsoWMckp5fGmY8FNcuC57Gz8KlEdNNenZvCwUYulWD0WYWrXyBWpaEdvJkQF0-MIpOqzMlf1VUSGS80etxqCmWx-DAriv8x-wPBccDWn2oXle-VXdM4fm3T9C73tzJkCtEuylbsmr-FHyjtZ7huU8DS1B6tpb3XD8cCCSWiw~cZUY5mZ9upCVvp1L6qi1F2dtcfC5osv-K~mgS6xTsW7rv8cGFPmMiqSsdrA0lzSjsk~-q9YXy23JvL22~qYf9bLk6TmbjdyALL-WADCbm5J2Og___",
    },
  ];
  return (
    <div className="w-full ">
      <section>
        <h1 className={title()}>About King's Online Cyber Cafe</h1>
        <p className="w-full mt-10 text-sm text-center sm:px-20">
          Welcome to King's Online Cyber Cafe, where the digital world meets
          unparalleled service excellence. We're not just an online cyber cafe;
          we're architects of seamless digital experiences, and here's our
          story:
        </p>
      </section>

      <main className="relative w-full h-full ">
        <section
          className="absolute top-0 w-full h-full mt-10 opacity-10"
          style={{
            background: `url(
            "https://s3-alpha-sig.figma.com/img/e5a9/9b71/df3cbb5ddf7d4f21bf087578ae414588?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gcq8MqDhedgoKm9HziL2pUOghkmMHsdtbkxkxMrge5t74VLrM4VNjBErJyONwtSAAStWV9m~Kux1DNuN3FTuzNJQ97x~o5N5ebIdhs6umoGiKKh2ZX3eBtj496U3bvTJUAG9K4Jb-v7mvXX40NUuj6sb8S-XM1d6POj1LydvpdERwAn650tnBbTuGo1k1SMjkoyDbKNYXr7CkaI17ilvky4OwWMmuMLojR9IymMRLSfp4UKgCAmRe3iZVuGux2Ee1QivZvbwqUhic8pco1aOPv7impi01gTdDAgXdLac9FEdsULEt5XGNanp2sciZykEh5ye3cqbVMxOC~R~hapzjQ__"
          )`,
          }}
        ></section>
        <article className="w-full h-full mt-10 space-y-20">
          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3dd7/ac02/359566e3a3ec9e8a4ed6c5925d491de5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A0bOvr~ILRKxCR4wVIzhfmful-ltLTZt9u47XgIorMkD7lUC5BznuUM-rKKCoNm6JV4iijT-eBzG8g-tAknKoM2y5555L~KLjNxA1YBCqB1pp2ROObiK1eO4gWVzp-xcZ9LtpCfX-8DFJS9qkzEDHQ59g1xEw5QJT2EqSiEzk3Oowro9Ckd871TER-c7GldL7CF9V8pNju~a8oIY~I70Ltiwo2BODR4CTXxe3vzpbw0KsktN7sv504aJEox4RLXDFIewVfQbO-Qx~twbk6tF7UBrAvNut5OOut84Wya8bo5WCBqEI9s1L7sUvodb51y10MHx2yr4hkOFWpYyXjFv6A__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5bb2/0147/c1175c8e7e838c322b664de8e2b9820e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBZCpXdxqD~RuQnpcRY0d-R0NiYOcnerDtRhaYo~LhmMwDvcczOEo-ZdPX20CiqiwOwBKXddFMSb21zy0QtiRaKEYHolWjKv4EUjoLQRlS8fFgoqcJfuLOXZvjsbHcVWDvVbF7ydVJstXx7oJV8NI07R8l0EpC8BilKlEykGeWCf1PPVQdOaxbQuOzMOS0cAkiTFETSxQ3wk47k4TelaMsQm-42wZP~U-oK7w1k4eH1Aw7SPQD0IiMAwreFnYjrw3-3q6Qo4grIm1tH0er~IFNB3sHjQJ8ppjg~9GJIwYPW7selgwrgBuP0jv7MzFtUQeviGNV~T2RSfwRCI2z8Fwg__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>

                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5e7b/dc8c/242f309b7bcae596e6d16d018f0b83ea?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFIl113x-7XfnbAKqz9btrQ2B7tVAy1RRIijj100xk1n2-X8H1npvYsZ94OIi-7sHVYJCqT~B~brWSlexUqXoSMPCuXWiYNIz8KYrFv7pZHpvdAI~PFdPgXGUCtJuiVLrkf6g-gdDWHo4EPZMY1pq5woTGoz3VRN5vlI0EjTnMAQDfupIn9ab4HB5imF6kTH5KgBse~3f1Hx8l01OeI3TIp3heeERPn52YQ~hJYuKsaD0nElEfidLagDRcQ3ktJasDHMMKR4Dj-oxckbMGO2czkBk9Pp-DtGfex~zSQajAVFw1KE4oI06grQps9Zfy82kYalZqMIL79-Ctq02zupVA__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <ScrollShadow
            className="flex justify-around w-full h-full mt-32 mb-32 overflow-y-hidden "
            orientation="horizontal"
          >
            {Values.map((values) => {
              return (
                <div className="relative  h-[330px] ">
                  <img
                    src={values.src}
                    className="rounded-md min-w-[300px] w-[500px] h-[330px]"
                  />
                  <div className="bg-gradient-to-t from-slate-900 via-slate-900 to-transparent absolute  top-[60%] mb-5 z-[100] w-full h-full">
                    <div className="px-10 space-y-3 text-left">
                      <h1 className="text-white font-[600] text-[16px]">
                        {values.title}
                      </h1>
                      <p className="text-sm text-left text-slate-100">
                        {values.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollShadow>

          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3dd7/ac02/359566e3a3ec9e8a4ed6c5925d491de5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A0bOvr~ILRKxCR4wVIzhfmful-ltLTZt9u47XgIorMkD7lUC5BznuUM-rKKCoNm6JV4iijT-eBzG8g-tAknKoM2y5555L~KLjNxA1YBCqB1pp2ROObiK1eO4gWVzp-xcZ9LtpCfX-8DFJS9qkzEDHQ59g1xEw5QJT2EqSiEzk3Oowro9Ckd871TER-c7GldL7CF9V8pNju~a8oIY~I70Ltiwo2BODR4CTXxe3vzpbw0KsktN7sv504aJEox4RLXDFIewVfQbO-Qx~twbk6tF7UBrAvNut5OOut84Wya8bo5WCBqEI9s1L7sUvodb51y10MHx2yr4hkOFWpYyXjFv6A__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>

                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/dd7e/3866/748fe7049b16fc5801a6a22a5ae68241?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1AjP0Zc4cZJis5xHPxzReexj0T9b0epJks97HCk8Gp319fKmaXk7xk-Iv7pHPTiISXLybmiMNshEi8ATAJjQuAwigBztjixJiuFnC0EOoyTXzVMcZQxARfqQbqdwJExlQietWN-cZbHDd7-b4YtINshyt1pctoKRzWgrSusjAAPivlFub6HA5E4nQ6GYKKPTVXm0YW3EcK7ZTNWo~6yOrZs8~ar1v9RlXzVvJN9PoAGQxu1Z5aF4XEh8keA4dJZ7l3kWjQAQ7JOUUVi9Gyp64yKOqkorKdl8g4dALOTdNe4-nvF6XQeIZQLwdc-PQ3dO528XyyGsUFjPL3DGhBWpQ__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d972/5b41/1ae17dc8b4d7146ddc43b019383efcd2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLYOfeButYMP5Db1L~PUVibIN2GESu~jkA5uJZRjoqCg~lgtzE3qCIQQ9w9dSn8OoLNwsf3LRpjYLZIQSEzXdZl7nB~jO~2WVZJmDSVZ2UQN5LY-S2OXYGNyLC0a58qkg4VGOJVDxgyTQZVb5ssXfzGabojYqPAEPS~f3SA~Z4xFHBMspb~3MwX2xzUXdOkhD7Qw4f1YOpBiB3Xer1PScTCVYk165xvWCXAYALNEdKU9aTMybJBUKDSSOMaa70cQHbjIqIbxhdYstYvHvfMGRmCcvml~HnNhidhjps96ZYutlGQuDld3CH4xvkcGhg6n0X3jQyTfzL2ondnugmQrwA__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>

                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1c4d/a4c7/a1af8059c4e7b2253192f996bc2763f3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ol5TTW1pfDXbf1-EyFDnj6dTR5t0N1VLCRDYBZyvQ7MJRy8goVov-A5hSv7AZ5EAw6kKwBiBobiY-yPpNjuCKH-Gx1fxMvh9mDm7rBkwRTcrIx13Mnf6jPDpm~Ob6yemj4Y~tHoU9~~rUNV6i3z5OMsSX04Mz6~ia0VAUhe34iiDBAh1R7ghsKCnR3epOU5mWaiG1EFssdezCO4TiOhtKilSoOsvT5rHuN5-mnUfToaJe6Qql5hESI8cAAeWnm5VbqjatxBdp7S-2qDCYqLoWFuyGL~nmQ0l7YlLKIEXYHepAUZ7psqIrOxv7RiiPlHZXFj25oVVuzVCe67hqtB6mw__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full space-y-20">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-around w-full sm:flex-row ">
                <section className="lg:max-h-[400px] xl:max-h-[500px] overflow-y-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/dc14/cf4c/964d977f745ccca5377857bd407b1e10?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iq0MHXE7u7QSUww23WDF67sNzt-rVM4PwlvCZZ6deYZYaFicGqd7OaVrBdll8mW0Bhk2-gs-DyR-~3bIQ4xwKzmr83m~I-4OGUsft7w6QoU5vFzJAyaAx5GIvhDDYu5KDfsVJe5EL7LjtF-EYdjRvj7mo2vBwOyPJoFhvliDCSTTWnt--mGmRIfdB6oXC0v7~d9vkbUU-R6F4dR-mt9wA7DKkXJxp3kAurOeKa2y52arFgGi6VBVLkmcv5cm-NHArUeWrSrR3gHTV1UdtvURNsqP21Cck4M2vfwNAbO9fQpKCzi04Y5kR69RD-0U9V1gfSBwxG-9dZM9W04J17SkmQ__"
                    className="relative rounded-md  max-h-[450px] md:h-[350px] xl:h-[500px] lg:h-[400px] " // Adjust quality as needed
                  />
                </section>
                <section className="hidden space-y-5 text-left md:block ">
                  <h1 className="font-[Roboto] font-[700] md:text-4xl  lg:text-5xl text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>

                <section className="flex flex-col items-center justify-center w-full space-y-5 text-center sm:hidden ">
                  <h1 className="text-center font-[Roboto] font-[700] text-2xl">
                    Who We Are
                  </h1>
                  <p className="font-[sans-serif, Helvetic, Roboto] md:w-[400px] lg:w-[550px] w-full sm:px-0 px-1 text-left md:text-[17px] lg:text-[18px] xl:text-[24px] font-[450]">
                    King's Online Cyber Cafe is more than a service provider;
                    we're a community of tech enthusiasts, visionist, and
                    go-getters. Our journey began with a simple yet powerful
                    idea — to redefine the cyber cafe experience in the digital
                    age.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
        <div className="flex items-center justify-center w-full ">
          <Button
            className="font-[500] py-2 flex justify-center bg-[#AEEE2E] w-[300px] px-10 mt-10"
            endContent={
              <div>
                <svg
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0938 21.4998H17.9375C18.4446 21.4989 18.9425 21.3955 19.382 21.1997C19.8215 21.004 20.1874 20.7227 20.4432 20.3838C20.6991 20.0449 20.8362 19.6601 20.8408 19.2675C20.8455 18.875 20.7176 18.4883 20.4698 18.1458C20.8246 17.9702 21.1259 17.7371 21.3528 17.4624C21.5797 17.1878 21.7268 16.8783 21.7839 16.5553C21.841 16.2323 21.8068 15.9036 21.6836 15.5918C21.5604 15.2801 21.3512 14.9928 21.0704 14.7498C21.4193 14.4497 21.6569 14.0822 21.7582 13.6861C21.8594 13.2901 21.8206 12.8802 21.6459 12.4998H28.5938C30.1961 12.4998 31.5 11.4903 31.5 10.2498C31.5 9.00932 30.1961 7.99982 28.5938 7.99982H16.6452L19.4856 3.87482C19.8321 3.39873 19.9434 2.84134 19.7986 2.30646C19.6538 1.77159 19.2628 1.29569 18.6985 0.967409C18.1341 0.639129 17.4349 0.480845 16.731 0.522038C16.0271 0.563231 15.3666 0.801092 14.8724 1.19132L14.8511 1.20932L8.25 6.81482V5.74982C8.25 5.55091 8.14794 5.36014 7.96626 5.21949C7.78458 5.07884 7.53818 4.99982 7.28125 4.99982H1.46875C1.21182 4.99982 0.965416 5.07884 0.783739 5.21949C0.602064 5.36014 0.5 5.55091 0.5 5.74982V20.7498C0.5 20.9487 0.602064 21.1395 0.783739 21.2802C0.965416 21.4208 1.21182 21.4998 1.46875 21.4998H7.28125C7.53818 21.4998 7.78458 21.4208 7.96626 21.2802C8.14794 21.1395 8.25 20.9487 8.25 20.7498V19.7133L12.6597 21.4203C12.7944 21.4728 12.943 21.5 13.0938 21.4998ZM5.34375 19.9998C5.08682 19.9998 4.84042 19.9208 4.65874 19.7802C4.47706 19.6395 4.375 19.4487 4.375 19.2498C4.375 19.0509 4.47706 18.8601 4.65874 18.7195C4.84042 18.5788 5.08682 18.4998 5.34375 18.4998C5.60068 18.4998 5.84708 18.5788 6.02876 18.7195C6.21044 18.8601 6.3125 19.0509 6.3125 19.2498C6.3125 19.4487 6.21044 19.6395 6.02876 19.7802C5.84708 19.9208 5.60068 19.9998 5.34375 19.9998ZM13.3224 19.9998L8.25 18.0363V9.04082L16.2771 2.22482C16.4439 2.09239 16.6681 2.01238 16.9065 2.00016C17.145 1.98794 17.3808 2.04438 17.5688 2.15863C17.7567 2.27288 17.8835 2.43687 17.9247 2.61909C17.966 2.80132 17.9188 2.98891 17.7922 3.14582L14.1768 8.39582C14.0976 8.51 14.0581 8.63815 14.0621 8.7677C14.0661 8.89726 14.1135 9.0238 14.1996 9.13492C14.2857 9.24605 14.4077 9.33796 14.5534 9.40166C14.6992 9.46536 14.8639 9.49867 15.0312 9.49832H28.5938C28.8507 9.49832 29.0971 9.57734 29.2788 9.71799C29.4604 9.85864 29.5625 10.0494 29.5625 10.2483C29.5625 10.4472 29.4604 10.638 29.2788 10.7787C29.0971 10.9193 28.8507 10.9983 28.5938 10.9983H18.9062C18.6493 10.9983 18.4029 11.0773 18.2212 11.218C18.0396 11.3586 17.9375 11.5494 17.9375 11.7483C17.9375 11.9472 18.0396 12.138 18.2212 12.2787C18.4029 12.4193 18.6493 12.4983 18.9062 12.4983C19.1632 12.4983 19.4096 12.5773 19.5913 12.718C19.7729 12.8586 19.875 13.0494 19.875 13.2483C19.875 13.4472 19.7729 13.638 19.5913 13.7787C19.4096 13.9193 19.1632 13.9983 18.9062 13.9983C18.6493 13.9983 18.4029 14.0773 18.2212 14.218C18.0396 14.3586 17.9375 14.5494 17.9375 14.7483C17.9375 14.9472 18.0396 15.138 18.2212 15.2787C18.4029 15.4193 18.6493 15.4983 18.9062 15.4983C19.1632 15.4983 19.4096 15.5773 19.5913 15.718C19.7729 15.8586 19.875 16.0494 19.875 16.2483C19.875 16.4472 19.7729 16.638 19.5913 16.7787C19.4096 16.9193 19.1632 16.9983 18.9062 16.9983H17.9375C17.6806 16.9983 17.4342 17.0773 17.2525 17.218C17.0708 17.3586 16.9688 17.5494 16.9688 17.7483C16.9688 17.9472 17.0708 18.138 17.2525 18.2787C17.4342 18.4193 17.6806 18.4983 17.9375 18.4983C18.1944 18.4983 18.4408 18.5773 18.6225 18.718C18.8042 18.8586 18.9062 19.0494 18.9062 19.2483C18.9062 19.4472 18.8042 19.638 18.6225 19.7787C18.4408 19.9193 18.1944 19.9983 17.9375 19.9983H13.3224V19.9998Z"
                    fill="#040707"
                  />
                </svg>
              </div>
            }
          >
            {" "}
            Get Started Here{" "}
          </Button>
        </div>
        <div className="mt-10 ">
          <Footer />
        </div>
      </main>
    </div>
  );
}
