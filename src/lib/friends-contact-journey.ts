import { isJourneyChatConversationId } from "./journey-chat-utils";

/** sessionStorage key for post–friends-contact “Higgs journey” profile snapshot. */
export const FRIENDS_CONTACT_JOURNEY_STORAGE_KEY = "friendsContactJourney_v1";

/** Stable chat thread id for journey ↔ Menno messages (per browser tab). */
const JOURNEY_CHAT_CONVERSATION_KEY = "journeyChatConversationId_v1";

export function getOrCreateJourneyChatConversationId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = sessionStorage.getItem(JOURNEY_CHAT_CONVERSATION_KEY);
    if (!id || !isJourneyChatConversationId(id)) {
      id = crypto.randomUUID();
      sessionStorage.setItem(JOURNEY_CHAT_CONVERSATION_KEY, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export type FriendContactJourneySnapshot = {
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
  submittedAt: string;
};

export function readJourneySnapshot(): FriendContactJourneySnapshot | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(FRIENDS_CONTACT_JOURNEY_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as FriendContactJourneySnapshot;
    if (!data || typeof data.name !== "string") return null;
    return data;
  } catch {
    return null;
  }
}

/** Map the friends-contact form into the journey payload (no consent flags stored). */
export function writeJourneySnapshotFromForm(form: {
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
}): void {
  if (typeof window === "undefined") return;
  try {
    const payload: FriendContactJourneySnapshot = {
      name: form.name,
      alienName: form.alienName,
      age: form.age,
      birthday: form.birthday,
      currentResidence: form.currentResidence,
      birthPlace: form.birthPlace,
      favoriteColor: form.favoriteColor,
      spaceFood: form.spaceFood,
      spaceGear: form.spaceGear,
      heroReason: form.heroReason,
      alienHobbies: form.alienHobbies,
      danceBattleSong: form.danceBattleSong,
      favoriteDisneyFilm: form.favoriteDisneyFilm,
      spaceMessage: form.spaceMessage,
      submittedAt: new Date().toISOString(),
    };
    sessionStorage.setItem(FRIENDS_CONTACT_JOURNEY_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* quota / private mode */
  }
}
