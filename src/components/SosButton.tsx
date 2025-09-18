import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SosButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleSosPress = () => {
    setIsPressed(true);
    // Simulate SOS signal sent
    toast({
      title: "🚨 SOS SIGNAL SENT",
      description: "Emergency responders have been notified of your location.",
      variant: "destructive",
    });
    
    // Reset button after 3 seconds
    setTimeout(() => setIsPressed(false), 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button
        variant="emergency"
        size="emergency-sos"
        onClick={handleSosPress}
        disabled={isPressed}
        className={`relative ${isPressed ? 'animate-pulse scale-110' : ''}`}
      >
        <AlertTriangle className="h-8 w-8" />
        SOS
      </Button>
      
      <div className="text-center space-y-2">
        <p className="text-sm font-medium text-muted-foreground">
          Emergency Button
        </p>
        <p className="text-xs text-muted-foreground max-w-xs">
          Press to send immediate SOS signal with your location to emergency responders
        </p>
        
        <div className="flex items-center justify-center space-x-4 mt-4">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Call 911</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SosButton;