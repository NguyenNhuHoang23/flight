const DEPART_KEY = "selected_depart_flight";
const RETURN_KEY = "selected_return_flight";
const SEARCH_ID_KEY = "flight_selection_search_id";

export function clearFlightSelection() {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(DEPART_KEY);
  sessionStorage.removeItem(RETURN_KEY);
  sessionStorage.removeItem(SEARCH_ID_KEY);
}

export function getFlightSelectionSearchId(): string | null {
  if (typeof window === "undefined") return null;

  return sessionStorage.getItem(SEARCH_ID_KEY);
}

export function saveSelectedDepartFlight(searchId: string, flight: unknown) {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(SEARCH_ID_KEY, searchId);
  sessionStorage.setItem(DEPART_KEY, JSON.stringify(flight));
}

export function saveSelectedReturnFlight(searchId: string, flight: unknown) {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(SEARCH_ID_KEY, searchId);
  sessionStorage.setItem(RETURN_KEY, JSON.stringify(flight));
}

export function loadSelectedFlights(searchId: string) {
  if (typeof window === "undefined") {
    return { depart: null, returnFlight: null };
  }

  const savedSearchId = sessionStorage.getItem(SEARCH_ID_KEY);

  if (savedSearchId !== searchId) {
    return { depart: null, returnFlight: null };
  }

  let depart = null;
  let returnFlight = null;

  try {
    const savedDepart = sessionStorage.getItem(DEPART_KEY);
    if (savedDepart) depart = JSON.parse(savedDepart);

    const savedReturn = sessionStorage.getItem(RETURN_KEY);
    if (savedReturn) returnFlight = JSON.parse(savedReturn);
  } catch {
    clearFlightSelection();
  }

  return { depart, returnFlight };
}
