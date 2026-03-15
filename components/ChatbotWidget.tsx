import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

type Role = 'assistant' | 'user';
type Solution = '' | 'serv-engines' | 'local-lead-bot-pro' | 'sentient-prospect';
type PendingField = null | 'phone' | 'name' | 'business';
type PendingIntent = null | 'lead-clarifier';

type ChatMessage = {
  role: Role;
  content: string;
};

const FORM_ENDPOINT = 'https://formspree.io/f/mvgqyrkg';

const initialMessage: ChatMessage = {
  role: 'assistant',
  content:
    'I am the AI Assistant for Sanderson AI Solutions. What is the biggest bottleneck in your business right now?'
};

const pitchBySolution: Record<Exclude<Solution, ''>, string> = {
  'serv-engines':
    "It sounds like you need a solid digital foundation. We offer 'Serv Engines', which includes a full Google Business Profile optimization and a lightning-fast lead-gen website.",
  'local-lead-bot-pro':
    "If you're missing calls while you're busy on the job, we need to plug that leak. We use 'Local Lead Bot Pro' to install an automated missed-call text-back system so you never lose a lead again.",
  'sentient-prospect':
    "Since your foundation is solid, you're ready for 'Sentient Prospect'. It's our advanced outbound AI machinery that hunts and qualifies B2B leads for you automatically."
};

const priceBySolution: Record<Exclude<Solution, ''>, string> = {
  'serv-engines':
    'Serv Engines starts at $495 one-time for the Google Business Profile setup, or $299/month for a fully managed website build.',
  'local-lead-bot-pro': 'Local Lead Bot Pro is $199/month recurring.',
  'sentient-prospect': 'Sentient Prospect is custom high-ticket pricing based on volume.'
};

