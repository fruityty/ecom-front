// src/layouts/MainLayout.tsx
import { colors } from "@mui/material";
import Headbar from "../components/Headbar";
import Footbar from "../components/Footbar";

export default function MainLayout({ children }) {
   return (
    <>
    <header><Headbar /></header>
    <main>{/* page content here */}</main>
    <footer><Footbar /></footer>
    </>
  );
}
