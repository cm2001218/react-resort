import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious" subtitle="deluxe rooms starting at $299">
          <Link className="btn-primary" to="/rooms">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms></FeaturedRooms>
    </>
  );
}
