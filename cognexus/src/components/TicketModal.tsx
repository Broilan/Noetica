import React, { useState } from 'react';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (ticketData: TicketData) => void;
}

interface TicketData {
  type: string;
  customType?: string;
  description: string;
  email: string;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [ticketType, setTicketType] = useState('');
  const [customType, setCustomType] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketData: TicketData = {
      type: ticketType === 'custom' ? customType : ticketType,
      description,
      email,
    };
    if (ticketType === 'custom') {
      ticketData.customType = customType;
    }
    onSubmit(ticketData);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleBackdropClick}>
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Submit a Ticket</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields remain the same */}
          <div className="mb-4">
            <label htmlFor="ticketType" className="block mb-2">Ticket Type:</label>
            <select
              id="ticketType"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a type</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="support">Support</option>
              <option value="custom">Other (specify)</option>
            </select>
          </div>
          {ticketType === 'custom' && (
            <div className="mb-4">
              <label htmlFor="customType" className="block mb-2">Specify Type:</label>
              <input
                type="text"
                id="customType"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketModal;