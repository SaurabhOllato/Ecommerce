import React from 'react'

export default function ManageProducts() {
  return (
<div class="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
  <h2 class="text-2xl font-bold mb-6 text-gray-800">Manage Products</h2>

  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Image</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Price</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Stock</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Category</th>
          <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        {/* <!-- Example row --> */}
        <tr class="hover:bg-gray-50 transition">
          <td class="px-4 py-3">
            <img src="/Bracelet.jpeg" alt="Product" class="w-14 h-14 object-cover rounded-lg" />
          </td>
          <td class="px-4 py-3 text-gray-800 font-medium">Elegant Ring</td>
          <td class="px-4 py-3 text-gray-700">₹499</td>
          <td class="px-4 py-3 text-gray-700">25</td>
          <td class="px-4 py-3 text-gray-700">Rings</td>
          <td class="px-4 py-3 text-center">
            <button class="text-blue-600 hover:underline mr-4">Edit</button>
            <button class="text-red-600 hover:underline">Delete</button>
          </td>
        </tr>

        {/* <!-- Repeat <tr> for each product --> */}
      </tbody>
    </table>
  </div>
</div>
  )
}
