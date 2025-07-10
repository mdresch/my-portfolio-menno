"use client";

import React, { useState } from 'react';
import { motion } from '../../components/modern/ClientMotionWrapper';

interface FriendContactForm {
  name: string;
  alienName: string;
  age: string;
  birthday: string;
  currentResidence: string;
  birthPlace: string;
  favoriteColor: string;
  spaceFood: string;
  spaceGear: string;
  heroReason: string;
  alienHobbies: string;
  danceBattleSong: string;
  favoriteDisneyFilm: string;
  spaceMessage: string;
  ageVerification: boolean;
  consentGiven: boolean;
  dutchConsent: boolean;
}

export default function FriendsContactPage() {
  const [formData, setFormData] = useState<FriendContactForm>({
    name: '',
    alienName: '',
    age: '',
    birthday: '',
    currentResidence: '',
    birthPlace: '',
    favoriteColor: '',
    spaceFood: '',
    spaceGear: '',
    heroReason: '',
    alienHobbies: '',
    danceBattleSong: '',
    favoriteDisneyFilm: '',
    spaceMessage: '',
    ageVerification: false,
    consentGiven: false,
    dutchConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FriendContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Required field validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.alienName.trim()) newErrors.alienName = 'Alien name is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.birthday.trim()) newErrors.birthday = 'Birthday is required';
    if (!formData.currentResidence.trim()) newErrors.currentResidence = 'Current residence is required';
    if (!formData.birthPlace.trim()) newErrors.birthPlace = 'Birth place is required';
    if (!formData.favoriteColor.trim()) newErrors.favoriteColor = 'Favorite color is required';

    // Age verification
    if (!formData.ageVerification) {
      newErrors.ageVerification = 'You must confirm you are 18 or older';
    }

    // Age validation
    const ageNum = parseInt(formData.age);
    if (isNaN(ageNum) || ageNum < 18) {
      newErrors.age = 'You must be 18 or older to submit this form';
    }

    // Consent validation
    if (!formData.consentGiven) {
      newErrors.consentGiven = 'You must give consent to submit this form';
    }

    // Dutch consent validation
    if (!formData.dutchConsent) {
      newErrors.dutchConsent = 'Dutch consent confirmation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors above and try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Submit to our API endpoint
      const response = await fetch('/api/friends-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('🚀 Thank you for sharing your cosmic details! Your intergalactic friend profile has been received. Menno will be thrilled to read about your space adventures! 🌟');
        
        // Reset form
        setFormData({
          name: '',
          alienName: '',
          age: '',
          birthday: '',
          currentResidence: '',
          birthPlace: '',
          favoriteColor: '',
          spaceFood: '',
          spaceGear: '',
          heroReason: '',
          alienHobbies: '',
          danceBattleSong: '',
          favoriteDisneyFilm: '',
          spaceMessage: '',
          ageVerification: false,
          consentGiven: false,
          dutchConsent: false
        });
      } else {
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Friends of Menno - Cosmic Contact Form 🌟
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Inspired by the movie <span className="font-semibold text-cyan-300">"Elio"</span>, 
            this is your chance to share your intergalactic alter ego with Menno! 
            Fill out your cosmic profile and join the adventure! 🚀
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age Verification Section */}
            <div className="bg-red-500/20 border border-red-400/50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">🔞 Age Verification Required</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="ageVerification"
                    name="ageVerification"
                    checked={formData.ageVerification}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="ageVerification" className="ml-3 text-white">
                    I confirm that I am 18 years of age or older
                  </label>
                </div>
                {errors.ageVerification && (
                  <p className="text-red-300 text-sm">{errors.ageVerification}</p>
                )}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  👤 Your Earth Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Enter your real name"
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  👽 Your Alien Name *
                </label>
                <input
                  type="text"
                  name="alienName"
                  value={formData.alienName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Your cosmic alter ego"
                />
                {errors.alienName && <p className="text-red-300 text-sm mt-1">{errors.alienName}</p>}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🎂 Your Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="18"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Must be 18+"
                />
                {errors.age && <p className="text-red-300 text-sm mt-1">{errors.age}</p>}
              </div>

              <div>
                <label htmlFor="birthday" className="block text-white font-medium mb-2">
                  🎉 Birthday Celebration Day *
                </label>
                <input
                  id="birthday"
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                {errors.birthday && <p className="text-red-300 text-sm mt-1">{errors.birthday}</p>}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🏠 Current Place of Residence *
                </label>
                <input
                  type="text"
                  name="currentResidence"
                  value={formData.currentResidence}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Where you live now"
                />
                {errors.currentResidence && <p className="text-red-300 text-sm mt-1">{errors.currentResidence}</p>}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🌍 Place of Birth on Earth *
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Where you were born"
                />
                {errors.birthPlace && <p className="text-red-300 text-sm mt-1">{errors.birthPlace}</p>}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🎨 My Favorite Color *
                </label>
                <input
                  type="text"
                  name="favoriteColor"
                  value={formData.favoriteColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Your favorite color"
                />
                {errors.favoriteColor && <p className="text-red-300 text-sm mt-1">{errors.favoriteColor}</p>}
              </div>
            </div>

            {/* Space Adventure Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  🍕 Space Food Essentials
                </label>
                <textarea
                  name="spaceFood"
                  value={formData.spaceFood}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="What foods would you take on your space journey?"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🚀 Essential Space Gear
                </label>
                <textarea
                  name="spaceGear"
                  value={formData.spaceGear}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="What gear could you not travel without?"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🦸‍♂️ This is Why You're a HERO
                </label>
                <textarea
                  name="heroReason"
                  value={formData.heroReason}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="What makes you heroic?"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  👽 Your Alien Hobbies
                </label>
                <textarea
                  name="alienHobbies"
                  value={formData.alienHobbies}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="What would you do for fun as an alien?"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🎵 Dance Battle Song with Aliens
                </label>
                <input
                  type="text"
                  name="danceBattleSong"
                  value={formData.danceBattleSong}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Your ultimate dance battle anthem"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🏰 Your Favorite Disney Film
                </label>
                <input
                  type="text"
                  name="favoriteDisneyFilm"
                  value={formData.favoriteDisneyFilm}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Your all-time favorite Disney movie"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  💌 Your Space Journey Message to Menno
                </label>
                <textarea
                  name="spaceMessage"
                  value={formData.spaceMessage}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Share your cosmic thoughts and adventures with Menno..."
                />
              </div>
            </div>

            {/* Consent Section */}
            <div className="bg-blue-500/20 border border-blue-400/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Consent & Privacy</h3>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consentGiven"
                  name="consentGiven"
                  checked={formData.consentGiven}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 mt-1"
                />
                <label htmlFor="consentGiven" className="ml-3 text-white text-sm leading-relaxed">
                  I consent to sharing this information with Menno for the purpose of this fun, 
                  Elio-inspired friend contact form. I understand this is for entertainment and 
                  friendship purposes only, and my information will be handled respectfully.
                </label>
              </div>
              {errors.consentGiven && (
                <p className="text-red-300 text-sm mt-2">{errors.consentGiven}</p>
              )}
            </div>

            {/* Dutch Consent Section */}
            <div className="bg-orange-500/20 border border-orange-400/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">🇳🇱 Nederlandse Bevestiging</h3>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="dutchConsent"
                  name="dutchConsent"
                  checked={formData.dutchConsent}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 mt-1"
                />
                <label htmlFor="dutchConsent" className="ml-3 text-white text-sm leading-relaxed">
                  Zoals op het kinderdagverblijf van mijn moeder vroeger en de belofte aan Menno als handreiking is gegeven heeft de binnendienst te samen met de brandweer een kluisje geinstalleerd in de kledingkast. Dit kluisje treft u in elke hotel kamer terug daar kunt u de bijbel uit elkaar leggen zodat het magazijn niet geladen achterblijft. Door invoer van uw pincode kan gecontroleerd worden of het kluisje opengaat mocht deze samen met uw gegevens opengaan ben ik zo met de juiste voorlichting bij u. Mocht u de pincode uit de tas van uw vader of moeder moeten halen om deze hier in te voeren zal u gevraagd worden bij het open gaan van het kluisje deze kant op te komen. Gezamelijk komen wij geladen door het enthousiasme van de een goede film zo bij u terug.
                </label>
                <p className="ml-3 text-white text-sm leading-relaxed mt-2">
                  As was done for Menno at the daycare, the internal team, together with the fire department, has installed a small safe in the wardrobe. You’ll find this safe in every hotel room. It’s meant for storing the Bible in separate parts, so that the magazine (possibly referring to a loaded item) is not left intact.
                  <br /><br />
                  You can open the safe by entering your personal PIN code. If the safe opens and your details match, I’ll be there shortly to provide you with some guidance.
                  <br /><br />
                  If you need to get the PIN code from your father’s or mother’s bag, you’ll be better off coming this way. As always the maturity levels will be evaluated and assessed where serious UPO and Senior Unaccompanied Minors to these subjects advised not to worry he/she will be back well enthusiastic and fully loaded to blow you away.
                </p>
              </div>
              {errors.dutchConsent && (
                <p className="text-red-300 text-sm mt-2">{errors.dutchConsent}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Launching to Menno's Galaxy...
                  </span>
                ) : (
                  '🚀 Launch My Cosmic Profile!'
                )}
              </button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-4 rounded-xl ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-500/20 border border-green-400/50 text-green-200' 
                    : 'bg-red-500/20 border border-red-400/50 text-red-200'
                }`}
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-blue-200"
        >
          <p className="text-sm">
            🌟 Part of Portfolio Menno - Inspired by the magical world of Elio 🌟
          </p>
        </motion.div>
      </div>
    </div>
  );
}
