export default function Signup() {
  return (
    <main>
      <h2>Create an Account</h2>
      <form>
        <label>First Name:</label>
        <input type="text" placeholder="Enter your first name" /><br/>

        <label>Last Name:</label>
        <input type="text" placeholder="Enter your last name" /><br/>

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" /><br/>

        <label>Password:</label>
        <input type="password" placeholder="Create a password" /><br/>

        <label>Confirm Password:</label>
        <input type="password" placeholder="Retype the password" /><br/><br/>

        <button>Sign Up</button>
        <p>Already have an account? <a href="/login">Login here</a>.</p>
        
      </form>
    </main>
  );
}
