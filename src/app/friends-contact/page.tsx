"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

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

// Cinematic Components inspired by Elio
const StarField: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 2 + 0.5
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.speed * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const FloatingPlanet: React.FC<{ delay?: number; size?: string; color?: string; position?: string }> = ({ 
  delay = 0, 
  size = "w-32 h-32", 
  color = "from-blue-400 to-purple-600",
  position = "top-20 right-20"
}) => (
  <motion.div
    className={`absolute ${position} ${size} bg-gradient-to-br ${color} rounded-full opacity-20 blur-sm`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 360],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8 + delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const CosmicParticles: React.FC = () => {
  const particleCount = 50;
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const ElioTitle: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="relative z-10 text-center mb-16"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl md:text-9xl font-bold mb-8 relative"
      >
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          ELIO
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent blur-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ELIO
        </motion.div>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl md:text-4xl font-light text-blue-200 mb-4"
      >
        Friends Contact Portal
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-lg md:text-xl text-cyan-300 max-w-4xl mx-auto leading-relaxed"
      >
        Step into the cosmic universe of Elio and share your intergalactic story with Menno. 
        This is where Earth meets the stars, and friendships transcend galaxies.
      </motion.div>
    </motion.div>
  );
};

const FormSection: React.FC<{ children: React.ReactNode; title: string; icon: string; delay?: number }> = ({ 
  children, 
  title, 
  icon, 
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className="relative mb-12"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="flex items-center mb-6"
      >
        <div className="text-4xl mr-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </motion.div>
      {children}
    </div>
  </motion.div>
);

const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  icon?: string;
}> = ({ label, name, value, onChange, type = "text", placeholder, required, error, rows, icon }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileFocus={{ scale: 1.02 }}
    className="relative"
  >
    <label className="block text-white font-medium mb-3 text-lg">
      {icon && <span className="mr-2">{icon}</span>}
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
        placeholder={placeholder}
        min={type === "number" ? "18" : undefined}
      />
    )}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-300 text-sm mt-2 flex items-center"
      >
        <span className="mr-1">⚠️</span>
        {error}
      </motion.p>
    )}
  </motion.div>
);

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
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0c0a1e 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #0e1b3c 100%)
        `
      }}
    >
      {/* Cinematic Background Elements */}
      <StarField />
      <CosmicParticles />

      {/* Floating Planets */}
      <FloatingPlanet delay={0} size="w-40 h-40" color="from-cyan-400 to-blue-600" position="top-10 right-10" />
      <FloatingPlanet delay={2} size="w-24 h-24" color="from-purple-400 to-pink-600" position="top-1/3 left-10" />
      <FloatingPlanet delay={4} size="w-32 h-32" color="from-yellow-400 to-orange-600" position="bottom-20 right-1/4" />
      <FloatingPlanet delay={6} size="w-20 h-20" color="from-green-400 to-teal-600" position="bottom-1/3 left-1/4" />

      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cinematic Title */}
          <ElioTitle />

          {/* Cinematic Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-12">

                {/* Age Verification Section */}
                <FormSection title="Age Verification Portal" icon="🔞" delay={0}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-red-500/10 border border-red-400/30 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <motion.input
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        type="checkbox"
                        id="ageVerification"
                        name="ageVerification"
                        checked={formData.ageVerification}
                        onChange={handleInputChange}
                        className="w-6 h-6 text-purple-600 bg-white/20 border-white/30 rounded-lg focus:ring-purple-500 focus:ring-2"
                      />
                      <label htmlFor="ageVerification" className="text-white text-lg font-medium">
                        I confirm that I am 18 years of age or older to join this cosmic journey
                      </label>
                    </div>
                    {errors.ageVerification && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-300 text-sm mt-3 flex items-center"
                      >
                        <span className="mr-2">⚠️</span>
                        {errors.ageVerification}
                      </motion.p>
                    )}
                  </motion.div>
                </FormSection>

                {/* Personal Details */}
                <FormSection title="Earth Identity Matrix" icon="🌍" delay={0.2}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField
                      label="Your Earth Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your real name"
                      required
                      error={errors.name}
                      icon="👤"
                    />

                    <InputField
                      label="Your Alien Name"
                      name="alienName"
                      value={formData.alienName}
                      onChange={handleInputChange}
                      placeholder="Your cosmic alter ego"
                      required
                      error={errors.alienName}
                      icon="👽"
                    />

                    <InputField
                      label="Your Age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      type="number"
                      placeholder="Must be 18+"
                      required
                      error={errors.age}
                      icon="🎂"
                    />

                    <InputField
                      label="Birthday Celebration Day"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      type="date"
                      required
                      error={errors.birthday}
                      icon="🎉"
                    />

                    <InputField
                      label="Current Place of Residence"
                      name="currentResidence"
                      value={formData.currentResidence}
                      onChange={handleInputChange}
                      placeholder="Where you live now"
                      required
                      error={errors.currentResidence}
                      icon="🏠"
                    />

                    <InputField
                      label="Place of Birth on Earth"
                      name="birthPlace"
                      value={formData.birthPlace}
                      onChange={handleInputChange}
                      placeholder="Where you were born"
                      required
                      error={errors.birthPlace}
                      icon="🌍"
                    />

                    <InputField
                      label="My Favorite Color"
                      name="favoriteColor"
                      value={formData.favoriteColor}
                      onChange={handleInputChange}
                      placeholder="Your favorite color"
                      required
                      error={errors.favoriteColor}
                      icon="🎨"
                    />
                  </div>
                </FormSection>

                {/* Space Adventure Details */}
                <FormSection title="Cosmic Adventure Profile" icon="🚀" delay={0.4}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField
                      label="Space Food Essentials"
                      name="spaceFood"
                      value={formData.spaceFood}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="What foods would you take on your space journey?"
                      icon="🍕"
                    />

                    <InputField
                      label="Essential Space Gear"
                      name="spaceGear"
                      value={formData.spaceGear}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="What gear could you not travel without?"
                      icon="🛸"
                    />

                    <InputField
                      label="This is Why You're a HERO"
                      name="heroReason"
                      value={formData.heroReason}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="What makes you heroic?"
                      icon="🦸‍♂️"
                    />

                    <InputField
                      label="Your Alien Hobbies"
                      name="alienHobbies"
                      value={formData.alienHobbies}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="What would you do for fun as an alien?"
                      icon="👽"
                    />

                    <InputField
                      label="Dance Battle Song with Aliens"
                      name="danceBattleSong"
                      value={formData.danceBattleSong}
                      onChange={handleInputChange}
                      placeholder="Your ultimate dance battle anthem"
                      icon="🎵"
                    />

                    <InputField
                      label="Your Favorite Disney Film"
                      name="favoriteDisneyFilm"
                      value={formData.favoriteDisneyFilm}
                      onChange={handleInputChange}
                      placeholder="Your all-time favorite Disney movie"
                      icon="🏰"
                    />
                  </div>

                  <div className="mt-8">
                    <InputField
                      label="Your Space Journey Message to Menno"
                      name="spaceMessage"
                      value={formData.spaceMessage}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Share your cosmic thoughts and adventures with Menno..."
                      icon="💌"
                    />
                  </div>
                </FormSection>

                {/* Consent Section */}
                <FormSection title="Galactic Privacy Protocols" icon="📋" delay={0.6}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-500/10 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.input
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        type="checkbox"
                        id="consentGiven"
                        name="consentGiven"
                        checked={formData.consentGiven}
                        onChange={handleInputChange}
                        className="w-6 h-6 text-purple-600 bg-white/20 border-white/30 rounded-lg focus:ring-purple-500 focus:ring-2 mt-1"
                      />
                      <label htmlFor="consentGiven" className="text-white text-lg leading-relaxed">
                        I consent to sharing this information with Menno for the purpose of this fun,
                        Elio-inspired friend contact form. I understand this is for entertainment and
                        friendship purposes only, and my information will be handled respectfully.
                      </label>
                    </div>
                    {errors.consentGiven && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-300 text-sm mt-3 flex items-center"
                      >
                        <span className="mr-2">⚠️</span>
                        {errors.consentGiven}
                      </motion.p>
                    )}
                  </motion.div>
                </FormSection>

                {/* Dutch Consent Section */}
                <FormSection title="Nederlandse Bevestiging" icon="🇳🇱" delay={0.8}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-orange-500/10 border border-orange-400/30 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.input
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        type="checkbox"
                        id="dutchConsent"
                        name="dutchConsent"
                        checked={formData.dutchConsent}
                        onChange={handleInputChange}
                        className="w-6 h-6 text-orange-600 bg-white/20 border-white/30 rounded-lg focus:ring-orange-500 focus:ring-2 mt-1"
                      />
                      <div className="flex-1">
                        <label htmlFor="dutchConsent" className="text-white text-lg leading-relaxed block mb-4">
                          Zoals op het kinderdagverblijf van mijn moeder vroeger en de belofte aan Menno als handreiking is gegeven heeft de binnendienst te samen met de brandweer een kluisje geinstalleerd in de kledingkast. Dit kluisje treft u in elke hotel kamer terug daar kunt u de bijbel uit elkaar leggen zodat het magazijn niet geladen achterblijft. Door invoer van uw pincode kan gecontroleerd worden of het kluisje opengaat mocht deze samen met uw gegevens opengaan ben ik zo met de juiste voorlichting bij u. Mocht u de pincode uit de tas van uw vader of moeder moeten halen om deze hier in te voeren zal u gevraagd worden bij het open gaan van het kluisje deze kant op te komen. Gezamelijk komen wij geladen door het enthousiasme van de een goede film zo bij u terug.
                        </label>
                        <div className="text-white/80 text-base leading-relaxed bg-white/5 rounded-xl p-4">
                          <p className="mb-3">
                            <strong>English Translation:</strong> As was done for Menno at the daycare, the internal team, together with the fire department, has installed a small safe in the wardrobe. You'll find this safe in every hotel room. It's meant for storing the Bible in separate parts, so that the magazine (possibly referring to a loaded item) is not left intact.
                          </p>
                          <p className="mb-3">
                            You can open the safe by entering your personal PIN code. If the safe opens and your details match, I'll be there shortly to provide you with some guidance.
                          </p>
                          <p>
                            If you need to get the PIN code from your father's or mother's bag, you'll be better off coming this way. As always the maturity levels will be evaluated and assessed where serious UPO and Senior Unaccompanied Minors to these subjects advised not to worry he/she will be back well enthusiastic and fully loaded to blow you away.
                          </p>
                        </div>
                      </div>
                    </div>
                    {errors.dutchConsent && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-300 text-sm mt-3 flex items-center"
                      >
                        <span className="mr-2">⚠️</span>
                        {errors.dutchConsent}
                      </motion.p>
                    )}
                  </motion.div>
                </FormSection>

                {/* Cinematic Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-center mt-16"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-3xl transition-all duration-500 transform disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl text-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <motion.span
                          className="flex items-center"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <motion.svg
                            className="w-6 h-6 mr-3 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </motion.svg>
                          Launching to Menno's Galaxy...
                        </motion.span>
                      ) : (
                        <motion.span
                          className="flex items-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="mr-3 text-2xl">🚀</span>
                          Launch My Cosmic Profile!
                          <span className="ml-3 text-2xl">✨</span>
                        </motion.span>
                      )}
                    </div>
                  </motion.button>
                </motion.div>

                {/* Cinematic Submit Message */}
                <AnimatePresence>
                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className={`text-center p-8 rounded-3xl mt-8 backdrop-blur-xl border ${
                        submitMessage.includes('Thank you')
                          ? 'bg-green-500/20 border-green-400/50 text-green-200'
                          : 'bg-red-500/20 border-red-400/50 text-red-200'
                      }`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-4xl mb-4"
                      >
                        {submitMessage.includes('Thank you') ? '🎉' : '⚠️'}
                      </motion.div>
                      <p className="text-lg leading-relaxed">{submitMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Cinematic Footer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-px top-1/2" />
            <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <motion.p
                className="text-cyan-300 text-lg mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨ Part of Portfolio Menno ✨
              </motion.p>
              <p className="text-blue-200 text-base">
                Inspired by the magical cinematic universe of <span className="font-bold text-cyan-400">Elio</span>
              </p>
              <motion.div
                className="flex justify-center space-x-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {['🌟', '🚀', '👽', '🌌', '✨'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
