import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider, ThemeContext } from "../context/theme";


function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <main className={theme}>
      <ThemeProvider>
        <UserProvider>
        <Header />
        <Profile />
        </UserProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
