"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../../components/navbar";
import Footer from "@/components/footer";

export default function detailVenue() {
  const params = useParams();
  const { id_venue } = params;
  return (
    <div>
      <Navbar/>
      <h1>Detail Venue</h1>
      <p>ID Venue: {id_venue}</p>
      <Footer/>
    </div>
  )
}