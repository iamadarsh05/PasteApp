import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    toast.success("Paste deleted");
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-6">

      <h1 className="text-2xl font-bold text-center">Your Pastes</h1>

      <input
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="search"
        placeholder="Search pastes by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste?._id} className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm space-y-2">
              
              <div className="text-lg font-semibold">{paste.title}</div>
              <div className="text-gray-700 break-words">{paste.content}</div>

              <div className="flex flex-wrap gap-3 mt-3">
                
                <a
                  href={`/?pasteId=${paste?._id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </a>

                <a
                  href={`/pastes/${paste?._id}`}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  View
                </a>

                <button
                  onClick={() => handleDelete(paste?._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                  }}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Copy
                </button>

                <button
                  onClick={() => toast.success("Share functionality coming soon!")}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                >
                  Share
                </button>
              </div>

              <div className="text-sm text-gray-500 mt-2">Created at: {paste.createdAt}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-6">No pastes found.</div>
        )}
      </div>
    </div>
  );
};

export default Paste;
