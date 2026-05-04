export type JourneyChatSender = "visitor" | "menno";

export type JourneyChatMessage = {
  id: string;
  conversationId: string;
  sender: JourneyChatSender;
  text: string;
  createdAt: string;
  visitorLabel?: string | null;
};

export type JourneyInboxRow = {
  conversationId: string;
  lastMessageAt: string;
  lastText: string;
  lastSender: JourneyChatSender;
  visitorLabel: string | null;
};
