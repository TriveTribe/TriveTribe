import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Username
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            className="mr-2"
          />
          <label htmlFor="notifications" className="font-bold">
            Receive Notifications
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="timezone" className="block font-bold mb-1">
            Timezone
          </label>
          <select
            id="timezone"
            name="timezone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="GMT">GMT</option>
            <option value="EST">EST</option>
            <option value="PST">PST</option>
            <option value="CST">CST</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
