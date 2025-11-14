const Contact = () => {
  return (
    <main>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or
        partnership inquiries, reach out anytime.
      </p>

      <form>
        <label>Your Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Your Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message:</label>
        <textarea placeholder="Type your message here..."></textarea>
        <button>Send Message</button>
      </form>

      <section>
        <p>
          <strong>Email:</strong> support@bestcard.com
        </p>
        <p>
          <strong>Phone:</strong> (636) 515-4567
        </p>
        <p>
          <strong>FaceBook:</strong> Facebook/bestcard.com
        </p>
        <p>
          <strong>Instagram:</strong> Bestcard$
        </p>
      </section>
    </main>
  );
};

export default Contact;
