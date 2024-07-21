import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <section class="pt-20 md:pt-40">
      <div class="container mx-auto px-8 lg:flex">
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Equilibrio y bienestar a tu alcance.
          </h1>
          <p class="text-base lg:text-xl mt-6 font-light">
            Descubre el camino hacia una vida equilibrada y llena de bienestar.
          </p>
          <p class="mt-8 md:mt-12">
            <button
              type="button"
              class="py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded-full text-white"
            >
              Reserva ahora
            </button>
          </p>
        </div>

        <div class="lg:w-1/2">
          <StaticImage
            alt="anggi home"
            className="max-w-full h-[27.5rem] rounded-tr-[70px] rounded-bl-[70px] shadow-lg"
            src="https://images.unsplash.com/photo-1647334355585-68254b6157a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwd29ya2luZ3xlbnwwfDB8MHx8fDI%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
