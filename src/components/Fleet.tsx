import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fleetItems = [
{
  category: "Bulk Transport Vehicles",
  items: ["10m³ Tipper Trucks", "34-Ton Side Tippers", "40-Ton Side Tippers"],
  color: "bg-accent"
},
{
  category: "Construction & Earthmoving Equipment",
  items: ["TLBs", "Excavators", "Rollers", "Compactors", "Graders"],
  color: "bg-primary"
},
{
  category: "Passenger Transport Vehicles",
  items: ["22-Seater Mine-Spec Buses", "Executive Vehicles"],
  color: "bg-accent"
},
{
  category: "Support Fleet",
  items: ["Water Bowsers", "Diesel Bowsers", "Low-bed Trailers"],
  color: "bg-primary"
}];


const features = [
"Mine-compliant & safety certified",
"Fully maintained fleet",
"Safety audited",
"Operator supported",
"Short turnaround times",
"Competitive rates"];


interface FleetProps {
  showCTA?: boolean;
}

export const Fleet = ({ showCTA = true }: FleetProps) => {
  return;















































































};