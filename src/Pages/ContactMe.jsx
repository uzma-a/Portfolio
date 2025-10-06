import React, { useState } from 'react';
import { Mail, User, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const onSubmit = async () => {
    setIsLoading(true);
    
    const nameEl = document.querySelector('input[name="name"]');
    const emailEl = document.querySelector('input[name="email"]');
    const messageEl = document.querySelector('textarea[name="message"]');
    
    const formData = {
      name: nameEl.value,
      email: emailEl.value,
      message: messageEl.value,
      access_key: "f16290a6-360e-4d5f-ba52-353f4a5f45ad"
    };

    const json = JSON.stringify(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          nameEl.value = '';
          emailEl.value = '';
          messageEl.value = '';
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen  bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 animate-pulse">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
              Ready to bring your ideas to life? Drop me a message and let's create something amazing together.
            </p>
          </div>

          {/* Form Container */}
          <div className="backdrop-blur-xl bg-white/10 text-gray-800 rounded-3xl p-4 md:p-7 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
            {!isSubmitted ? (
              <div className="space-y-8">
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <User className={`h-6 w-6 transition-colors duration-300 ${focusedField === 'name' ? 'text-blue-400' : 'text-gray-400'}`} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-16 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl pl-16 pr-6 text-white placeholder-gray-400 text-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/5"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Mail className={`h-6 w-6 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'}`} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-16 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl pl-16 pr-6 text-white placeholder-gray-400 text-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/5"
                  />
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute top-6 left-6 pointer-events-none">
                    <MessageCircle className={`h-6 w-6 transition-colors duration-300 ${focusedField === 'message' ? 'text-blue-400' : 'text-gray-400'}`} />
                  </div>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl pl-16 pr-6 pt-6 pb-6 text-white placeholder-gray-400 text-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/5 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={onSubmit}
                  disabled={isLoading}
                  className="w-full h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xl font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            ) : (
              /* Success Message */
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                <p className="text-gray-300 text-lg">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Prefer email? Reach me directly at{' '}
              <a href="mailto:your@email.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                uzmaaasia444@email.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;