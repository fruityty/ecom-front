import MainLayout from "../layouts/MainLayout";
import Logobar from "../components/Logobar";
import { Box } from '@mui/material';
import Cover from "../components/Cover";

export default function HomePage() {
  return (
    <MainLayout>
      
        <Cover></Cover>
    
        <Logobar></Logobar>
      
    </MainLayout>
  );
}