import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">IoT Dashboard</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Connect Device
          </button>
        </div>
      </header>

      <main className="container mx-auto py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Device 1</h2>
            <p className="text-gray-600 mt-2">Temperature: 23°C</p>
            <p className="text-gray-600">Status: <span className="text-green-600">Online</span></p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Device 2</h2>
            <p className="text-gray-600 mt-2">Humidity: 45%</p>
            <p className="text-gray-600">Status: <span className="text-red-600">Offline</span></p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Device Data Logs</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">Data logs from connected IoT devices will appear here...</p>
          </div>
        </section>
      </main>
    </div>
  );
}
