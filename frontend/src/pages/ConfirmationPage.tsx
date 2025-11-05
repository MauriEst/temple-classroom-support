import { useNavigate } from 'react-router-dom'

export default function ConfirmationPage() {
  const navigate = useNavigate()

  return (
    <div className="confirmation-page">
      <div className="confirmation-content">
        <h1>Support Request Submitted!</h1>
        <p>
          Thank you for submitting your classroom support request. Our team has been
          notified and will address your issue as soon as possible.
        </p>
        <button
          onClick={() => navigate('/submit')}
          className="new-request-button"
        >
          Submit Another Request
        </button>
      </div>

      <style>{`
        .confirmation-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background-color: #f9fafb;
        }

        .confirmation-content {
          max-width: 32rem;
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #059669;
          margin-bottom: 1rem;
          font-size: 1.875rem;
        }

        p {
          color: #4b5563;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .new-request-button {
          background-color: #059669;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .new-request-button:hover {
          background-color: #047857;
        }
      `}</style>
    </div>
  )
}