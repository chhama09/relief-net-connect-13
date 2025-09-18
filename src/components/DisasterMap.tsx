import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Settings, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DisasterMap = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [isTokenSet, setIsTokenSet] = useState(false);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      toast({
        title: "🗺️ Map Initialized",
        description: "Mapbox integration is now active. Heatmap will display incident locations.",
      });
    }
  };

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span>Incident Heatmap</span>
        </CardTitle>
        <CardDescription>
          Interactive map showing real-time emergency requests and resource distribution
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!isTokenSet ? (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg border-l-4 border-secondary">
              <div className="flex items-start space-x-2">
                <Info className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Mapbox Integration Required</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    To display the interactive heatmap, please provide your Mapbox public token.
                    Get your token at{" "}
                    <a 
                      href="https://mapbox.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-secondary hover:underline"
                    >
                      mapbox.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mapboxToken">Mapbox Public Token</Label>
                <Input
                  id="mapboxToken"
                  type="text"
                  placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>
              <Button type="submit" className="w-full">
                <Settings className="h-4 w-4 mr-2" />
                Initialize Map
              </Button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Map Container */}
            <div className="w-full h-96 bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-lg font-medium text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">
                  Mapbox integration ready - Map component will render here
                </p>
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <span className="text-sm">Critical</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-warning"></div>
                <span className="text-sm">High Priority</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="text-sm">Medium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-success"></div>
                <span className="text-sm">Resolved</span>
              </div>
            </div>
            
            {/* Map Stats */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Active Requests</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-warning">3</p>
                <p className="text-sm text-muted-foreground">Critical Cases</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-success">8</p>
                <p className="text-sm text-muted-foreground">Resolved Today</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DisasterMap;