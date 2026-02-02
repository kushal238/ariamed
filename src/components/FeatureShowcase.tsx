"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Brain,
  History,
  AlertTriangle,
  Pill,
  Activity,
  FileText,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";

// Smart Dictation Demo Component
const SmartDictationDemo = () => {
  const [text, setText] = useState("");
  const [highlights, setHighlights] = useState<
    { text: string; type: "medication" | "symptom" }[]
  >([]);

  const fullText =
    "Patient complains of fever and headache for 3 days. Prescribing Paracetamol 500mg and Cetirizine 10mg for symptom relief.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;

        // Detect and highlight entities
        const newText = fullText.slice(0, currentIndex + 1);
        const detected: { text: string; type: "medication" | "symptom" }[] = [];

        if (newText.includes("fever")) {
          detected.push({ text: "fever", type: "symptom" });
        }
        if (newText.includes("headache")) {
          detected.push({ text: "headache", type: "symptom" });
        }
        if (newText.includes("Paracetamol")) {
          detected.push({ text: "Paracetamol 500mg", type: "medication" });
        }
        if (newText.includes("Cetirizine")) {
          detected.push({ text: "Cetirizine 10mg", type: "medication" });
        }

        setHighlights(detected);
      } else {
        currentIndex = 0;
        setText("");
        setHighlights([]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderHighlightedText = (inputText: string) => {
    const result = inputText;
    const parts: { text: string; highlighted: boolean; type?: string }[] = [];
    let lastIndex = 0;

    highlights.forEach((highlight) => {
      const index = result.indexOf(highlight.text, lastIndex);
      if (index !== -1) {
        // Add text before highlight
        if (index > lastIndex) {
          parts.push({
            text: result.slice(lastIndex, index),
            highlighted: false,
          });
        }
        // Add highlighted text
        parts.push({
          text: highlight.text,
          highlighted: true,
          type: highlight.type,
        });
        lastIndex = index + highlight.text.length;
      }
    });

    // Add remaining text
    if (lastIndex < result.length) {
      parts.push({ text: result.slice(lastIndex), highlighted: false });
    }

    return parts.length > 0 ? (
      parts.map((part, idx) =>
        part.highlighted ? (
          <span
            key={idx}
            className={`${
              part.type === "medication"
                ? "bg-muted/50 text-foreground/90 border-b border-border/60"
                : "bg-amber-100/70 text-amber-800 border-b border-amber-200/80"
            } px-1 rounded`}
          >
            {part.text}
          </span>
        ) : (
          <span key={idx}>{part.text}</span>
        )
      )
    ) : (
      <span>{inputText}</span>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-full md:max-w-2xl p-4 md:p-8 border border-border/60">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"
          >
            <Mic className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg md:text-xl">Medical Voice Dictation</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Real-time prescription writing
            </p>
          </div>
        </div>

        <div className="bg-muted/20 rounded-xl p-4 md:p-6 min-h-[180px] md:min-h-[200px] border border-border/60">
          <p className="text-foreground leading-relaxed text-sm md:text-base">
            {renderHighlightedText(text)}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 h-5 bg-foreground/60 ml-1"
            />
          </p>
        </div>

        <AnimatePresence>
          {highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 md:mt-6 flex gap-2 flex-wrap items-center"
          >
            <span className="text-xs md:text-sm font-medium text-muted-foreground">Detected:</span>
            {highlights.map((h, idx) => (
              <Badge
                key={idx}
                variant={h.type === "medication" ? "default" : "secondary"}
                className="gap-1.5 py-1 px-3"
              >
                {h.type === "medication" ? (
                  <Pill className="w-3.5 h-3.5" />
                ) : (
                  <Activity className="w-3.5 h-3.5" />
                )}
                {h.text}
              </Badge>
            ))}
          </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};

// Smart Medication Search Demo Component
const SmartMedicationSearchDemo = () => {
  const [medicationInput, setMedicationInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState("");
  const [currentCycle, setCurrentCycle] = useState(0); // Track which medication cycle we're on

  const crocinOptions = [
    { name: "Crocin 500mg", dosage: "500mg", composition: "Paracetamol" },
    { name: "Crocin 650mg", dosage: "650mg", composition: "Paracetamol" },
    { name: "Crocin 1g", dosage: "1g", composition: "Paracetamol" },
    { name: "Crocin Advance 500mg", dosage: "500mg", composition: "Paracetamol + Caffeine" },
  ];

  const rejunuronOptions = [
    { name: "Rejunuron OD", dosage: "OD", composition: "Methylcobalamin + ALA + Folic Acid" },
    { name: "Rejunuron Plus", dosage: "Plus", composition: "Methylcobalamin + Vitamin B6" },
    { name: "Rejunuron Forte", dosage: "Forte", composition: "High Strength B-Complex" },
  ];

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout | null = null;
    let dropdownTimeout: NodeJS.Timeout | null = null;
    let selectionTimeout: NodeJS.Timeout | null = null;
    let resetTimeout: NodeJS.Timeout | null = null;
    let loopTimeout: NodeJS.Timeout | null = null;

    const runCycle = (cycleNumber: number) => {
      const isCrocinCycle = cycleNumber % 2 === 0;
      const searchText = isCrocinCycle ? "croc" : "reju";
      const options = isCrocinCycle ? crocinOptions : rejunuronOptions;
      const selectedMed = isCrocinCycle ? "Crocin 500mg" : "Rejunuron OD";

      // Start typing after delay
      typingTimeout = setTimeout(() => {
        let typingIndex = 0;
        const typingInterval = setInterval(() => {
          if (typingIndex < searchText.length) {
            setMedicationInput(searchText.slice(0, typingIndex + 1));
            typingIndex++;
            
            // Show dropdown after typing complete
            if (typingIndex === searchText.length) {
              dropdownTimeout = setTimeout(() => {
                setShowDropdown(true);
                
                // Select medication after dropdown shows
                selectionTimeout = setTimeout(() => {
                  setSelectedMedication(selectedMed);
                  setMedicationInput(selectedMed);
                  setShowDropdown(false);
                  
                  // Reset and start next cycle
                  resetTimeout = setTimeout(() => {
                    setSelectedMedication("");
                    setMedicationInput("");
                    
                    // Start next cycle
                    loopTimeout = setTimeout(() => {
                      setCurrentCycle(cycleNumber + 1);
                    }, 500);
                  }, 2500);
                }, 2000);
              }, 300);
            }
          } else {
            clearInterval(typingInterval);
          }
        }, 200);
      }, 500);
    };

    runCycle(currentCycle);

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
      if (selectionTimeout) clearTimeout(selectionTimeout);
      if (resetTimeout) clearTimeout(resetTimeout);
      if (loopTimeout) clearTimeout(loopTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCycle]);

  // Determine which options to show based on current input
  const displayOptions = medicationInput.startsWith("croc") 
    ? crocinOptions 
    : medicationInput.startsWith("reju") 
    ? rejunuronOptions 
    : crocinOptions;

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-full md:max-w-2xl p-4 md:p-8 border border-border/60">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg md:text-xl">Smart Medication Search</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Instant medication lookup with dosage options
            </p>
          </div>
        </div>

        <div className="bg-muted/20 border border-border/60 rounded-xl p-4 md:p-6">
          <label className="text-xs md:text-sm font-semibold text-foreground mb-2 md:mb-3 block">
            Medication Name (type to search)
          </label>
          
          {/* Input field */}
          <div className="relative mb-2">
            <input
              type="text"
              value={medicationInput}
              readOnly
              placeholder="Start typing medication name..."
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-border/70 rounded-lg bg-background focus:outline-none focus:border-border transition-colors text-sm md:text-base font-medium"
            />
            
            {/* Typing cursor */}
            {medicationInput && medicationInput.length < 10 && !selectedMedication && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-0.5 h-4 md:h-5 bg-foreground/60"
              />
            )}
          </div>
          
          {/* Fixed height container for dropdown and selection */}
          <div className="relative min-h-[240px] md:min-h-[280px]">
            {/* Dropdown */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-background border border-border/60 rounded-lg overflow-hidden"
                >
                  <div className="px-2 md:px-3 py-2 bg-muted/20 border-b border-border/60">
                    <p className="text-xs font-semibold text-muted-foreground">
                      {displayOptions.length} medications found
                    </p>
                  </div>
                  {displayOptions.map((med, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={`px-3 md:px-4 py-2 md:py-3 hover:bg-muted/30 cursor-pointer transition-colors border-b border-border last:border-b-0 ${
                        idx === 0 ? "bg-muted/20 border-l-2 border-l-border/80" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm md:text-base">{med.name}</span>
                        <Badge variant="outline" className="text-xs font-medium">
                          {med.dosage}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{med.composition}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Selected medication indicator */}
            <AnimatePresence>
              {selectedMedication && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2 md:gap-3 bg-muted/20 border border-border/60 rounded-lg p-3 md:p-4"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs md:text-sm text-foreground">
                      Selected: {selectedMedication}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Medication added to prescription
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Aggregated History Demo Component
const AggregatedHistoryDemo = () => {
  // Static timeline items - always visible
  const items = [
    { id: 1, type: "Prescription", date: "Dec 15, 2025" },
    { id: 2, type: "Lab Report", date: "Dec 10, 2025" },
    { id: 3, type: "Lab Report", date: "Dec 5, 2025" },
    { id: 4, type: "Prescription", date: "Nov 20, 2025" },
    { id: 5, type: "Imaging", date: "Nov 15, 2025" },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Animation: only expand/collapse the first prescription
  useEffect(() => {
    let expandTimeoutId: NodeJS.Timeout | null = null;
    let collapseTimeoutId: NodeJS.Timeout | null = null;
    let resetTimeoutId: NodeJS.Timeout | null = null;
    let isCleanedUp = false;

    const runAnimation = () => {
      if (isCleanedUp) return;

      // Expand first prescription after 1 second
      expandTimeoutId = setTimeout(() => {
        if (!isCleanedUp) {
          setExpandedId(1);
          
          // Collapse after 4 seconds
          collapseTimeoutId = setTimeout(() => {
            if (!isCleanedUp) {
              setExpandedId(null);
              
              // Wait 2 seconds, then repeat
              resetTimeoutId = setTimeout(() => {
                if (!isCleanedUp) runAnimation();
              }, 2000);
            }
          }, 4000);
        }
      }, 1000);
    };

    runAnimation();

    return () => {
      isCleanedUp = true;
      if (expandTimeoutId) clearTimeout(expandTimeoutId);
      if (collapseTimeoutId) clearTimeout(collapseTimeoutId);
      if (resetTimeoutId) clearTimeout(resetTimeoutId);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-full md:max-w-2xl p-4 md:p-8 border border-border/60">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <History className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg md:text-xl">Complete Patient Timeline</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              All medical records in one view
            </p>
          </div>
        </div>

        {/* Patient Info Card */}
        <div className="bg-muted/20 border border-border/60 rounded-xl p-4 md:p-5 mb-4 md:mb-6">
          <div className="flex items-start justify-between mb-3">
            <div className="min-w-0 flex-1 mr-2">
              <h4 className="font-bold text-base md:text-lg">Sarah Johnson</h4>
              <p className="text-xs md:text-sm text-muted-foreground">Female, 42 years • ID: #MR-4521</p>
            </div>
            <Badge variant="outline" className="text-xs font-medium flex-shrink-0">Active Patient</Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 text-xs md:text-sm">
            <div className="bg-background rounded-lg p-2 md:p-3 border border-border/60">
              <p className="text-muted-foreground font-medium mb-1 text-xs">Conditions</p>
              <p className="font-semibold text-xs">Hypertension</p>
            </div>
            <div className="bg-background rounded-lg p-2 md:p-3 border border-border/60">
              <p className="text-muted-foreground font-medium mb-1 text-xs">Allergies</p>
              <p className="font-semibold text-xs">Penicillin</p>
            </div>
            <div className="bg-background rounded-lg p-2 md:p-3 border border-border/60">
              <p className="text-muted-foreground font-medium mb-1 text-xs">Active Meds</p>
              <p className="font-semibold text-xs">Lisinopril 10mg</p>
            </div>
          </div>
        </div>

        <div className="relative bg-muted/20 rounded-xl p-4 md:p-6 border border-border/60">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-10 top-6 bottom-6 w-0.5 bg-border/70" />

          {/* Timeline items */}
          <div className="space-y-4 md:space-y-6">
            {items.map((item) => {
              const isExpanded = expandedId === item.id;
              
              return (
                <div
                  key={item.id}
                  className="relative flex items-start gap-3 md:gap-4"
                >
                  {/* Timeline dot */}
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-foreground/40 border border-border/60 z-10 flex-shrink-0 mt-1" />

                  {/* Card */}
                  <motion.div
                    animate={{
                      scale: isExpanded ? 1.01 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex-1 bg-card border rounded-lg md:rounded-xl p-3 md:p-4 transition-all ${
                      isExpanded ? "border-border/80 bg-muted/20" : "border-border/60"
                    }`}
                  >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                          <FileText className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0" />
                          <span className="font-semibold text-sm md:text-base truncate">{item.type}</span>
                        </div>
                        <span className="text-xs md:text-sm text-muted-foreground font-medium flex-shrink-0 ml-2">{item.date}</span>
                      </div>
                      
                      {/* Expanded content for Prescription */}
                      <AnimatePresence>
                        {isExpanded && item.type === "Prescription" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border space-y-3 md:space-y-4">
                              {/* Diagnosis Section */}
                              <div className="bg-muted/30 rounded-lg p-2.5 md:p-3 border border-border/60">
                                <p className="text-xs font-medium text-muted-foreground mb-1">Diagnosis</p>
                                <p className="font-semibold text-xs md:text-sm text-foreground">Acute Upper Respiratory Infection</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Symptoms: Fever (99.8°F), cough, sore throat, nasal congestion
                                </p>
                              </div>
                              
                              {/* Medications Section */}
                              <div className="space-y-2 md:space-y-3">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Prescribed Medications</p>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Pill className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground/60 mt-1 flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-xs md:text-sm">Paracetamol 500mg</p>
                                    <p className="text-xs text-muted-foreground">1 tablet, twice daily after meals</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Pill className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground/60 mt-1 flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-xs md:text-sm">Cetirizine 10mg</p>
                                    <p className="text-xs text-muted-foreground">1 tablet, once daily before bedtime</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-3 border-t border-dashed border-border">
                                <p className="text-xs text-muted-foreground">
                                  <span className="font-medium">Duration:</span> 5 days
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
          </div>
        </div>
      </Card>
    </div>
  );
};

// Complaint-Based AI Diagnosis Demo Component
const ComplaintBasedDiagnosisDemo = () => {
  const [complaints, setComplaints] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  const fullComplaintsText = "Fever (101°F), severe headache, body aches, fatigue for 3 days";

  const diagnosisResults = [
    {
      diagnosis: "Viral Fever (URI)",
      confidence: 87,
      reasoning: "Symptoms align with recent prescription history (Paracetamol, Dec 15). Seasonal pattern noted."
    },
    {
      diagnosis: "Influenza Type B",
      confidence: 68,
      reasoning: "High fever with body aches. No recent flu vaccination in records. Consider PCR test."
    }
  ];

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout | null = null;
    let analyzeTimeout: NodeJS.Timeout | null = null;
    let diagnosisTimeout: NodeJS.Timeout | null = null;
    let resetTimeout: NodeJS.Timeout | null = null;
    let loopTimeout: NodeJS.Timeout | null = null;
    let isCleanedUp = false;

    const runAnimation = () => {
      if (isCleanedUp) return;

      // Start typing complaints
      typingTimeout = setTimeout(() => {
        let typingIndex = 0;
        const typingInterval = setInterval(() => {
          if (isCleanedUp) {
            clearInterval(typingInterval);
            return;
          }

          if (typingIndex <= fullComplaintsText.length) {
            setComplaints(fullComplaintsText.slice(0, typingIndex));
            typingIndex++;
          } else {
            clearInterval(typingInterval);
            
            // Start analyzing
            analyzeTimeout = setTimeout(() => {
              if (isCleanedUp) return;
              setIsAnalyzing(true);
              
              // Show diagnosis after analyzing
              diagnosisTimeout = setTimeout(() => {
                if (isCleanedUp) return;
                setIsAnalyzing(false);
                setShowDiagnosis(true);
                
                // Stay visible for 4 seconds, then reset
                resetTimeout = setTimeout(() => {
                  if (isCleanedUp) return;
                  setComplaints("");
                  setShowDiagnosis(false);
                  
                  // Wait 1 second, then restart loop
                  loopTimeout = setTimeout(() => {
                    if (!isCleanedUp) runAnimation();
                  }, 1000);
                }, 7000); // Stay for 4 seconds
              }, 2500); // Analyzing duration
            }, 500); // Delay before analyzing
          }
        }, 50); // Typing speed
      }, 500); // Initial delay
    };

    runAnimation();

    return () => {
      isCleanedUp = true;
      if (typingTimeout) clearTimeout(typingTimeout);
      if (analyzeTimeout) clearTimeout(analyzeTimeout);
      if (diagnosisTimeout) clearTimeout(diagnosisTimeout);
      if (resetTimeout) clearTimeout(resetTimeout);
      if (loopTimeout) clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-full md:max-w-2xl p-4 md:p-8 border border-border/60">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg md:text-xl">AI-Aided Diagnosis</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Intelligent diagnosis based on complaints + patient history
            </p>
          </div>
        </div>

        {/* Patient Info */}
        <div className="bg-muted/20 border border-border/60 rounded-lg p-3 md:p-4 mb-3 md:mb-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted/60 flex items-center justify-center text-foreground/80 font-semibold text-sm flex-shrink-0">
              SJ
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-xs md:text-sm">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">Age: 34 • Last Visit: Dec 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Complaints Input */}
        <div className="bg-muted/20 border border-border/60 rounded-xl p-4 md:p-6 mb-3 md:mb-4">
          <label className="text-xs md:text-sm font-semibold text-foreground mb-2 md:mb-3 block">
            Chief Complaints
          </label>
          <div className="relative">
            <textarea
              value={complaints}
              readOnly
              placeholder="Enter patient complaints..."
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-border/70 rounded-lg bg-background focus:outline-none focus:border-border transition-colors text-xs md:text-sm min-h-[70px] md:min-h-[80px] resize-none"
            />
            {complaints && complaints.length < fullComplaintsText.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              className="absolute right-3 md:right-4 bottom-3 md:bottom-4 w-0.5 h-3 md:h-4 bg-foreground/60"
              />
            )}
          </div>
        </div>

        {/* Analyzing State */}
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-muted/20 border border-border/60 rounded-lg p-3 md:p-4 mb-3 md:mb-4"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="flex-shrink-0"
                >
                  <Brain className="w-4 h-4 md:w-5 md:h-5 text-foreground/70" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-semibold text-foreground">Analyzing with Patient History...</p>
                  <p className="text-xs text-muted-foreground">Cross-referencing symptoms with Sarah's medical records</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Diagnosis Results */}
        <AnimatePresence>
          {showDiagnosis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-2 md:space-y-3"
            >
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground/70 flex-shrink-0" />
                <p className="text-xs md:text-sm font-semibold text-foreground">AI Diagnosis Suggestions</p>
              </div>
              
              {diagnosisResults.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="border-l-2 border-border/70 bg-muted/20 rounded-lg p-3 md:p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="font-bold text-xs md:text-sm flex-1">{result.diagnosis}</h5>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {result.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {result.reasoning}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};

// Patient RAG Chatbot Demo Component
const PatientRAGChatbotDemo = () => {
  const [messages, setMessages] = useState<{ role: "doctor" | "ai"; text: string }[]>([]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);

  const conversation = [
    {
      doctor: "Give me a summary of Sarah's health",
      ai: "Based on Sarah Johnson's records: She's a 34-year-old with recent URI symptoms. Last prescribed Paracetamol 500mg on Dec 15. Lab reports from Dec 10 show normal CBC. Previous history includes seasonal allergies. No chronic conditions. Overall healthy profile with occasional viral infections."
    },
    {
      doctor: "Any drug allergies?",
      ai: "No documented drug allergies in Sarah Johnson's medical history. She has tolerated Paracetamol, Cetirizine, and common antibiotics well in past prescriptions."
    }
  ];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    let conversationIndex = 0;

    const runConversation = () => {
      if (conversationIndex >= conversation.length) {
        // Reset after all conversations
        const resetTimeout = setTimeout(() => {
          setMessages([]);
          setCurrentTyping("");
          conversationIndex = 0;
          runConversation();
        }, 4000);
        timeouts.push(resetTimeout);
        return;
      }

      const current = conversation[conversationIndex];
      
      // Doctor types question
      let doctorTypingIndex = 0;
      const doctorTypingInterval = setInterval(() => {
        if (doctorTypingIndex <= current.doctor.length) {
          setCurrentTyping(current.doctor.slice(0, doctorTypingIndex));
          doctorTypingIndex++;
        } else {
          clearInterval(doctorTypingInterval);
          
          // Add doctor message
          const addDoctorTimeout = setTimeout(() => {
            setMessages(prev => [...prev, { role: "doctor", text: current.doctor }]);
            setCurrentTyping("");
            
            // AI thinks
            const aiThinkTimeout = setTimeout(() => {
              setIsAITyping(true);
              
              // AI responds
              const aiResponseTimeout = setTimeout(() => {
                setIsAITyping(false);
                setMessages(prev => [...prev, { role: "ai", text: current.ai }]);
                
                // Move to next conversation
                conversationIndex++;
                const nextTimeout = setTimeout(runConversation, 1500);
                timeouts.push(nextTimeout);
              }, 2000);
              timeouts.push(aiResponseTimeout);
            }, 800);
            timeouts.push(aiThinkTimeout);
          }, 300);
          timeouts.push(addDoctorTimeout);
        }
      }, 50);

    };

    runConversation();

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-full md:max-w-2xl p-4 md:p-8 border border-border/60">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg md:text-xl">Patient Health Assistant</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              RAG-powered chatbot for instant patient information
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-muted/20 border border-border/60 rounded-xl p-4 md:p-6 min-h-[350px] md:min-h-[400px]">
          <div className="space-y-3 md:space-y-4">
            {/* Display sent messages */}
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === "doctor" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] md:max-w-[85%] rounded-lg p-3 md:p-4 ${
                    msg.role === "doctor"
                      ? "bg-muted/40 text-foreground border border-border/60"
                      : "bg-background border border-border/60"
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed">{msg.text}</p>
                </div>
              </motion.div>
            ))}

            {/* AI typing indicator */}
            <AnimatePresence>
              {isAITyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-border rounded-lg p-3 md:p-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-foreground/50"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-foreground/50"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-foreground/50"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Current typing */}
            {currentTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[90%] md:max-w-[85%] bg-muted/40 text-foreground border border-border/60 rounded-lg p-3 md:p-4">
                  <p className="text-xs md:text-sm">
                    {currentTyping}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-0.5 h-3 md:h-4 bg-white ml-1"
                    />
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

// Main Feature Showcase Component
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

const features: Feature[] = [
  {
    id: "dictation",
    title: "Medical Voice Dictation",
    description:
      "Speak naturally to create prescriptions. Our AI automatically identifies medications, dosages, symptoms, and medical terminology as you dictate.",
    icon: Mic,
    component: SmartDictationDemo,
  },
  {
    id: "medication-search",
    title: "Smart Medication Search",
    description:
      "Type just a few letters to instantly search our ABHA-compliant database of 100,000+ medications. Get dosage options, composition details, and add to prescriptions with one click.",
    icon: Sparkles,
    component: SmartMedicationSearchDemo,
  },
  {
    id: "history",
    title: "Complete Patient Timeline",
    description:
      "View every prescription, lab report, and medical record in one chronological timeline. Never miss critical patient history again.",
    icon: History,
    component: AggregatedHistoryDemo,
  },
  {
    id: "ai-diagnosis",
    title: "AI-Aided Diagnosis",
    description:
      "Enter patient complaints and get intelligent diagnosis suggestions based on symptoms AND complete patient history. AI cross-references medical records for accurate recommendations.",
    icon: Brain,
    component: ComplaintBasedDiagnosisDemo,
  },
  {
    id: "patient-rag",
    title: "Patient Health Assistant",
    description:
      "Ask questions about any patient and get instant answers from their complete medical history. RAG-powered AI retrieves and summarizes information in seconds.",
    icon: Sparkles,
    component: PatientRAGChatbotDemo,
  },
];

export const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const ActiveDemoComponent = features[activeFeature].component;

  const handleMobileCardClick = (index: number) => {
    // Prevent rapid clicks during transition
    if (isTransitioning) return;

    // Case 1: Clicking the same card - just collapse it
    if (expandedMobile === index) {
      setExpandedMobile(null);
      return;
    }

    // Case 2: No card is expanded - expand immediately
    if (expandedMobile === null) {
      setExpandedMobile(index);
      // Scroll into view after a brief delay for smooth UX
      setTimeout(() => {
        mobileCardRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 50);
      return;
    }

    // Case 3: Another card is expanded - collapse first, then expand
    setIsTransitioning(true);
    
    // Step 1: Collapse current card
    setExpandedMobile(null);
    
    // Step 2: Wait for collapse animation, scroll to new card position
    setTimeout(() => {
      // First scroll the card into view while collapsed
      mobileCardRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      
      // Then expand it after a brief moment
      setTimeout(() => {
        setExpandedMobile(index);
        setIsTransitioning(false);
      }, 300); // Wait for scroll to mostly complete
    }, 400); // 400ms matches the card collapse animation duration
  };

  return (
    <section className="w-full min-h-screen bg-muted/20 border-y border-border/60 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Intelligent Healthcare Workflow
          </motion.h2>
          <div className="mx-auto h-px w-24 bg-primary/30" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            Experience the future of medical documentation with AI-powered
            insights and seamless workflow automation
          </motion.p>
        </div>

        {/* Mobile Layout - Expandable Cards */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, index) => {
            const isExpanded = expandedMobile === index;
            const DemoComponent = feature.component;

            return (
              <motion.div
                key={feature.id}
                ref={(el) => {
                  mobileCardRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`overflow-hidden transition-all duration-[400ms] ${
                    isExpanded ? "border border-border/60" : "border border-border/60"
                  }`}
                >
                  {/* Card Header - Always Visible */}
                  <button
                    onClick={() => handleMobileCardClick(index)}
                    className="w-full p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isExpanded ? "bg-primary" : "bg-muted/30"
                        }`}
                      >
                        <feature.icon
                          className={`w-6 h-6 ${
                            isExpanded ? "text-white" : "text-foreground/60"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-semibold mb-2 ${
                            isExpanded ? "text-foreground" : "text-foreground/80"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex-shrink-0"
                      >
                        <ChevronRight
                          className={`w-6 h-6 transform rotate-90 ${
                            isExpanded ? "text-muted-foreground" : "text-muted-foreground"
                          }`}
                        />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable Demo */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/60">
                          <DemoComponent />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Layout - Split Screen */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Sticky Demo */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-border/60 bg-background"
              >
                <ActiveDemoComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Scrollable Features */}
          <div ref={containerRef} className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveFeature(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Card
                  className={`p-8 ${
                    activeFeature === index
                      ? "border border-border/60"
                      : "border border-border/60 hover:border-border/80"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeFeature === index ? "bg-primary" : "bg-muted/30"
                      }`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${
                          activeFeature === index
                            ? "text-white"
                            : "text-foreground/60"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold mb-2 ${
                          activeFeature === index ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      {activeFeature === index && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          className="h-px bg-border/80 rounded-full mt-4"
                        />
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

