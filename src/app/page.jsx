

export default function Home() {
  return (
  <>
   <div className="relative w-full max-w-md mt-5">
      <input
        type="text"
        placeholder="Enter Email Here"
        className="w-full p-3  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="absolute top-1/2 right-0 -translate-y-1/2 bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600">
        Subscribe
      </button>
    </div>
  </>
  );
}
