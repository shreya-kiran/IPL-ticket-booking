function AuthPage() {
  const [toast, setToast] = useState('');

  // Input States
  const [signUpUser, setSignUpUser] = useState('');
  const [signUpPass, setSignUpPass] = useState('');

  const [signInUser, setSignInUser] = useState('');
  const [signInPass, setSignInPass] = useState('');

  const [profileName, setProfileName] = useState('');
  const [profileGender, setProfileGender] = useState('');

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. SIGN UP HANDLER (Inserts into 'users_auth' table)
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    const { data, error } = await supabase
      .from('users_auth')
      .insert([{ username: signUpUser, password: signUpPass }]);

    if (error) {
      triggerToast(`Sign Up Error: ${error.message}`);
    } else {
      triggerToast('Sign up successfully created!');
      setSignUpUser('');
      setSignUpPass('');
    }
  };

  // 2. SIGN IN HANDLER (Queries 'users_auth' table)
  const handleSignIn = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('users_auth')
      .select('*')
      .eq('username', signInUser)
      .eq('password', signInPass)
      .maybeSingle();

    if (error) {
      triggerToast(`Sign In Error: ${error.message}`);
    } else if (!data) {
      triggerToast('Invalid username or password!');
    } else {
      triggerToast(`Welcome back, ${data.username}! Sign in successful.`);
      setSignInUser('');
      setSignInPass('');
    }
  };

  // 3. PROFILE SUBMIT HANDLER (Inserts into 'user_profiles' table)
  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('user_profiles')
      .insert([{ name: profileName, gender: profileGender }]);

    if (error) {
      triggerToast(`Profile Submission Error: ${error.message}`);
    } else {
      triggerToast('Profile details submitted successfully!');
      setProfileName('');
      setProfileGender('');
    }
  };

  return (
    <div className="auth-container">
      {toast && <div className="toast-notification">{toast}</div>}

      <header className="auth-hero">
        <h1>Welcome to IPL Onboarding</h1>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('signup-section')}>Sign Up</button>
          <button onClick={() => scrollToSection('signin-section')}>Sign In</button>
          <button onClick={() => scrollToSection('profile-section')}>Gender / Profile</button>
        </div>
      </header>

      {/* Task 1: Sign Up Section */}
      <section id="signup-section" className="split-section">
        <div className="left-half">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <label>Username</label>
            <input 
              type="text" 
              value={signUpUser} 
              onChange={(e) => setSignUpUser(e.target.value)} 
              required 
            />

            <label>Password</label>
            <input 
              type="password" 
              value={signUpPass} 
              onChange={(e) => setSignUpPass(e.target.value)} 
              required 
            />

            <button type="submit" className="small-btn">Sign up</button>
          </form>
        </div>
        <div className="right-half solid-bg"></div>
      </section>

      {/* Task 2: Sign In Section */}
      <section id="signin-section" className="split-section">
        <div className="left-half">
          <h2>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <label>Username</label>
            <input 
              type="text" 
              value={signInUser} 
              onChange={(e) => setSignInUser(e.target.value)} 
              required 
            />

            <label>Password</label>
            <input 
              type="password" 
              value={signInPass} 
              onChange={(e) => setSignInPass(e.target.value)} 
              required 
            />

            <button type="submit" className="small-btn">Sign in</button>
          </form>
        </div>
        <div className="right-half solid-bg-alt"></div>
      </section>

      {/* Task 3: Profile & Gender Section */}
      <section id="profile-section" className="padded-section">
        <h2>Personal Details</h2>
        <form onSubmit={handleProfileSubmit}>
          <div className="two-column-form">
            <div className="column-left">
              <label>Name</label>
              <input 
                type="text" 
                value={profileName} 
                onChange={(e) => setProfileName(e.target.value)} 
                required 
              />
            </div>
            <div className="column-right">
              <label>Gender</label>
              <select 
                value={profileGender} 
                onChange={(e) => setProfileGender(e.target.value)} 
                required
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit Profile</button>
        </form>
      </section>
    </div>
  );
}

export default AuthPage;