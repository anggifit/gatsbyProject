import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <section className="pt-20 md:pt-40 flex justify-center">
      <div className="container mx-auto px-8 lg:flex justify-center">
        <div className="text-center lg:text-left lg:w-1/2 pb-[10.375rem]">
          <h1 className="leading-normal">
            Equilibrio y bienestar a tu alcance.
          </h1>
          <p className="mt-6">
            Descubre el camino hacia una vida equilibrada y llena de bienestar.
          </p>
          <p className="mt-8 md:mt-12">
            <button
              type="button"
              className="py-4 px-12 bg-atlantis-500 hover:bg-atlantis-600 rounded-full"
              style={{ color: 'white' }}
            >
              Reserva ahora
            </button>
          </p>
        </div>
        <div className="text-center">
          <StaticImage
            alt="anggi home"
            className="w-[33.75rem] h-[27.5rem] rounded-tr-[60px] rounded-bl-[60px] shadow-lg"
            src="https://images.unsplash.com/photo-1647334355585-68254b6157a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwd29ya2luZ3xlbnwwfDB8MHx8fDI%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
