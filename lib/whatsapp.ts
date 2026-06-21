export const WA_PHONE = "447311254423";

const messages: Record<string, string> = {
  "/": "Hi, I'm interested in online Quran classes for my child. Can you tell me more?",
  "/courses/noorani-qaida": "Hi, I'm interested in Noorani Qaida classes at Ease Quran. Can you help me get started?",
  "/courses/quran-reading": "Hi, I'm interested in Quran Reading classes at Ease Quran. Can you help me get started?",
  "/courses/hifz": "Hi, I'm interested in Hifz (Quran memorisation) classes at Ease Quran. Can you tell me more?",
  "/courses/tajweed": "Hi, I'm interested in Tajweed classes at Ease Quran. Can you help me get started?",
  "/courses/islamic-studies": "Hi, I'm interested in Islamic Studies classes at Ease Quran. Can you tell me more?",
  "/courses/tafseer": "Hi, I'm interested in Tafseer classes at Ease Quran. Can you tell me more?",
  "/locations/london": "Hi, I'm a family in London looking for online Quran classes. Can you help?",
  "/locations/birmingham": "Hi, I'm a family in Birmingham looking for online Quran classes. Can you help?",
  "/locations/manchester": "Hi, I'm a family in Manchester looking for online Quran classes. Can you help?",
  "/locations/bradford": "Hi, I'm a family in Bradford looking for online Quran classes. Can you help?",
  "/locations/leicester": "Hi, I'm a family in Leicester looking for online Quran classes. Can you help?",
  "/female-quran-teachers": "Hi, I'm looking for a female Quran teacher for my daughter. Can you help?",
  "/free-trial": "Hi, I'd like to book a free trial Quran class. Can you arrange this for me?",
  "/pricing": "Hi, I'd like to know more about your Quran class pricing and plans. Can you help?",
  "/contact": "Hi, I have a question about Ease Quran classes. Can you help?",
  "/about": "Hi, I'd like to know more about Ease Quran UK and your teachers.",
  "/safety": "Hi, I read about your child safety approach and I'd like to book a free trial class.",
  "/blog/is-it-safe-online-quran-classes-uk": "Hi, I read your article about online Quran safety and I'd like to book a free trial class.",
};

const DEFAULT = "Hi, I'm interested in online Quran classes at Ease Quran UK. Can you help?";

export function waLink(pathname: string): string {
  const msg = messages[pathname] ?? DEFAULT;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
}
