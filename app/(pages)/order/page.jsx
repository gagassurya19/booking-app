import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DaftarKamar = () => {
  const kamarTersedia = [
    { id: 1, nama: "Kamar Standar", harga: 500000, kapasitas: 2, fasilitas: ["TV", "AC", "Wi-Fi"] },
    { id: 2, nama: "Kamar Deluxe", harga: 750000, kapasitas: 2, fasilitas: ["TV", "AC", "Wi-Fi", "Minibar"] },
    { id: 3, nama: "Suite", harga: 1200000, kapasitas: 4, fasilitas: ["TV", "AC", "Wi-Fi", "Minibar", "Ruang Tamu"] },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Daftar Kamar</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Kamar Tersedia</h2>
          <div className="flex space-x-4">
            <Input placeholder="Cari kamar..." className="w-64" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="harga-terendah">Harga Terendah</SelectItem>
                <SelectItem value="harga-tertinggi">Harga Tertinggi</SelectItem>
                <SelectItem value="kapasitas">Kapasitas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kamarTersedia.map((kamar) => (
            <Card key={kamar.id}>
              <CardHeader>
                <CardTitle>{kamar.nama}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">Rp {kamar.harga.toLocaleString('id-ID')}/malam</p>
                <p>Kapasitas: {kamar.kapasitas} orang</p>
                <ul className="mt-2">
                  {kamar.fasilitas.map((fasilitas, index) => (
                    <li key={index} className="text-sm text-gray-600">✓ {fasilitas}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pesan Sekarang</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DaftarKamar;