const phoneRegex = /(\+?1[\s.-]?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/;

const detectPricingIntent = (text: string) => {
  const normalized = text.toLowerCase();
  return (
    normalized.includes('price') ||
    normalized.includes('pricing') ||
    normalized.includes('cost') ||
    normalized.includes('how much') ||
    normalized.includes('buy') ||
    normalized.includes('purchase') ||
    normalized.includes('sign up')
  );
};

const leadIntentSignals = ['lead', 'leads', 'customers', 'bookings', 'jobs', 'calls'];

const detectLeadIntent = (text: string) => {
  const normalized = text.toLowerCase();
  return leadIntentSignals.some((signal) => normalized.includes(signal));
};

const detectSolution = (text: string): Solution => {
  const normalized = text.toLowerCase();

  const servSignals = [
    'website',
    'site',
    'google',
    'gmb',
    'gbp',
    'profile',
    'seo',
    'no leads',
    'need leads',
    'more leads',
    'not enough leads',
    'not showing',
    'new business',
    'start up',
    'startup'
  ];

  const leadbotSignals = [
    'missed call',
    'missed calls',
    'miss calls',
    'busy',
    'too busy',
    'calls',
    'voicemail',
    'lost leads',
    'missing leads',
    'text back'
  ];

  const sentientSignals = [
    'b2b',
    'contracts',
    'outbound',
    'enterprise',
    'scale',
    'scaling',
    'aggressive',
    'cold',
    'prospect',
    'pipeline',
    'abm'
  ];

  if (sentientSignals.some((signal) => normalized.includes(signal))) {
    return 'sentient-prospect';
  }

  if (leadbotSignals.some((signal) => normalized.includes(signal))) {
    return 'local-lead-bot-pro';
  }

  if (servSignals.some((signal) => normalized.includes(signal))) {
    return 'serv-engines';
  }

  return '';
};

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [pendingField, setPendingField] = useState<PendingField>(null);
  const [pendingIntent, setPendingIntent] = useState<PendingIntent>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [profile, setProfile] = useState({
    bottleneck: '',
    solution: '' as Solution,
    phone: '',
    name: '',
    business: '',
    pricingAsked: false
  });

  const messagesRef = useRef(messages);
  const scrollAnchor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    scrollAnchor.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const solutionLabel = useMemo(() => {
    switch (profile.solution) {
      case 'serv-engines':
        return 'Serv Engines';
      case 'local-lead-bot-pro':
        return 'Local Lead Bot Pro';
      case 'sentient-prospect':
        return 'Sentient Prospect';
      default:
        return 'our ecosystem';
    }
  }, [profile.solution]);

  const submitLead = async () => {
    if (hasSubmitted) {
      return;
    }

    const transcript = messagesRef.current
      .map((message) => `${message.role === 'assistant' ? 'Assistant' : 'User'}: ${message.content}`)
      .join('\n');

    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('business', profile.business);
    formData.append('phone', profile.phone);
    formData.append('bottleneck', profile.bottleneck);
    formData.append('solution', solutionLabel);
    formData.append('pricingAsked', profile.pricingAsked ? 'yes' : 'no');
    formData.append('transcript', transcript);

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      setHasSubmitted(true);
    } catch (error) {
      console.error('Chatbot submission error:', error);
    }
  };

  useEffect(() => {
    if (!hasSubmitted && profile.name && profile.business && profile.phone) {
      void submitLead();
    }
  }, [profile, hasSubmitted]);

  const appendAssistantMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: 'assistant', content }]);
  };

  const askForPhone = () => {
    setPendingField('phone');
    appendAssistantMessage(
      'To get this fixed, what is the best phone number for our founder, Sanderson, to call you at tomorrow?'
    );
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');

    const nextProfile = { ...profile };
    const phoneMatch = trimmed.match(phoneRegex);
    const detectedPhone = phoneMatch ? phoneMatch[0] : '';

    if (detectPricingIntent(trimmed)) {
      nextProfile.pricingAsked = true;
    }

    if (pendingField === 'phone') {
      if (detectedPhone) {
        nextProfile.phone = detectedPhone;
      } else {
        appendAssistantMessage('Please share the best direct phone number for Sanderson to call you tomorrow.');
        return;
      }
    }

    if (pendingField === 'name') {
      nextProfile.name = trimmed;
    }

    if (pendingField === 'business') {
      nextProfile.business = trimmed;
    }

    if (pendingIntent === 'lead-clarifier') {
      const clarifiedSolution = detectSolution(trimmed);
      if (clarifiedSolution) {
        nextProfile.solution = clarifiedSolution;
      } else {
        nextProfile.solution = 'serv-engines';
      }
      setPendingIntent(null);
    }

    if (!pendingField && detectedPhone && !nextProfile.phone) {
      nextProfile.phone = detectedPhone;
    }

    if (!nextProfile.solution) {
      const detectedSolution = detectSolution(trimmed);
      if (detectedSolution) {
        nextProfile.solution = detectedSolution;
      }
    }

    if (!nextProfile.bottleneck && !nextProfile.solution && !detectPricingIntent(trimmed)) {
      nextProfile.bottleneck = trimmed;
    }

    if (nextProfile.solution && !profile.solution) {
      nextProfile.bottleneck = nextProfile.bottleneck || trimmed;
    }

    setProfile(nextProfile);

    if (pendingField === 'phone') {
      setPendingField(null);
    }

    if (pendingField === 'name') {
      setPendingField(null);
      if (!nextProfile.business) {
        setPendingField('business');
        appendAssistantMessage('Great, thanks. What is your business name?');
        return;
      }
    }

    if (pendingField === 'business') {
      setPendingField(null);
      if (!nextProfile.name) {
        setPendingField('name');
        appendAssistantMessage('Thanks. What is your full name?');
        return;
      }
    }

    if (nextProfile.solution && !nextProfile.phone) {
      if (nextProfile.pricingAsked) {
        appendAssistantMessage(`${priceBySolution[nextProfile.solution]} To get this fixed, what is the best phone number for our founder, Sanderson, to call you at tomorrow?`);
      } else {
        appendAssistantMessage(`${pitchBySolution[nextProfile.solution]} To get this fixed, what is the best phone number for our founder, Sanderson, to call you at tomorrow?`);
      }
      setPendingField('phone');
      return;
    }

    if (nextProfile.solution && nextProfile.phone && !nextProfile.name) {
      setPendingField('name');
      if (nextProfile.solution === 'serv-engines' && nextProfile.pricingAsked) {
        appendAssistantMessage(
          'Thanks. In the meantime, you can view our exact packages here: https://www.servengines.com. What is your full name?'
        );
      } else {
        appendAssistantMessage('Thanks. What is your full name?');
      }
      return;
    }

    if (nextProfile.solution && nextProfile.phone && nextProfile.name && !nextProfile.business) {
      setPendingField('business');
      appendAssistantMessage('Great, thanks. What is your business name?');
      return;
    }

    if (nextProfile.solution && nextProfile.phone && nextProfile.name && nextProfile.business) {
      if (nextProfile.solution === 'serv-engines' && nextProfile.pricingAsked) {
        appendAssistantMessage(
          `Thank you, ${nextProfile.name}. Sanderson will call you at ${nextProfile.phone} tomorrow. In the meantime, you can view our exact packages here: https://www.servengines.com`
        );
      } else {
        appendAssistantMessage(
          `Thank you, ${nextProfile.name}. Sanderson will call you at ${nextProfile.phone} tomorrow to discuss ${solutionLabel}.`
        );
      }
      return;
    }

    if (!nextProfile.solution && nextProfile.pricingAsked) {
      appendAssistantMessage(
        'Thanks for asking. What is the biggest bottleneck in your business right now so I can map the right solution?'
      );
      return;
    }

    if (!nextProfile.solution && detectLeadIntent(trimmed) && !pendingIntent) {
      setPendingIntent('lead-clarifier');
      appendAssistantMessage(
        'Got it. Is the main issue that you are missing calls while on the job, or that you are not showing up on Google / need a stronger website?'
      );
      return;
    }

    appendAssistantMessage(
      'Understood. Are you looking for more inbound leads, or are you trying to stop missed calls while your team is busy?'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Chat with Sanderson AI
        </button>
      )}

      {isOpen && (
        <div className="w-[340px] max-w-[90vw] overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#111111] px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Sanderson AI Assistant</p>
              <p className="text-xs text-gray-400">Direct, consultative, and concise.</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-gray-400 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    message.role === 'assistant'
                      ? 'bg-white/10 text-white'
                      : 'bg-[#D4AF37] text-black'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={scrollAnchor} />
          </div>

          <div className="border-t border-white/10 px-3 py-3">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Describe your bottleneck..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="rounded-full bg-[#D4AF37] p-2 text-black transition-colors hover:brightness-110"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
