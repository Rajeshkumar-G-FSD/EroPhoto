import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Phone, MapPin, Calendar, Clock, ChevronRight, Check } from "lucide-react";

type ChatStep = "CATEGORY" | "OPTIONS" | "NAME" | "PHONE" | "LOCATION" | "DATE_TIME" | "CONFIRM";

interface ChatState {
  category: string;
  subOption: string;
  name: string;
  phone: string;
  location: string;
  date: string;
  timeSlot: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("CATEGORY");
  const [data, setData] = useState<ChatState>({
    category: "",
    subOption: "",
    name: "",
    phone: "",
    location: "",
    date: "",
    timeSlot: "",
  });
  const [inputVal, setInputVal] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [step, isOpen]);

  const categories = ["Photography", "Decoration"];
  const subOptions: Record<string, string[]> = {
    "Photography": ["Wedding Photography", "Pre-Wedding", "Maternity Shoot", "Newborn", "Event Coverage"],
    "Decoration": ["Birthday Party", "Marriage Ceremony", "Ear Piercing", "Office Events", "Baby Shower"],
  };
  const timeSlots = ["10:00 AM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"];

  const handleSelect = (field: keyof ChatState, value: string, nextStep: ChatStep) => {
    setData(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const handleTextSubmit = (field: keyof ChatState, nextStep: ChatStep) => {
    if (!inputVal.trim()) return;
    setData(prev => ({ ...prev, [field]: inputVal }));
    setInputVal("");
    setStep(nextStep);
  };

  const sendToWhatsApp = () => {
    const text = `*Booking Inquiry from E Media Events*%0A%0A` +
      `*Category:* ${data.category}%0A` +
      `*Service:* ${data.subOption}%0A` +
      `*Name:* ${data.name}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Location:* ${data.location}%0A` +
      `*Date:* ${data.date}%0A` +
      `*Time Slot:* ${data.timeSlot}`;
    
    window.open(`https://wa.me/918072117912?text=${text}`, "_blank");
  };

  const resetChat = () => {
    setStep("CATEGORY");
    setData({
      category: "",
      subOption: "",
      name: "",
      phone: "",
      location: "",
      date: "",
      timeSlot: "",
    });
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-primary-container border border-primary-container/10 z-[100]"
      >
        <MessageCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-28 right-6 w-[90vw] md:w-[400px] bg-surface rounded-[2rem] shadow-2xl z-[110] border border-outline-variant/30 overflow-hidden flex flex-col"
            style={{ maxHeight: "calc(100vh - 150px)" }}
          >
            {/* Header */}
            <div className="bg-primary-container p-6 flex justify-between items-center text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg">E Media Assistant</h3>
                  <span className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Always Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Step: Category */}
              <div className="flex flex-col space-y-4">
                <div className="bg-surface-container rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-sm">Welcome to E Media Events! How can we assist you today? Please pick a category:</p>
                </div>
                {step === "CATEGORY" && (
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => handleSelect("category", cat, "OPTIONS")}
                        className="p-3 bg-white border border-outline-variant rounded-xl text-sm hover:border-primary-container hover:text-primary-container transition-all flex justify-between items-center group"
                      >
                        {cat} <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Step: Options */}
              {data.category && (
                <div className="flex flex-col space-y-4">
                  <div className="self-end bg-primary-container/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm font-medium">{data.category}</p>
                  </div>
                  <div className="bg-surface-container rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm">Great choice! What kind of {data.category.toLowerCase()} service are you looking for?</p>
                  </div>
                  {step === "OPTIONS" && (
                    <div className="grid grid-cols-1 gap-2">
                      {subOptions[data.category].map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleSelect("subOption", opt, "NAME")}
                          className="p-3 bg-white border border-outline-variant rounded-xl text-sm hover:border-primary-container hover:text-primary-container transition-all"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step: Name */}
              {data.subOption && (
                <div className="flex flex-col space-y-4">
                  <div className="self-end bg-primary-container/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm font-medium">{data.subOption}</p>
                  </div>
                  <div className="bg-surface-container rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <div className="flex items-center space-x-2 mb-2">
                       <User size={14} className="text-primary-container" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Details Request</span>
                    </div>
                    <p className="text-sm">Excellent. Could we start with your name?</p>
                  </div>
                </div>
              )}

              {/* Step: Phone */}
              {data.name && (
                <div className="flex flex-col space-y-4">
                   <div className="self-end bg-primary-container/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm font-medium">{data.name}</p>
                  </div>
                  <div className="bg-surface-container rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm">Pleased to meet you, {data.name.split(' ')[0]}. Could you provide your phone number?</p>
                  </div>
                </div>
              )}

              {/* Step: Location */}
              {data.phone && (
                <div className="flex flex-col space-y-4">
                   <div className="self-end bg-primary-container/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm font-medium">{data.phone}</p>
                  </div>
                  <div className="bg-surface-container rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm">Thank you. Where will the event be located?</p>
                  </div>
                </div>
              )}

              {/* Step: Date & Time */}
              {data.location && (
                <div className="flex flex-col space-y-4">
                   <div className="self-end bg-primary-container/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm font-medium">{data.location}</p>
                  </div>
                  <div className="bg-surface-container rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm">Almost there! Please pick a date and preferred time slot for your event.</p>
                  </div>
                  {step === "DATE_TIME" && (
                    <div className="space-y-4">
                      <input 
                        type="date" 
                        className="w-full p-3 bg-white border border-outline-variant rounded-xl text-sm"
                        onChange={(e) => setData(prev => ({ ...prev, date: e.target.value }))}
                        value={data.date}
                      />
                      {data.date && (
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map(slot => (
                            <button
                              key={slot}
                              onClick={() => handleSelect("timeSlot", slot, "CONFIRM")}
                              className="p-2 border border-outline-variant rounded-lg text-xs hover:bg-primary-container/10 transition-colors"
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Step: Confirm */}
              {step === "CONFIRM" && (
                <div className="flex flex-col space-y-4">
                  <div className="bg-surface-container rounded-2xl rounded-tl-none p-6 space-y-4">
                    <div className="flex items-center space-x-2 text-primary-container">
                      <Check size={20} />
                      <span className="font-serif text-lg">Confirm Booking</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <p><span className="font-bold opacity-60">SERVICE:</span> {data.subOption}</p>
                      <p><span className="font-bold opacity-60">LOCATION:</span> {data.location}</p>
                      <p><span className="font-bold opacity-60">DATE/TIME:</span> {data.date} at {data.timeSlot}</p>
                    </div>
                    <p className="text-sm italic text-on-surface-variant font-light">Confirming will share these details via WhatsApp for final verification.</p>
                    <button 
                      onClick={sendToWhatsApp}
                      className="w-full bg-primary-container text-white p-4 rounded-xl font-bold tracking-widest text-[10px] uppercase shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      Share to WhatsApp
                    </button>
                    <button 
                      onClick={resetChat}
                      className="w-full border border-outline-variant p-3 rounded-xl text-xs font-medium hover:bg-surface-container transition-colors"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            {["NAME", "PHONE", "LOCATION"].includes(step) && (
              <div className="p-6 pt-0">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === "NAME") handleTextSubmit("name", "PHONE");
                    else if (step === "PHONE") handleTextSubmit("phone", "LOCATION");
                    else if (step === "LOCATION") handleTextSubmit("location", "DATE_TIME");
                  }}
                  className="flex items-center space-x-2 bg-surface-container p-2 rounded-2xl"
                >
                  <input
                    autoFocus
                    placeholder={`Enter your ${step.toLowerCase()}...`}
                    className="flex-1 bg-transparent border-none outline-none px-4 text-sm font-light text-on-surface"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="p-3 bg-primary-container text-white rounded-xl shadow-md active:scale-90 transition-all"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
