import { createMemoryRouter, Navigate, Outlet } from "react-router";
import { EntryGate } from "./pages/EntryGate";
import { MainLobby } from "./pages/MainLobby";
import { ClubStory } from "./pages/ClubStory";
import { Events } from "./pages/Events";
import { PrivateRooms } from "./pages/PrivateRooms";
import { Membership } from "./pages/Membership";
import { useAuth } from "./AuthContext";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export const router = createMemoryRouter([
  {
    path: "/",
    Component: EntryGate,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/lobby",
        Component: MainLobby,
      },
      {
        path: "/story",
        Component: ClubStory,
      },
      {
        path: "/events",
        Component: Events,
      },
      {
        path: "/rooms",
        Component: PrivateRooms,
      },
      {
        path: "/membership",
        Component: Membership,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
